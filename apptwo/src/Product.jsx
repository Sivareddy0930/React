import {useDispatch,useSelector} from "react-redux"
import {incrAction,descAction} from "./Action"





let Product=()=>{

    let dispatch=useDispatch();
    
    let incrHandler=()=>{
        dispatch(incrAction())
    }  
    let descHandler=()=>{
        dispatch(descAction())
    }
    let data=useSelector((responseData)=>{
            return responseData
    })

    return <>
                <h1>Product</h1>
                <pre>{JSON.stringify(data)}</pre>
                <h1>{data.value}</h1>
                <button onClick={incrHandler}>Incr Product</button>
                <button onClick={descHandler}>Desc Product</button>
            </>
}

export default Product;