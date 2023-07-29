import React, { useState } from "react";

const Usestate=()=>{
        //useState in react is a function that which used to create a variable to store data. 
        //data is mutable .
        //data can be object, number ,string ,method....
        //it has function which is used to update default data.
        //when data get update ,the page will get re-rendered automatcally.
        const [data,updateData]=useState(10);
        let incr=()=>{
            updateData(data+1)
            
            console.log(data);// we get clg 10 .even After clicking on plus.because here  updateData(data+1) and console.log(data) excuteing asyncronously.
            //here Updating data is execute asyncronously.
        }
        let desc=()=>{
            updateData(data-1)
        }

       console.log();

    return <>
                    <h1>Task-1</h1>

                <p>useState</p>
                <button onClick={desc}>-</button>

                <pre>{data}</pre>

                <button onClick={incr}>+</button>
            </>
}
export default Usestate;