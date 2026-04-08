import React from 'react'
import * as styles from '../../styles/PreviousExperience.module.css'

const HIGHLIGHTS_TITLE = 'Project Highlights:'

const PreviousExperience = ({ data }) => (
  <article className={styles.item}>
    <header className={styles.container}>
      <a href={data.companyURL} rel="noopener noreferrer" target="_blank">
        <h3 className={styles.title}>
          {data.position} @ {data.companyName}
        </h3>
      </a>
      <time className={styles.duration}>
        <span className={styles.durationStart}>{data.startTime}</span>
        {' - '}
        <span className={styles.durationEnd}>{data.endTime}</span>
      </time>
    </header>

    <section className={styles.description}>
      <h4>Responsibilities:</h4>
      <ul>
        {data.description.map((item, index) => (
          <li key={`desc-${index}`}>{item}</li>
        ))}
      </ul>
    </section>

    <section className={styles.highlights}>
      <h4 className={styles.highlightsTitle}>{HIGHLIGHTS_TITLE}</h4>
      <ul>
        {data.highlights.map((item, index) => (
          <li key={`highlight-${index}`}>{item}</li>
        ))}
      </ul>
    </section>
  </article>
)

PreviousExperience.propTypes = {
  data: Object,
}

export default PreviousExperience
