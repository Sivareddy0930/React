import {useDispatch,useSelector} from 'react-redux'
import {gmAction,gnAction} from "../redux/Message/Message.action"

// by using useDispatch we are dispacthing an action.


let Message=()=>{


let dispatch=useDispatch();


  let GmHandler=()=>{
        dispatch(gmAction()) 
    }
    let GnHandler=()=>{
        dispatch(gnAction()) 
 
    }


    let data=useSelector((storedata)=>{
        return storedata;
    })

    return <>
                <h1>Message Component</h1>
                <pre>{JSON.stringify(data)}</pre>

                <h1>Wish:{data.msg}</h1>

                <button onClick={GmHandler}>GoodMorning</button>
                   
                <button onClick={GnHandler}>GoodNight</button>
           </>
}
export default Message;