import React from 'react'
import TitleComponent from './TitleComponent'
import imageLinkedin from '../../images/linkedin.png'
import imageEmail from '../../images/email.png'

const HeroBanner = ({ theme, onToggleTheme }) => (
  <section className="hero-banner">
    <button
      className="theme-toggle-icon"
      type="button"
      onClick={onToggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>

    <div className="hero-copy">
      <span className="hero-eyebrow">Analytics & Experimentation Leader</span>
      <h1>Hi, I’m Raghav Sharma.</h1>
      <p className="hero-description">
        I build analytics implementation systems and measurement architecture
        that help product teams collect high-quality data, streamline data
        operations, and unlock faster insights across digital platforms.
      </p>

      <div className="hero-metrics">
        <div>
          <strong>8+ years</strong>
          <span>enterprise analytics</span>
        </div>
        <div>
          <strong>50+</strong>
          <span>tracking systems</span>
        </div>
      </div>
    </div>

    <aside className="hero-card">
      <TitleComponent />
      <div className="hero-card-details">
        <div className="contact-block">
          <h3>Contact</h3>
          <div className="contact-item">
            <img src={imageEmail} alt="Email icon" />
            <a href="mailto:raghavsharmaanalytics@gmail.com">Email Me</a>
          </div>
          <p>
            <strong>Location:</strong> Toronto, Canada
          </p>
          <div className="contact-item">
            <img src={imageLinkedin} alt="LinkedIn icon" />
            <a
              href="https://ca.linkedin.com/in/raghav-sharma-80633452"
              rel="noopener noreferrer"
              target="_blank"
            >
              View LinkedIn
            </a>
          </div>
          <div className="contact-item">
            <svg
              className="contact-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.29 3.438 9.771 8.205 11.362.6.111.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.606-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 0 1 3.003-.404 11.51 11.51 0 0 1 3.003.404c2.292-1.552 3.298-1.23 3.298-1.23.654 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.605-.015 2.898-.015 3.293 0 .319.218.694.824.576C20.565 22.066 24 17.583 24 12.297 24 5.67 18.627.297 12 .297z"/>
            </svg>
            <a
              href="https://github.com/raghavsharmaanalytics"
              rel="noopener noreferrer"
              target="_blank"
            >
              View GitHub
            </a>
          </div>
          <hr className="horizontal-line" />
          <p>
            Checkout more of what I am working on at{' '}
            <a
              href="https://weekendco.de"
              rel="noopener noreferrer"
              target="_blank"
            >
              weekendco.de
            </a>
            .
          </p>
          <a className="hero-card-link" href="#contact">
            Book a Conversation
          </a>
        </div>
      </div>
    </aside>
  </section>
)

export default HeroBanner
