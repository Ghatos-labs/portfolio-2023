import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ReturnIcon from "./images/return-icon.svg"
import "./style.css"

function ReturnBtn() {

  return (
    <Link to="/" className="back-to-index"><h3><img src={ReturnIcon}></img>Retour</h3></Link>
  )
}

export default ReturnBtn