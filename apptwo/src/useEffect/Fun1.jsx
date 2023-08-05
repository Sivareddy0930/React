import {useEffect,useState} from "react"
import Axios from 'axios';
let Fun1 =()=>{


        useEffect(()=>{
            var userData=Axios.get('https://jsonplaceholder.typicode.com/users')
            //we are getting data .
            //it execute after render the component.
            //it will execute in every render.
        .then((userData)=>{
            console.log(userData.data);
        })
        .catch((error)=>{
            console.log("data not fetched yet");
        })

            console.log("use effect called");
        });

    return <>
    <hr />
                <h1>functionality of componentdidmount by using use effect </h1>


             

           </>
}
export default Fun1;