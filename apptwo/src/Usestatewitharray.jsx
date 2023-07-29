import React, { useState } from "react";

let arr=[
    {id:101,name:"Siva",age:21},
    {id:102,name:"vamsi",age:16}
]

const Usestatewitharray =()=>{

    const [data,updateData]=useState(arr);
       
        // let changeName=()=>{
        //     updateobj({...obj,name:"Tumu Venkata Siva Reddy"});
        // }
    return <>
                 <hr />
                 <h1>Task-3</h1>

                <h1>Usestatewithobject</h1>
                <pre>{JSON.stringify(data)}</pre>

                {
                    data.map((obj)=>{

                        const {id,name,age}=obj
                            // how to access data from array by destructuring object.
                        return <>
                                <h4>ID:-{id}</h4>
                                <h4>Name:-{name}</h4> 
                                <h4>Age:-{age}</h4> 
                              </>
                    })
                }

               
                



            </>

}
export default Usestatewitharray;