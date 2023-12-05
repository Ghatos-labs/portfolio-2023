import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Text from "./text.json"
import "./style.css"
import ReturnBtn from "./return-btn"
import MailIcon from "./images/mail-icon.svg"
import MaltIcon from "./images/malt-icon.svg"
import LinkedinIcon from "./images/linkedin-icon.svg"
import YoutubeIcon from "./images/youtube-icon.svg"

function Contact() {

  return (
    <div className="main-div contact-div">
        <ReturnBtn link="/"/>
        <h2>{Text.contact.title}</h2>
        <p>{Text.contact.description}</p>
        <div className="wide-btn-container">
            <a href="mailto:marwan.akkari2021@gmail.com" target="_blank" className="wide-btn"><img src={MailIcon}></img><h3>E-mail</h3></a>
            <a href="https://www.malt.fr/profile/marwanakkari" target="_blank" className="wide-btn"><img src={MaltIcon}></img><h3>Malt</h3></a>
            <a href="https://www.linkedin.com/in/marwan-akkari/" target="_blank" className="wide-btn"><img src={LinkedinIcon}></img><h3>Linkedin</h3></a>
            <a href="https://www.youtube.com/channel/UCpxCUJ4-KyRkuPDWfikZkrg" target="_blank" className="wide-btn"><img src={YoutubeIcon}></img><h3>Youtube</h3></a>
        </div>
    </div>
  )
}

export default Contact