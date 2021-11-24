import * as React from 'react'
//import { Link } from 'gatsby'
import * as styles from '../../styles/PreviousExperience.module.css'

const PreviousExperience = ({ data, index }) => {
  return (
    <a className= { styles.container } href= { data.companyURL }>
        <div className={ styles.item }>
            <div className={styles.title}> 
                {data.position} @ { data.companyName }
            </div>
            <div className={ styles.duration }>
                <span className={ styles.durationStart }>{ data.startTime }</span> - <span className={styles.durationEnd}>{ data.endTime }</span>
            </div>
            <div className={ styles.highlights }>
                <ul>
                    { data.highlights.map((data,index) => 
                        <li key={index}>{ data }</li>
                    ) }
                </ul>
            </div>  
       
            <div className={ styles.projects }>
                <div className={ styles.projectsTitle }>Project Highlights:</div>
                <ul>
                    { data.projects.map((data,index) => 
                        <li key={index}>{ data }</li>
                    ) }
                </ul>
            </div>
        </div>
    </a>
  )
}

export default PreviousExperience