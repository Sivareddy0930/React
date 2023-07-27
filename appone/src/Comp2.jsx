import React from 'react';


class Comp2 extends React.Component{
    state={
        password:""
    }
     Handler=(event)=>{
         this.setState({password:event.target.value})
     }
     showPassword=()=>{
        // console.log(this.state.password);
            return this.state.password;
     }
        
    render(){
        return <>
            <h1>New Component</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <label>Password</label>
            <input type="password" onChange={this.Handler}/><br />
            <pre>{JSON.stringify(this.showPassword())}</pre>
           <input type="checkbox" onClick={this.showPassword}/>
            </>
    }
}


export default Comp2;

