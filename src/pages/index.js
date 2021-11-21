import * as React from "react"
import PreviousExperience from "../components/resume/previousExperience"
import TitleComponent from "../components/resume/TitleComponent"
import jsonData from "../data/PreviousExperience.json"
import "../styles/index.css"
import image from "../images/dexter_image.png"

const IndexPage = () => {
  return (
    <section className="body">
      
      <div className="title-component">
        <div className="left">
          <img src={ image }/>
        </div>
        <div className="right">
          <TitleComponent />
        </div>
      </div>
      <hr className="horizontal-line"/>
      <main>
        <div className="previous-experience">
          {jsonData.data.map((data, index) => 
            <PreviousExperience data = { data } index =  { index } />
          )}
        </div>
      </main>
      <footer></footer>
    </section>
  )
}
export default IndexPage
