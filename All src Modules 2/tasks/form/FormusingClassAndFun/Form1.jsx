//using function

import {useState} from "react"
let Form1=()=>{

                let [obj,setobj]=useState({
                name:"",
                email:"",
                password:"",
                mobile:""
            });

                let getData=(data)=>{

                    if(data.target.name=="name"){
                        setobj({...obj,name:data.target.value})
                    }
                    else if(data.target.name=="email"){
                        setobj({...obj,email:data.target.value})

                    }
                    else if(data.target.name=="password"){
                        setobj({...obj,password:data.target.value})

                    }
                    else{
                        setobj({...obj,mobile:data.target.value})

    
                    }
                }
                return <>  <h1>FORM USING Function COMPONENT</h1>

                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            {JSON.stringify(obj)}
                        </div>
                        <div className="card-body">
            
                                <form action="" className="form">
                                    <input type="text" placeholder="Name" name="name" className="form-control" onChange={getData}/>
                                    <input type="email" placeholder="Email" name="email" className="form-control" onChange={getData} />
                                    <input type="password" placeholder="PassWord" name="password" className="form-control" onChange={getData} />
                                    <input type="text" placeholder="Mobile" name="mobile" className="form-control" onChange={getData}/>
                                    <br />
            
                                   <input type="submit" />
                                </form>
            
                        </div>
                    </div>
                </div>
            </>
                }

   
export default Form1