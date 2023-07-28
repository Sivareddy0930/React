
import Navbar from "./Navbar";
import Product from './Product';
import Service from "./Service";
import Login from "./Login";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return  <>
              <Router>
                  <Navbar/>

                  <Routes>
                  <Route path='/product' element={<Product/>}/>
                  <Route path="/service" element={<Service/>}/>
                  <Route path="/login" element={<Login/>}/>
                  </Routes>
              </Router>
          </>
}

export default App;
