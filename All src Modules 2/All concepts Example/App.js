import Userapp from "./UserApp/Userapp";
import {Link,BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return  <>
        
             <Router>
             <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="#" className="navbar-brand">USER APP</Link>
                
                <div className="ml-auto">
                  <ul className="navbar-nav">
                    <li><Link to="user" className="nav-link">UserApp</Link></li>
                  </ul>
                </div>
              </nav>

              <Routes>
                <Route path="/user" element={<Userapp/>}  />
              </Routes>
             </Router>


       

            
            </>
}

export default App;
