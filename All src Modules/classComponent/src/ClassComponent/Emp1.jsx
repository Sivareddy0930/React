import React from 'react'
class Emp1 extends React.Component{

    salary=60000;
    // Generaly class properties can access by using this keyword
    render(){
        return <div>
            <hr />
            <h2>Emp1 class component</h2>
        
        <p>Emp Salary:-{this.salary}</p>
 

        </div>
    }
}
export default Emp1
//reactExpression can be used to read javascript variables in HtML by using { }