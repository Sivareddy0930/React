import React from 'react';
class State extends React.Component{
    state={msg:"Good Morning!"}
    Change=()=>{
       this.setState({msg:'good Night'});
    }
    render(){
        return <>
            <h1>Message:{this.state.msg}</h1>
            <button onClick={this.Change}>Click</button>
        </>
    }
}
export default State