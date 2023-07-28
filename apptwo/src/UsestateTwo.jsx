import React from "react"
let UsestateTwo=()=>{
    let [msg,changeMsg]=React.useState("hello");


    return <>
    <hr />
            <h4>UsestateTwo</h4>
            <pre>{msg}</pre>
            
            <h1>Message:{msg}</h1>
            <button onClick={()=>{changeMsg("Good Morning")}}>GM</button>
            <button onClick={()=>{changeMsg("Good Night")}}>GN</button>
           </>
}
export default UsestateTwo;