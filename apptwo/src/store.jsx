import {createStore} from "redux"
import {composeWithDevTools} from "@redux-devtools/extension"
import {Reducerfun} from "./Reducerfun"

let Store=createStore(Reducerfun,composeWithDevTools())

export {Store};