import * as React from 'react'
//import { Link } from 'gatsby'
import * as styles from '../../styles/previousExperience.module.css'

const PreviousExperience = ({ data, index }) => {
  return (
    <div className={styles.item}>
        <div className={styles.itemTitle}> 
            { data.companyName }
            </div>
        <div className={ styles.itemDuration }>
            <span className={styles.itemDurationStart}>{ data.startTime }</span>
            -
            <span className={styles.itemDurationEnd}>{ data.endTime }</span>
        </div>
        <div className={styles.descriptionItems}>
            <ul>
                {data.highlights.map((data) => 
                    <li>{ data }</li>
                )}
            </ul>
        </div>  
    </div>
  )
}

export default PreviousExperience