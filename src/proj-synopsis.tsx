import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Text from "./text.json"
import ReturnBtn from "./return-btn"
import "./style.css"
import WebsiteIcon from "./images/web-icon.svg"

interface Props {
  project: string
}

function ProjSynopsys(props: Props) {
  //this line throws an error but the code does works, so...
  const { title, imageLink, description, projLink } = Text.project[props.project];
  return (
    <div className="main-div about-div">
      <ReturnBtn link="/projects"/>
      <div className="proj-title-container">
        <img key={props.project} src={imageLink} className="project-img"></img>
        <h2 key={props.project}>{title}</h2>   
      </div>
      <p key={props.project}>{description}</p>
      <div className="wide-btn-container" style={{marginBottom: "50px"}}>
        <a key={props.project} href={projLink} className="wide-btn" style={{transform: "translateX(50%)"}}><img src={WebsiteIcon}></img><h3>Lien vers le projet</h3></a>     
      </div>
    </div>
  );
}

export default ProjSynopsys