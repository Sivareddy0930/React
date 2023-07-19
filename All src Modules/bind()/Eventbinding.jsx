//event binding is the way to use one EventHandler(function) to all same kind of Events.these achive by using Bind() method.

// The bind() is an inbuilt method in React that is used to pass the data as an argument to the function of a class based component.

// Syntax:
// this.function.bind(this,[arg1...]);

// Parameter: It accepts two parameters, the first parameter is the this keyword used for binding and the second parameter is the sequence of arguments that are passed as a parameter and are optional.

import React,{Component} from 'react'

class Eventbinding extends Component {
    state={wish:"Hello"}
    wishHandler=(Value)=>{
        this.setState({wish:Value})
    }
    render(){
        return <>
        <h1>Event Binding</h1>

        <h1>Message:-{this.state.wish}</h1>

        <button className='btn btn-success' onClick={this.wishHandler.bind(this,"GoodMorning")}>Change to GM</button>
        <button className='btn btn-success' onClick={this.wishHandler.bind(this,"Good AfterNoon")}>Change to GA</button>
        <button className='btn btn-success' onClick={this.wishHandler.bind(this,"Good Evening")}>Change to GE</button>
        <button className='btn btn-success' onClick={this.wishHandler.bind(this,"Good Night")}>Change to GN</button>
        </>
    }
}
export default Eventbinding;