import { Outlet } from "react-router-dom"
import "./style.css"

function body () {
  return (
    <div>
        <Outlet />
        <div className="dotted-background"></div>
    </div>
  )
}

export default body