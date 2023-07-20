import React from 'react';
class Salary2 extends React.Component{
    state={ sal:50000}
    updateHandler(value){
        this.setState({sal:50000+value})
    }
    render(){
        return <>
                    <h1>State Example 3 type 2  </h1>
                    <h2>Emp salary:-{this.state.sal}</h2>
                    
                    <button onClick={this.updateHandler.bind(this,50000)}>increment emp1</button>
                    <button onClick={this.updateHandler.bind(this,10000)}>incrementemp2</button>
                    <button onClick={this.updateHandler.bind(this,1000)}>increment emp3</button>



               </>
    }
}
export default Salary2