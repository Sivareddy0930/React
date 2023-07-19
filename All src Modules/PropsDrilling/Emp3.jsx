
import React from 'react';

class Emp3 extends React.Component{

    render(props){
        return <>
        <hr />
        <h1>Emp3</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <h2>EMP_Name:{this.props.name3}</h2>

        </>
    }
}
export default Emp3;