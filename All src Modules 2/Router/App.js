import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import Services from "./Services";
import Contactus from "./Contactus";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return  <>
            {/* <Router>
            <Navbar/>

            <Switch>
              <Route path='/home'component={Home} />
              <Route path='/product'component={Product} />
              <Route path='/services'component={Services} />
              <Route path='/contactus'component={Contactus} />
            </Switch>
            </Router> */}

{/* 
              above syntax refer the react-router-dom past version 
              in past  version switch is updated to Routes 
              And Component Attribute  is updated to element in Route */}


            <Router>
            <Navbar/>

            <Routes>
              <Route path='/home'element={<Home/>} />
              <Route path='/product'element={<Product/>} />
              <Route path='/services'element={<Services/>} />
              <Route path='/contactus'element={<Contactus/>} />
            </Routes>
            </Router>
          </>
}

export default App;
