

import React from 'react';
import Emp3 from './Emp3'

class Emp2 extends React.Component{

    render(props){
        return <>
                    <hr />
                    <h1>Emp2</h1>

                    <pre>{JSON.stringify(this.props)}</pre>
                    <h2>EMP_Name2:{this.props.name2}</h2>
                    <Emp3 name3={this.props.name2}/>
                </>
    }
}
export default Emp2;