import * as React from 'react'
//import { Link } from 'gatsby'
import * as styles from "../../styles/TitleComponent.module.css"
import imageLinkedin from "../../images/linkedin.png"
import imageInstagram from "../../images/instagram.png"
import imageTwitter from "../../images/twitter.png"
import image from "../../images/main_image_avatar.png"
import imageLocation from "../../images/location.png"
import imageEmail from "../../images/email.png"
import personalInformation from "../../data/PersonalInformation.json"

const TitleComponent = () => {
  return (
    <header className = { styles.container }>
      <title>{personalInformation.fullName} | Resume </title>
      <div className={styles.image}>
        <img src={ image } alt="personal identity thru visual - Raghav Sharma"/>
      </div>
      <div className={styles.name}>
          <h1 className={ styles.bigName }> {personalInformation.fullName} </h1>
          <div className={ styles.titleLine }>
            Digital Analytics Strategist, Architect and Implementor
          </div>
      </div>
      <div className={styles.personalInformation}>
            <div className="email">
              <img src={imageEmail} alt="personal email" />
              <span>{personalInformation.email.work}</span>
            </div>
            <span className={ styles.mobileHide }>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <div className="nearestMetro">
              <img src={imageLocation} alt="nearest metropolitan area" />
              <span>{personalInformation.address.closestWorkPlace}</span>
            </div>
      </div>
      <div className={ styles.socialInformation }>
              <a href="https://ca.linkedin.com/in/raghav-sharma-80633452" className="linkedIn"><img src={ imageLinkedin } alt="Connect with me on LinkedIn"/></a>
      </div>
    </header>
  )
}

export default TitleComponent