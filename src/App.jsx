import { useRoutes } from "react-router-dom"
import routes from "../routes"

function App() {
  const router = useRoutes(routes)

  return (
    <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-lg-2">
            sidebar
          </div>
          <div className="col-lg-10">
            <div className="row">
              <div className="col-12">navbar</div>
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
