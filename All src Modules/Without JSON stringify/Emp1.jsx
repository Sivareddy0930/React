import React from 'react';
class Emp1 extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"siva"}

    }

    method=()=>{
        this.setState({name:"Reddy"})
        
    }

    render(){
        return <>
            <h1>state object in constructor</h1>
            <button onClick={this.method}>change name</button>
            <h1>Name:{this.state.name}</h1>
        </>
    }
}
export default Emp1;