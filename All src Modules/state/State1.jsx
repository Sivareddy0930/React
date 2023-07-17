//here we are trying to change value onclick


import React from "react";

class State1 extends React.Component{
            msg='Hello Good Morning!'
        changevalue=()=>{
                this.msg='GoodNight'
                this.forceUpdate();
        }
        //if we used normal method here it will give undefine error because of this keyword .object context with this keyword and normal function is bigger.
        //in case fat arrow empty object context.

    render(){
        return <>
            <h1>Message:{this.msg}</h1>
            <button onClick={this.changevalue}>Click</button>
        </>
    }
}
export default State1

//we use forceupdate() to recall render method after update value.
//to do this process simply we use state object and stateset() method.