import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReturnIcon from "./images/return-icon.svg"
import "./style.css"

interface Props {
  link: string
}

function ReturnBtn(props: Props) {

  return (
    <Link to={props.link} className="back-to-index"><h3><img src={ReturnIcon}></img>Retour</h3></Link>
  )
}

export default ReturnBtn