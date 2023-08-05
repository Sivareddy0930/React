
import {useEffect,useState} from "react"

let Fun3=()=>{


    let [data,setData]=useState(false);


       let [value,setvalue]=useState(0);


   let incrHandler=()=>{
            setvalue(value+1)
    }
     
        

    useEffect(()=>{
        let timer=setInterval(() => {
          
            setData(true)
        },2000)
        console.log("useEffect Executed");

        return () => {
            console.log("clearing done");
            clearTimeout(timer);
          };
    },[value])

    return <>
            <h1>functionality of componentWillUnmount by using use effect </h1>

                <button onClick={incrHandler}> IncreMent</button>
                <pre>{value}</pre>
                

           </>
}
export default Fun3;