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
            <Link to="hexword" className="wide-btn"><h3><img src={GameIcon}></img>Hexword</h3></Link>
            <Link to="hexword" className="wide-btn"><img src={GameIcon}></img><h3>Scalper shooter</h3></Link>
            <Link to="hexword" className="wide-btn"><img src={VideoIcon}></img><h3>CV vidéo</h3></Link>
            <Link to="hexword" className="wide-btn"><img src={GameIcon}></img><h3>Falling shapes</h3></Link>
            <Link to="hexword" className="wide-btn"><img src={WebsiteIcon}></img><h3>Tactical nounours</h3></Link>
            <Link to="hexword" className="wide-btn"><img src={GameIcon}></img><h3>Depletime</h3></Link>
        </div>
    </div>
  )
}

export default Projects