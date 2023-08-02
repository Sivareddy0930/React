import {createStore} from 'redux';
import {Messagereducer} from './Message/Messagereducer'
import {composeWithDevTools} from "@redux-devtools/extension"

let store=createStore(Messagereducer,composeWithDevTools())

export default store;


