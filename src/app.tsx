import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Body from "./body"
import Index from "./index"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"
import ProjSynopsys from "./proj-synopsis"
import "./style.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Body />}>
      <Route index element={<Index />} />
      <Route path="about" element={<About />}/>
      <Route path="projects">
        <Route index element={<Projects />}/>
        {/* <Route path="hexword" element={<ProjSynopsys project="hexword"/>}/> */}
        {/* <Route path="projects/hexword/play" element={<HexwordGame />}/> */}
        {/* <Route path="scalper-shooter" element={<ProjSynopsys project="scalperShooter"/>}/> */}
        {/* <Route path="projects/scalper-shooter/play" element={<ScalperGame />}/> */}
        <Route path="cv-video" element={<ProjSynopsys project="cvVideo"/>}/>
        <Route path="falling-shapes" element={<ProjSynopsys project="fallingShapes"/>}/>
        <Route path="tactical-nounours" element={<ProjSynopsys project="tacticalNounours"/>}/>
        <Route path="depletime" element={<ProjSynopsys project="depletime"/>}/>
      </Route>
      <Route path="contact" element={<Contact />}/>
    </Route>
  )
)

function App(){
  return(
      <RouterProvider router={router}/>
  );
}

export default App