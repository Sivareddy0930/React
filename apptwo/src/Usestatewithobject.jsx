import React, { useState } from "react";

const Usestatewithobject =()=>{

    // console.log(useState({id:101,name:"Siva"}));
    const [obj,updateobj]=useState({id:101,name:"Siva",age:21});
        // let changeName=()=>{
        //     updateobj({name:"Tumu Venkata Siva Reddy"});
        //     // here we are changing name but we are lossing other data.to avoid that we use spread operator to copy data.
        // }


        let changeName=()=>{
            updateobj({...obj,name:"Tumu Venkata Siva Reddy"});
        }
    return <>
                 <hr />
                 <h1>Task-2</h1>

                <h1>Usestatewithobject</h1>
                <pre>{JSON.stringify(obj)}</pre>
                <h4>ID:-{obj.id}</h4>
                <h4>Name:-{obj.name}</h4>
                <h4>age:-{obj.age}</h4>

                <button onClick={changeName}>UpdateName</button>
                



            </>

}
export default Usestatewithobject;