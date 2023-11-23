import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReturnBtn from "./return-btn"
import "./style.css"

interface Props {
  project: string
}

function ProjSynopsys(props: Props) {

  return (
    <div className="main-div about-div">
        <ReturnBtn link="/projects"/>
        <h2>{props.project}</h2>
        <img src="https://placekitten.com/300/200" className="project-img"></img>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quae modi doloremque perspiciatis. Deleniti porro animi quas aspernatur ratione odit minus explicabo dolorem? Optio, unde harum repudiandae nesciunt voluptatem necessitatibus.</p>
    </div>
  )
}

export default ProjSynopsys