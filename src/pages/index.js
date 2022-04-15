import * as React from "react"
import PreviousExperience from "../components/resume/PreviousExperience"
import SkillsComponent from "../components/resume/SkillsComponent"
import TitleComponent from "../components/resume/TitleComponent"
import previousExperienceData from "../data/PreviousExperience.json"
import qualificationsData from "../data/Qualifications.json"
import skillsJSON from "../data/Skills.json"
import "../styles/index.css"

const IndexPage = () => {
  return (
    <section className="body">
      
      <div className="two-column left-align title-component">
        <div className="titleComponent">
          <TitleComponent />
        </div>
      </div>
      <hr className="horizontal-line"/>
      <main>
        <div className="two-column left-align main-component">
          <div className="left">
          <div className="skills">
            {
             Object.keys(skillsJSON).map(function(key, index){
              return(
                <SkillsComponent data = { skillsJSON[key] } heading={ key } key = { index } /> 
                )
              })
            }
          </div>
          <div className="qualifications">
            {
              Object.keys(qualificationsData).map(function(key, index){
              return(
                <SkillsComponent data = { qualificationsData[key] } heading={ key } key = { index } /> 
                )
              })
            }
            </div>
          </div>
          <div className ="right">
            <div className="previous-experience">
              {previousExperienceData.data.map((data, index) => 
                <PreviousExperience data = { data } key={ index } />
              )}
            </div>
          </div>
           
        </div>
      </main>
      <footer>
      </footer>
    </section>
  )
}
export default IndexPage
