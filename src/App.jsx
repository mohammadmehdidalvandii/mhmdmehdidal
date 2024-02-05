import { useRoutes } from "react-router-dom"
import routes from "../routes"

import Sidebar from './Components/Module/Sidebar/Sidebar'
import Header from "./Components/Module/Header/Header"
import Menu from "./Components/Module/Menu/Menu"

function App() {
  const router = useRoutes(routes)

  return (
    <div className="container">
      <Menu/>
        <div className="row mt-5 mb-5">
          <div className="col-lg-3">
            <Sidebar/>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-12">
                <Header/>
              </div>
              <div className="col-12 mt-5">
                {router}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
