import * as React from 'react'
//import { Link } from 'gatsby'
import * as styles from '../../styles/PreviousExperience.module.css'

const PreviousExperience = ({ data, index }) => {
    console.log(data)
  return (
        <div className={ styles.item }>
            <a className= { styles.container } href= { data.companyURL }>
                <div className={styles.title}>
                    <span>{data.position} @ { data.companyName }</span>
                </div>
            </a>
            <div className={ styles.duration }>
                <span className={ styles.durationStart }>{ data.startTime }</span> - <span className={styles.durationEnd}>{ data.endTime }</span>
            </div>
            <div className={ styles.description }>
                <ul>
                    { data.description.map((data,index) => 
                        <li key={index}>{ data }</li>
                    ) }
                </ul>
            </div>  
       
            <div className={ styles.highlights }>
                <div className={ styles.highlightsTitle }>Project Highlights:</div>
                <ul>
                    { data.highlights.map((data,index) => 
                        <li key={index}>{ data }</li>
                    ) }
                </ul>
            </div>
        </div>
  )
}

export default PreviousExperience
