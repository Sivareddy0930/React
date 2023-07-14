import React from 'react';
import Fun_2 from './Fun_2'
class Cls_1 extends React.Component{
    
    ids=[101,102,103,104]
    name="Reddy"
    location={address:"ReddySagar",pincode:523264}

    aval='true'


    method=()=>{
        return  <div><hr /><h1>This is Method </h1></div>
    }

    render(){
        return <div>
            <p>Props using classes</p>
            {/* <Cls_2 id={this.ids} Name={this.name} loc={this.location} avl={this.aval}  Method={this.method}/> */}

            <Fun_2 id={this.ids} loc={this.location} met={this.method}/>
        </div>
    }
}
export default Cls_1