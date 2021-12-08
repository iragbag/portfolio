import * as React from 'react'
import * as styles from '../../styles/SkillsComponent.module.css'
const SkillsComponent = ({ data, heading, index }) => {

    return (
        <div className={styles.container}>
            <div className={styles.heading}>{ heading }</div>
            <div className={styles.itemsList}>
            {data.map((d, i) => 
                <span className={styles.item}>{(i ? ', ' : '')}{d}</span>
            )}
            </div>
        </div>
        )
    }
export default SkillsComponent