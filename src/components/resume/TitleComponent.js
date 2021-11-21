import * as React from 'react'
//import { Link } from 'gatsby'
import * as styles from "../../styles/TitleComponent.module.css"

const TitleComponent = () => {
  return (
    <header className = { styles.container }>
      <title>Raghav Sharma | Resume </title>
        <div>
            <h1> Raghav Sharma </h1>
            <div>
              Digital Analytics Professional, Architect, Implementor and Strategist
            </div>
      </div>
    </header>
    
  )
}

export default TitleComponent