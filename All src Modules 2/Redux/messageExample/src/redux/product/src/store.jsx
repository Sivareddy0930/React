import {createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {Productreducer} from "./Productreducer"

let store=createStore(Productreducer,composeWithDevTools())

export {store}
