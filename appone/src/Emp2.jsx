 import React from 'react';
 class Emp2 extends React.Component{
     
    
    render(props){
        const{w}=this.props.wish
        return <div>
             <h1>Hi</h1>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
            <h1>Name:{this.w}</h1>
        </div>
    }
 }
 export default Emp2;