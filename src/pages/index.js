import React, { useEffect, useState } from 'react'
import SkillsComponent from '../components/resume/SkillsComponent'
import HeroBanner from '../components/resume/HeroBanner'
import LazyExperience from '../components/resume/LazyExperience'
import previousExperienceData from '../data/PreviousExperience.json'
import qualificationsData from '../data/Qualifications.json'
import skillsData from '../data/Skills.json'
import { getAutoTheme } from '../utils/sunTimes'
import '../styles/index.css'

const renderSkillsSection = (data) =>
  Object.entries(data).map(([categoryName, categorySkills]) => (
    <SkillsComponent
      key={categoryName}
      data={categorySkills}
      heading={categoryName}
    />
  ))

const DEFAULT_LOCATION = { latitude: 43.6532, longitude: -79.3832 }

const IndexPage = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const storedTheme = window.localStorage.getItem('theme')
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme)
      return
    }

    const applyTheme = (latitude, longitude) => {
      const nextTheme = getAutoTheme(new Date(), latitude, longitude)
      setTheme(nextTheme)
      window.localStorage.setItem('theme', nextTheme)
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          applyTheme(position.coords.latitude, position.coords.longitude)
        },
        () => {
          applyTheme(DEFAULT_LOCATION.latitude, DEFAULT_LOCATION.longitude)
        },
        {
          maximumAge: 30 * 60 * 1000,
          timeout: 6000,
        }
      )
    } else {
      applyTheme(DEFAULT_LOCATION.latitude, DEFAULT_LOCATION.longitude)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    document.documentElement.classList.toggle('theme-dark', theme === 'dark')
    document.documentElement.classList.toggle('theme-light', theme === 'light')
  }, [theme])

  const toggleTheme = () => {
    setTheme((activeTheme) => {
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem('theme', nextTheme)
      return nextTheme
    })
  }

  return (
    <div className="body">
      <HeroBanner theme={theme} onToggleTheme={toggleTheme} />

      <main className="main-component">
        <section className="previous-experience">
          <div className="section-header">
            <h2>Past Experience</h2>
            <p>
              Roles load lazily as you scroll, keeping the resume fast and
              focused.
            </p>
          </div>
          <div className="timeline">
            {previousExperienceData.data.map((experience, index) => (
              <LazyExperience
                key={`${experience.companyName}-${experience.startTime}-${index}`}
                data={experience}
                index={index}
              />
            ))}
          </div>
        </section>

        <section className="tools-section">
          <div className="section-header">
            <h2>Tools & Skills</h2>
            <p>
              A snapshot of the platforms, analytics tools, and development
              skills I rely on to build resilient measurement systems.
            </p>
          </div>

          <div className="tools-grid">
            {Object.entries(skillsData).map(([category, items]) => (
              <div className="tool-card" key={category}>
                <h3>{category}</h3>
                <div className="tool-pills">
                  {items.map((item, index) => (
                    <span
                      className="tool-pill"
                      key={`${category}-${item}-${index}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-header">
            <h2>Let’s talk</h2>
            <p>
              Ready to turn your analytics, experimentation, or data strategy into
              measurable business outcomes?
            </p>
          </div>
          <a className="primary-button" href="mailto:raghavsharmaanalytics@gmail.com">
            Email Me
          </a>
        </section>
      </main>
    </div>
  )
}

export default IndexPage
