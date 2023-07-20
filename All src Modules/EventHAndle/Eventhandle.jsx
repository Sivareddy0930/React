import React  from 'react';  
class Eventhandle extends React.Component {  
    // constructor(props) {  
    //     super(props);  
    //     this.state = {  
    //         companyName: ''  
    //     };  
    // }  
    // changeText(event) {  
    //     this.setState({  
    //         companyName: event.target.value  
    //     });  
    // }  
    // render() {  
    //     return (  
    //         <div>  
    //             <h2>Simple Event Example</h2>  
    //             <label htmlFor="name">Enter company name: </label>  
    //             <input type="text" id="companyName" onChange={this.changeText.bind(this)}/>  
    //             <h4>You entered: { this.state.companyName }</h4>  
    //         </div>  
    //     );  
    // }  
constructor(props){
    super(props);
    this.state={
        name:''
    }
}

changeName(obj){
   
    this.setState({name:obj.target.value})
    //obj consist of result from input tag that is used by using target.value
}

render(){
    return <>
                 <h1>EventHandling</h1>
            <label htmlFor="hi">Name</label>
            <input type="text" onChange={this.changeName.bind(this)} />
            <h1>You Entered:{this.state.name}</h1>

            </>
}

}  
export default Eventhandle;  
