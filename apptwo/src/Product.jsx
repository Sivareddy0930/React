import {useDispatch,useSelector} from "react-redux"
import {incrAction,decrAction} from "./action"


let Product=()=>{
let despatch=useDispatch();
    let incrHandler=()=>{
        despatch(incrAction())
    }
    let descHandler=()=>{
        despatch(decrAction())
        
    }

    let data=useSelector((store)=>{
        return store;
    })

    return <>
                <h1>APP</h1>
                <pre>{JSON.stringify(data)}</pre>
                <h1>{data.value}</h1>
                <button onClick={incrHandler}>Increment</button>
                <button onClick={descHandler}>Decrement</button>

           </>
}
export default Product;