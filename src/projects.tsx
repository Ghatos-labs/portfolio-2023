import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Text from "./text.json"
import ReturnBtn from "./return-btn"
import Hexword from "./proj-synopsis"
import GameIcon from "./images/game-icon.svg"
import VideoIcon from "./images/vid-icon.svg"
import WebsiteIcon from "./images/web-icon.svg"
import "./style.css"

function Projects() {

  return (
    <div className="main-div projects-div">
        <ReturnBtn link="/"/>
        <h2>{Text.project.title}</h2>
        <div className="wide-btn-container">
          <Link to="hexword" className="wide-btn"><h3><img src={GameIcon}></img>{Text.project.hexword.title}</h3></Link>
          <Link to="scalper-shooter" className="wide-btn"><img src={GameIcon}></img><h3>{Text.project.scalperShooter.title}</h3></Link>
          <Link to="cv-video" className="wide-btn"><img src={VideoIcon}></img><h3>{Text.project.cvVideo.title}</h3></Link>
          <Link to="falling-shapes" className="wide-btn"><img src={GameIcon}></img><h3>{Text.project.fallingShapes.title}</h3></Link>
          <Link to="tactical-nounours" className="wide-btn"><img src={WebsiteIcon}></img><h3>{Text.project.tacticalNounours.title}</h3></Link>
          <Link to="depletime" className="wide-btn"><img src={GameIcon}></img><h3>{Text.project.depletime.title}</h3></Link>
        </div>
    </div>
  )
}

export default Projects