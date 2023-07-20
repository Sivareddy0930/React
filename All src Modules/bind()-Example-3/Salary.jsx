import React from 'react';
class Salary extends React.Component{
    state={ sal:50000}
    updateHandler(value){
        this.setState({sal:value})
    }
    render(){
        return <>
                    <h1>State Example 3</h1>
                    <h2>Emp salary:-{this.state.sal}</h2>
                    <button onClick={this.updateHandler.bind(this,this.state.sal+50000)}>increment emp1</button>
                    <button onClick={this.updateHandler.bind(this,this.state.sal+10000)}>incrementemp2</button>
                    <button onClick={this.updateHandler.bind(this,this.state.sal+1000)}>increment emp3</button>


               </>
    }
}
export default Salary