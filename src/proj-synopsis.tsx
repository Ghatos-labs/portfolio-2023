import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Text from "./text.json"
import ReturnBtn from "./return-btn"
import "./style.css"

interface Props {
  project: string
}

function ProjSynopsys(props: Props) {
  //this line throws an error but the code does works, so...
  const { title, imageLink, description } = Text.project[props.project];

  return (
    <div className="main-div about-div">
      <ReturnBtn link="/projects"/>
      <h2 key={props.project}>{title}</h2>
      <img key={props.project} src={imageLink} className="project-img" alt={title}></img>
      <p key={props.project}>{description}</p>
    </div>
  );
}

export default ProjSynopsys