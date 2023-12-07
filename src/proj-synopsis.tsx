import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Text from "./text.json"
import ReturnBtn from "./return-btn"
import WebsiteIcon from "./images/url-icon.svg"
import "./style.css"
interface Props {
  project: string
}

function ProjSynopsys(props: Props) {
  // @ts-ignore: I'm confident that props.project is a valid key
  const { title, imageLink, description, projLink } = Text.project[props.project];
  return (
    <div className="main-div about-div">
      <ReturnBtn link="/projects"/>
      <div className="proj-title-container">
        <img key={props.project} src={imageLink} className="project-img"></img>
        <h2 key={props.project} style={{margin: "0"}}>{title}</h2>   
      </div>
      <p key={props.project}>{description}</p>
      <div className="wide-btn-container" style={{gridTemplateColumns:"1fr", justifyItems:"center"}}>
        <a key={props.project} href={projLink} className="wide-btn" target="blank_"><img src={WebsiteIcon}></img><h3>Lien vers le projet</h3></a>     
      </div>
    </div>
  );
}

export default ProjSynopsys