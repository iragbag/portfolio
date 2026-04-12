import React, { useState } from 'react'
import bmoLogo from '../../images/bmo-logo.svg'
import lululemonLogo from '../../images/lululemon-logo.png'
import shopifyLogo from '../../images/shopify-logo.svg'

const logoMap = {
  'bmo-logo.svg': bmoLogo,
  'lululemon-logo.png': lululemonLogo,
  'shopify-logo.svg': shopifyLogo,
}

const PreviousExperience = ({ data }) => {
  const [expanded, setExpanded] = useState(false)
  const logoFile = data.companyLogo?.split('/').pop()
  const logoSrc = logoFile ? logoMap[logoFile] : null
  const contentClasses = `experience-content ${expanded ? 'expanded' : 'collapsed'}`

  return (
    <div className="experience-card">
      <div className="experience-header">
        <div className="company-info">
          <div className="company-meta">
            {logoSrc && (
              <img
                src={logoSrc}
                alt={`${data.companyName} logo`}
                className="company-logo"
              />
            )}
            <div>
              <h3 className="position">{data.position}</h3>
              <a
                href={data.companyURL}
                className="company-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {data.companyName}
              </a>
            </div>
          </div>
        </div>
        <div className="experience-duration">
          <span className="duration-text">
            {data.startTime} - {data.endTime}
          </span>
        </div>
      </div>

      <div className={contentClasses}>
        <div className="experience-section">
          <h4>Key Responsibilities</h4>
          <ul className="experience-list">
            {data.description.map((item, index) => (
              <li key={`desc-${index}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="experience-section">
          <h4>Project Highlights</h4>
          <ul className="experience-list">
            {data.highlights.map((item, index) => (
              <li key={`highlight-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        className="expand-toggle"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        {expanded ? 'Hide details ▲' : 'Show details ▼'}
      </button>
    </div>
  )
}

export default PreviousExperience
