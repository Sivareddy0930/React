
import Message from "./react/Message.jsx"
import store from './redux/store.jsx'
import {Provider}from "react-redux"
function App() {
  return  <>
            <Provider store={store}>
             <div>
             <Message/>
             </div> 
             </Provider>
          </>
}

export default App;
