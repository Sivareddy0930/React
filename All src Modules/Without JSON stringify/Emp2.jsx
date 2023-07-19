 import React from 'react';
 class Emp2 extends React.Component{
     
    
    render(props){
        const w=this.props.wish
       //here we are converting object to variable .
        
       
        return <div>
             <h1>Hi</h1>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
            <h1>Name:{w}</h1>
        </div>
    }
 }
 export default Emp2;