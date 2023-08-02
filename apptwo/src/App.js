import Product from "./Product";
import {Provider} from "react-redux"
import {store} from "./store"
function App() {
  return  <>
            <Provider store={store} >
                  <Product/>
            </Provider>
            
            </>
}

export default App;
