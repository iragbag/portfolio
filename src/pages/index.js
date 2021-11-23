import * as React from "react"
import PreviousExperience from "../components/resume/previousExperience"
import TitleComponent from "../components/resume/TitleComponent"
import jsonData from "../data/PreviousExperience.json"
import "../styles/index.css"
import image from "../images/dexter_image.png"

const IndexPage = () => {
  return (
    <section className="body">
      
      <div className="two-column left-align title-component">
        <div className="left">
          <img src={ image } alt="personal identity thru visual - Raghav Sharma"/>
        </div>
        <div className="right">
          <TitleComponent />
        </div>
      </div>
      <hr className="horizontal-line"/>
      <main>
        <div className="two-column left-align main-component">
          <div className="left">
          </div>
          <div className ="right">
            <div className="previous-experience">
              {jsonData.data.map((data, index) => 
                <PreviousExperience data = { data } key={ index } />
              )}
            </div>
          </div> 
        </div>
      </main>
      <footer>
       <span className="disclaimer"> This website and all of it's sub-pages are build with the help of React and Gatsby Framework. Made by Raghav Sharma</span> 
      </footer>
    </section>
  )
}
export default IndexPage
