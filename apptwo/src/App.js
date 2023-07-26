import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import Services from "./Services";
import Contactus from "./Contactus";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
function App() {
  return  <>
            <Router>
            <Navbar/>

            <Switch>
              <Route path='/home'component={Home} />
              <Route path='/product'component={Product} />
              <Route path='/services'component={Services} />
              <Route path='/contactus'component={Contactus} />
            </Switch>
            </Router>
          </>
}

export default App;
