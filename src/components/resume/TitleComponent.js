import * as React from 'react'
//import { Link } from 'gatsby'
import * as styles from "../../styles/TitleComponent.module.css"
import imageLinkedin from "../../images/linkedin.png"
import imageInstagram from "../../images/instagram.png"
import imageTwitter from "../../images/twitter.png"
import image from "../../images/main_image_avatar.png"
import imageLocation from "../../images/location.png"
import imageEmail from "../../images/email.png"
import imageTelephone from "../../images/telephone.png"

const TitleComponent = () => {
  return (
    <header className = { styles.container }>
      <title>Raghav Sharma | Resume </title>
      <div className={styles.image}>
        <img src={ image } alt="personal identity thru visual - Raghav Sharma"/>
      </div>
      <div className={styles.name}>
          <h1 className={ styles.bigName }> Raghav Sharma </h1>
          <div className={ styles.titleLine }>
            Digital Analytics Professional, Architect, Implementor and Strategist
          </div>
      </div>
      <div className={styles.personalInformation}>
            <span class={ styles.mobileHide } >&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <div className="email">
              <img src={imageEmail} alt="personal email - iraghavsharma@proton.me" />
              <span>iraghavsharma@proton.me</span>
            </div>
            <span class={ styles.mobileHide }>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <div className="nearestMetro">
              <img src={imageLocation} alt="current Location - Toronto" />
              <span>Toronto, Ontario</span>
            </div>
      </div>
      <div className={ styles.socialInformation }>
              <a href="https://ca.linkedin.com/in/raghav-sharma-80633452" className="linkedIn"><img src={ imageLinkedin } alt="Connect with me on LinkedIn"/></a>
              <a href="https://twitter.com/iragbag" className="twitter"><img src={ imageTwitter } alt="follow me on twitter" /></a>
              <a href="https://www.instagram.com/irraghav/" className="instagram"><img src={ imageInstagram } alt="follow me on instagram" /></a>
      </div>
    </header>
  )
}

export default TitleComponent