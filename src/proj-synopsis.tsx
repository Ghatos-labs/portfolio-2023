import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Text from "./text.json"
import ReturnBtn from "./return-btn"
import "./style.css"

interface Props {
  project: string
}

function ProjSynopsys(props: Props) {
  var project = null;
  if(props.project == "hexword")
  {
    project = <div className="main-div about-div">
          <ReturnBtn link="/projects"/>
          <h2>{Text.project.hexword.title}</h2>
          <img src={Text.project.hexword.imageLink} className="project-img"></img>
          <p>{Text.project.hexword.description}</p>
      </div>
  }
  else if(props.project == "scalperShooter")
  {
    project = <div className="main-div about-div">
          <ReturnBtn link="/projects"/>
          <h2>{Text.project.scalperShooter.title}</h2>
          <img src={Text.project.scalperShooter.imageLink} className="project-img"></img>
          <p>{Text.project.scalperShooter.description}</p>
      </div>
  }
  else if(props.project == "cvVideo")
  {
    project = <div className="main-div about-div">
          <ReturnBtn link="/projects"/>
          <h2>{Text.project.cvVideo.title}</h2>
          <img src={Text.project.cvVideo.imageLink} className="project-img"></img>
          <p>{Text.project.cvVideo.description}</p>
      </div>
  }
  else if(props.project == "fallingShapes")
  {
    project = <div className="main-div about-div">
          <ReturnBtn link="/projects"/>
          <h2>{Text.project.fallingShapes.title}</h2>
          <img src={Text.project.fallingShapes.imageLink} className="project-img"></img>
          <p>{Text.project.fallingShapes.description}</p>
      </div>
  }
  else if(props.project == "tacticalNounours")
  {
    project = <div className="main-div about-div">
          <ReturnBtn link="/projects"/>
          <h2>{Text.project.tacticalNounours.title}</h2>
          <img src={Text.project.tacticalNounours.imageLink} className="project-img"></img>
          <p>{Text.project.tacticalNounours.description}</p>
      </div>
  }
  else if(props.project == "depletime")
  {
    project = <div className="main-div about-div">
          <ReturnBtn link="/projects"/>
          <h2>{Text.project.depletime.title}</h2>
          <img src={Text.project.depletime.imageLink} className="project-img"></img>
          <p>{Text.project.depletime.description}</p>
      </div>
  }
  return project;
}

export default ProjSynopsys