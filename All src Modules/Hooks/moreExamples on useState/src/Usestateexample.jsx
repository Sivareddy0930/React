// when you click on button .data have to visiable and on another click it will be  hide.

import React, { useState } from 'react';

const Usestateexample=()=>{

        // const [msg,changemsg]=useState(false);

        //     let changeCondition=()=>{
        //         changemsg(!msg);
        //     }

        // return <>
        //             <hr />
        //             <h1>Task-4</h1>
        //             <button onClick={changeCondition}>Show</button>
        //             {
        //                msg && <h4>when you click on button .data have to visiable and on another click it will be  hide</h4> 
        //             }

                     
        //        </>




        
        const [msg,changemsg]=useState(false);

            let changeCondition=()=>{
                changemsg(!msg);
            }

        return <>
                    <hr />
                    <h1>Task-4</h1>
                    <button onClick={changeCondition}> {msg? "hide Data" : "show Data"}</button>
                    {
                       msg && <h4>when you click on button .data have to visiable and on another click it will be  hide</h4> 
                    }

                     
               </>

}
export default Usestateexample;