import * as React from 'react'
//import { Link } from 'gatsby'
import * as styles from '../../styles/PreviousExperience.module.css'

const PreviousExperience = ({ data, index }) => {
  return (
    
        <div className={ styles.item }>
            <a className= { styles.container } href= { data.companyURL }>
                <div className={styles.title}> 
                    {data.position} @ { data.companyName }
                </div>
            </a>
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
  )
}

export default PreviousExperience