import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import icon from "./images/vite.svg"
import "./style.css"

function Hexword() {

  return (
    <div className="main-div about-div">
        <h2>Hexword</h2>
        <img src="https://placekitten.com/300/200" className="project-img"></img>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quae modi doloremque perspiciatis. Deleniti porro animi quas aspernatur ratione odit minus explicabo dolorem? Optio, unde harum repudiandae nesciunt voluptatem necessitatibus.</p>
    </div>
  )
}

export default Hexword