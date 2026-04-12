const fs = require('fs');
const path = require('path');

const IGNORED_DIRS = new Set(['.git', 'node_modules', '.cache', 'public']);
const SECRET_PATTERNS = [
  { name: 'AWS Access Key ID', regex: /\bAKIA[0-9A-Z]{16}\b/ },
  { name: 'Google API Key', regex: /\bAIza[0-9A-Za-z\-_]{35}\b/ },
  { name: 'Slack Token', regex: /\bxox[baprs]-[0-9A-Za-z]{10,}\b/ },
  { name: 'JWT-like token', regex: /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/ },
  { name: 'Private Key header', regex: /-----BEGIN (?:RSA |EC |DSA )?PRIVATE KEY-----/ },
  { name: 'Generic secret assignment', regex: /\b(?:API[_-]?KEY|CLIENT[_-]?SECRET|ACCESS[_-]?TOKEN|SECRET|PASSWORD|PASSWD)\b\s*[:=]\s*['\"][^'\"]{8,}['\"]/i },
];

function isIgnoredDir(dirName) {
  return IGNORED_DIRS.has(dirName);
}

function walkDirectory(baseDir) {
  const files = [];
  const stack = [baseDir];

  while (stack.length > 0) {
    const currentDir = stack.pop();
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (!isIgnoredDir(entry.name)) {
          stack.push(path.join(currentDir, entry.name));
        }
        continue;
      }

      if (entry.isFile()) {
        files.push(path.join(currentDir, entry.name));
      }
    }
  }

  return files;
}

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return SECRET_PATTERNS.flatMap(({ name, regex }) => {
    const matches = [];
    let match;
    const re = regex.flags.includes('g') ? regex : new RegExp(regex.source, `${regex.flags}g`);
    while ((match = re.exec(content)) !== null) {
      matches.push({ name, text: match[0], index: match.index });
    }
    return matches;
  });
}

function relativePath(filePath) {
  return path.relative(process.cwd(), filePath);
}

function main() {
  const workspaceDir = process.cwd();
  const files = walkDirectory(workspaceDir);
  const findings = [];

  for (const filePath of files) {
    const relative = relativePath(filePath);
    if (relative.startsWith('scripts/check-secrets.js')) {
      continue;
    }

    try {
      const matches = scanFile(filePath);
      if (matches.length > 0) {
        findings.push({ file: relative, matches });
      }
    } catch (error) {
      console.warn(`Skipping ${relative}: ${error.message}`);
    }
  }

  if (findings.length > 0) {
    console.error('Secret scan failed. Suspicious values were found in the following files:');
    for (const { file, matches } of findings) {
      console.error(`\n${file}`);
      for (const match of matches) {
        console.error(`  - ${match.name}: ${match.text}`);
      }
    }
    process.exit(1);
  }

  console.log('Secret scan passed. No suspicious values found in the workspace.');
  process.exit(0);
}

main();
