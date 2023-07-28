import React from "react"
let Usestate=()=>{
    let [msg,changeMsg]=React.useState("hello");

        let updateMsg=()=>{
            return changeMsg("Good Morning")
        }

    return <>
            <h4>useState from Hooks Concept</h4>
            <pre>{msg}</pre>
            
            <h1>Message:{msg}</h1>
            <button onClick={updateMsg}>Click</button>
           </>
}
export default Usestate;