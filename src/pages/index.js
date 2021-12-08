import * as React from "react"
import PreviousExperience from "../components/resume/PreviousExperience"
import SkillsComponent from "../components/resume/SkillsComponent"
import TitleComponent from "../components/resume/TitleComponent"
import jsonData from "../data/PreviousExperience.json"
import skillsJSON from "../data/Skills.json"
import "../styles/index.css"

const IndexPage = () => {
  return (
    <section className="body">
      
      <div className="two-column left-align title-component">
        <div className="right">
          <TitleComponent />
        </div>
      </div>
      <hr className="horizontal-line"/>
      <main>
        <div className="two-column left-align main-component">
          <div className="left">
          
          {Object.keys(skillsJSON).map(function(key, index){
            return(
              <SkillsComponent data = { skillsJSON[key] } heading={ key } key = { index } /> 
              )
            })
          }
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
