import React from 'react';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    readData=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        // here, [event.target.name] represent email when we click on input of email box.and then change to password when we click on password box in browser.
    }
    render(){
        return <>
        <h1>Form with only one Handle Method</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="row">
            <div className="col-4">
            

            <form className="form-group">
            <lable>Email</lable>
            <input type="email"  className="form-control" onChange={this.readData} name='email' /><br />
            {/* here we are using same eventHandler in two inputs.
            by default form lo email lo data ne enter chesa thapudu update iethundi .And password lo data enter chesa thapudu kuda email lo na updata iethundi.
            ee conflict ne resolve chaitaneke name attribute use chastunam . name attribute value same vundali compare to state properties ke.  
            so, each input tag ke different name.  */}
            <lable>Password</lable>
            <input type="password" className="form-control" onChange={this.readData} name='password'/><br />
            <input type="submit" className="bg-info"/>
            </form>

            </div>
        </div>
  </>
    }
}

export default Login;