import Text from "./text.json"
import "./style.css"
import ReturnBtn from "./return-btn"

function About() {

  return (
    <div className="main-div about-div">
        <ReturnBtn link="/"/>
        <div className="proj-title-container">
          <img src={Text.about.imageLink} className="project-img"></img>
          <h2>{Text.about.title}</h2>       
        </div>
        <p>{Text.about.description}</p>
    </div>
  )
}

export default About