import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MailIcon from "./images/mail-icon.svg"
import MaltIcon from "./images/malt-icon.svg"
import LinkedinIcon from "./images/linkedin-icon.svg"
import YoutubeIcon from "./images/youtube-icon.svg"
import "./style.css"

function Contact() {

  return (
    <div className="main-div contact-div">
        <h2>Me contacter</h2>
        <p>Vous pouvez me contacter via les plateformes suivantes:</p>
        <div className="wide-btn-container">
            <a href="mailto:marwan.akkari2021@gmail.com" target="_blank" className="wide-btn"><h3><img src={MailIcon}></img>E-mail</h3></a>
            <a href="https://www.malt.fr/profile/marwanakkari" target="_blank" className="wide-btn"><h3><img src={MaltIcon}></img>Malt</h3></a>
            <a href="https://www.linkedin.com/in/marwan-akkari/" target="_blank" className="wide-btn"><h3><img src={LinkedinIcon}></img>Linkedin</h3></a>
            <a href="https://www.youtube.com/channel/UCpxCUJ4-KyRkuPDWfikZkrg" target="_blank" className="wide-btn"><h3><img src={YoutubeIcon}></img>Youtube</h3></a>
        </div>
    </div>
  )
}

export default Contact