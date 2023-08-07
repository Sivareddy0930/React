//using class

import React, { useState } from "react";
class Form extends React.Component{

            state={
                name:"",
                email:"",
                password:"",
                mobile:""
            }

            getData=(data)=>{
                if(data.target.name=="name"){
                    this.setState({name:data.target.value})
                }
                else if(data.target.name=="email"){
                    this.setState({email:data.target.value})
                }
                else if(data.target.name=="password"){
                    this.setState({password:data.target.value})
                }
                else{
                    this.setState({mobile:data.target.value})

                }
            }

        render(){
            return <>
                        <h1>FORM USING CLASS COMPONENT</h1>

                        <div className="container">
                            <div className="card">
                                <div className="card-header">
                                    {JSON.stringify(this.state)}
                                </div>
                                <div className="card-body">

                                        <form action="" className="form">
                                            <input type="text" placeholder="Name" name="name" className="form-control" onChange={this.getData}/>
                                            <input type="email" placeholder="Email" name="email" className="form-control" onChange={this.getData} />
                                            <input type="password" placeholder="PassWord" name="password" className="form-control" onChange={this.getData} />
                                            <input type="text" placeholder="Mobile" name="mobile" className="form-control" onChange={this.getData}/>
                                            <br />

                                           <input type="submit" />
                                        </form>

                                </div>
                            </div>
                        </div>
                   </>
        }

}

export default Form