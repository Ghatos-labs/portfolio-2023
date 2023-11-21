import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import GameIcon from "./images/game-icon.svg"
import VideoIcon from "./images/vid-icon.svg"
import WebsiteIcon from "./images/web-icon.svg"
import "./style.css"

function Projects() {

  return (
    <div className="main-div projects-div">
        <h2>Mes projets</h2>
        <div className="wide-btn-container">
            <Link to="/projects/hexword" className="wide-btn"><h3><img src={GameIcon}></img>Hexword</h3></Link>
            <a href="#" className="wide-btn"><h3><img src={GameIcon}></img>Scalper shooter</h3></a>
            <a href="#" className="wide-btn"><h3><img src={VideoIcon}></img>CV vidéo</h3></a>
            <a href="#" className="wide-btn"><h3><img src={GameIcon}></img>Falling shapes</h3></a>
            <a href="#" className="wide-btn"><h3><img src={WebsiteIcon}></img>Tactical nounours</h3></a>
            <a href="#" className="wide-btn"><h3><img src={GameIcon}></img>Depletime</h3></a>
        </div>
    </div>
  )
}

export default Projects