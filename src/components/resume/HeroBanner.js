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
        I build measurement systems and analytics architecture that help product
        teams move faster, test smarter, and make decisions with confidence.
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
          <a className="hero-card-link" href="#contact">
            Book a Conversation
          </a>
        </div>
      </div>
    </aside>
  </section>
)

export default HeroBanner
