import React, { useState } from 'react';
//with one EventHandler
let Formwithusestate2=()=>{

                            const [username,changeUserName]=useState("");
                            const [email,changeEmail]=useState("");
                            const [password,changePassword]=useState("");
                           
                            // console.log(username);
                            // console.log(email);
                            // console.log(password);

                            let updateData=(response)=>{
                                    if(response.target.name==="username"){
                                                changeUserName(response.target.value)
                                    }
                                    else if(response.target.name==="email"){
                                        changeEmail(response.target.value)
                                    }
                                    else{
                                        changePassword(response.target.value)
                                    }
                            }

                            let stopSubmit=(submitResponse)=>{
                                submitResponse.preventDefault();
                                //it stops the normal form behaviour.

                            }



    return <>
                <h1>Task6</h1>
                                    {/* <p>{username}</p>
                                    <p>{email}</p>
                                    <p>{password}</p> */}

                <form onSubmit={stopSubmit}>
                    <input type="text" placeholder='UserName' name='username' onChange={updateData} /><br />
                    <input type="email" placeholder='Email' name='email' onChange={updateData}/><br />
                    <input type="password" placeholder='PassWord' name='password' onChange={updateData}/><br />
                    <input type="submit" />
                </form>
                

           </>
}

export default Formwithusestate2;