 import React from 'react';
 class Emp2 extends React.Component{
     
    s={id:100,name:"siva"}
    render(props){
        const{id,name}=this.s
        return <div>
             <h1>Hi</h1>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
            <h1>Name:{id}</h1>
        </div>
    }
 }
 export default Emp2;