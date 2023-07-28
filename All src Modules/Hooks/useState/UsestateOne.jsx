import React from "react"
let UsestateOne=()=>{
    let [msg,changeMsg]=React.useState("hello");


    return <>
    <hr />
            <h4>useStateOne</h4>
            <pre>{msg}</pre>
            
            <h1>Message:{msg}</h1>
            <button onClick={()=>{changeMsg("Good Morning")
        }}>Click</button>
           </>
}
export default UsestateOne;