import React from 'react'
import * as styles from '../../styles/SkillsComponent.module.css'

const SkillsComponent = ({ data, heading }) => (
  <section className={styles.container}>
    <h2 className={styles.heading}>{heading}</h2>
    <div className={styles.itemsList}>
      {data.map((skill, index) => (
        <span key={`${heading}-${skill}-${index}`} className={styles.item}>
          {index > 0 && ', '}
          {skill}
        </span>
      ))}
    </div>
  </section>
)

SkillsComponent.propTypes = {
  data: Array,
  heading: String,
}

export default SkillsComponent