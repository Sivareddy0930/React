// Props Drilling means accessing data from one component  to another component.
//EX:- if data is avaliable in Emp1 want to access Emp3.
//it cannot access directly from 1 to 3.it only access like 1 to 2 to 3.
// to access directly we use REDUX.



import React from 'react';
import Emp2 from './Emp2';

class Emp1 extends React.Component{
    emp="Siva Reddy"

    render(){
        return <>
                    <h1>Simple demo About Props Drilling</h1>
                    <h1>Emp1</h1>
                    <h2>EMP_Name1:{this.emp}</h2>
                    <Emp2 name2={this.emp}/>

                </>
    }
}
export default Emp1;