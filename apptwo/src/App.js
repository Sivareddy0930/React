import Product from "./Product";
import {Provider} from "react-redux"
import {Store} from './Store'
function App() {
  return  <>
          <Provider store={Store}>
          <Product/>
          </Provider>
            
            </>
}

export default App;
