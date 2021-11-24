import * as React from 'react'
import * as styles from '../../styles/ContactMe.module.css'
import imageLinkedin from "../../images/linkedin.png"
import imageInstagram from "../../images/instagram.png"
import imageTwitter from "../../images/twitter.png"

const ContactMe = ({ page }) => {
    console.log(page);
  return (
    <div className={ styles.container }>
            <div className={ styles.item }>
                <div className="fullName">Raghav Sharma</div>
                <div className="phone">+1 647 822 0490</div>
                <div className="email">me@raghavsharma.ca</div>
                <div className="nearestMetro">Toronto, Ontario</div>
                <div className={ styles.social }>
                    <a className="linkedIn"><img src={ imageLinkedin } alt="Connect with me on LinkedIn"/> </a>
                    <a className="twitter"><img src={ imageTwitter } /> </a>
                    <a className="instagram"><img src={ imageInstagram } /></a>
                </div>
                
            </div>
    </div>
  )
}

export default ContactMe