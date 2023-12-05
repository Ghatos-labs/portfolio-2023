import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Text from "./text.json"
import ReturnIcon from "./images/return-icon.svg"
import "./style.css"

interface Props {
  link: string
}

function ReturnBtn(props: Props) {

  return (
    <Link to={props.link} className="return-btn"><img src={ReturnIcon}></img><h3>{Text.returnBtn.text}</h3></Link>
  )
}

export default ReturnBtn