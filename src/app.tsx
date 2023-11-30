import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./index"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"
import ProjSynopsys from "./proj-synopsis"
import "./style.css"

function App(){
  return(
    <body>
        <div className="dotted-background"></div>
        <Router>
            <Routes>
                <Route path="/" element={<Index />}/>
                <Route path="about" element={<About />}/>
                <Route path="projects" element={<Projects />}/>
                <Route path="projects/hexword" element={<ProjSynopsys project="hexword"/>}/>
                <Route path="projects/scalper-shooter" element={<ProjSynopsys project="scalperShooter"/>}/>
                <Route path="projects/cv-video" element={<ProjSynopsys project="cvVideo"/>}/>
                <Route path="projects/falling-shapes" element={<ProjSynopsys project="fallingShapes"/>}/>
                <Route path="projects/tactical-nounours" element={<ProjSynopsys project="tacticalNounours"/>}/>
                <Route path="projects/depletime" element={<ProjSynopsys project="depletime"/>}/>
                <Route path="contact" element={<Contact />}/>
            </Routes>
        </Router>
    </body>
  )
}

export default App