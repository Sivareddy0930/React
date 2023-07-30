import React, { useState } from 'react';

let Formwithusestate=()=>{

                            const [username,changeUserName]=useState("");
                            const [email,changeEmail]=useState("");
                            const [password,changePassword]=useState("");
                           
                            // console.log(username);
                            // console.log(email);
                            // console.log(password);

                            let  setName=(response)=>{

                                changeUserName(response.target.value)
                            }
                            let  setEmail=(response)=>{

                                changeEmail(response.target.value)
                            }
                            let  setPassword=(response)=>{

                                changePassword(response.target.value)
                            }

                            let stopSubmit=(submitResponse)=>{
                                submitResponse.preventDefault();
                                //it stops the normal form behaviour.
                            }



    return <>
                <h1>Task5</h1>
                                    {/* <p>{username}</p>
                                    <p>{email}</p>
                                    <p>{password}</p> */}

                <form onSubmit={stopSubmit}>
                    <input type="text" placeholder='UserName' name='username' onChange={setName} /><br />
                    <input type="email" placeholder='Email' name='email' onChange={setEmail}/><br />
                    <input type="password" placeholder='PassWord' name='password' onChange={setPassword}/><br />
                    <input type="submit" />
                </form>
                

           </>
}

export default Formwithusestate;