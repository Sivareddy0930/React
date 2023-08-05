
import {useEffect,useState} from "react"
let Fun =()=>{

      let [data,setData] =useState(0);

        let updateData=()=>{
            setData(data+1)
          
        }
        useEffect(()=>{
            console.log("data changed");
        },[data]);

        // update is done by pass data in array of use effect
        // it will execute only id data modified.

    return <>
            <h1>functionality of componentWillUpdate by using use effect </h1>

                <pre>{data}</pre>
                <button onClick={updateData}>increment</button>

           </>
}
export default Fun;