import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Text from "./text.json"
import "./style.css"
import ProfileIcon from "./images/profile-icon.svg"
import ProjectIcon from "./images/project-icon.svg"
import ContactIcon from "./images/contact-icon.svg"

function Index() {

  return (
    <div className="main-div">
      <h1>{Text.index.name}</h1>
      <h2>{Text.index.title}</h2>
      <div className="index-box-container">
        <div className="index-box">
          <Link to="about" className="index-btn"><img src={ProfileIcon}></img></Link>
          <h3>{Text.about.title}</h3>
        </div>
        <div className="index-box">
          <Link to="projects" className="index-btn"><img src={ProjectIcon}></img></Link>
          <h3>{Text.project.title}</h3>
        </div>
        <div className="index-box">
          <Link to="contact" className="index-btn"><img src={ContactIcon}></img></Link>
          <h3>{Text.contact.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default Index
