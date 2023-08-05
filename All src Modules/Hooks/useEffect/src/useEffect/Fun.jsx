import {useEffect,useState} from "react"
let Fun =()=>{

      let [data,setData] =useState(0);

        let updateData=()=>{
            setData(data+1)
          
        }
        useEffect(()=>{
            console.log("data changed");
        });

    return <>
                <h1>useEffect</h1>
                <pre>{data}</pre>
                <button onClick={updateData}>increment</button>

           </>
}
export default Fun;