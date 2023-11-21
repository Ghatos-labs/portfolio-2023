import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./index"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"
import ReturnBtn from "./return-btn";
import "./style.css"

function App(){
  return(
    <body>
        <div className="dotted-background"></div>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route path="/about">
                    <ReturnBtn />
                    <About />
                </Route>
                <Route path="/projects">
                    <ReturnBtn />
                    <Projects />
                </Route>
                <Route path="/contact">
                    <ReturnBtn />
                    <Contact />
                </Route>
            </Switch>
        </Router>
    </body>
  )
}

export default App