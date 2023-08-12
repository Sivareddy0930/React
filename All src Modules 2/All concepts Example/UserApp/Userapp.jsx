import Userlist from "./Userlist";
import Userdetails from "./Userdetails";
import {useState,useEffect} from "react";
import Axios from "axios"



let Userapp=()=>{

        let [userData,setUserData]=useState({});
        useEffect(()=>{
                Axios.get('https://dummyjson.com/users')
                .then((response)=>{
                console.log(response.data);
                setUserData(response.data);

                })
                .catch(()=>{
                    console.log("error");
                })
        },[])


        let [ResponseOFSelectedData,setResponseOFSelectedData]=useState({});

        let responseData=(getSelectedresponse)=>{
            //we get data from Userlist componet of selectedData method .
            console.log("response success");
            console.log(getSelectedresponse);



            setResponseOFSelectedData(getSelectedresponse)
        }
    



    return <>
                <h1>UserApp</h1>
                <pre>{JSON.stringify(userData)}</pre>
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                           {
                            Object.keys(userData).length>0 ? <> <Userlist userdata={userData.users} responsemethod={responseData}/></>: <h4>NO data</h4>
                           }
                        </div>
                        <div className="col-4">
                        {
                            Object.keys(ResponseOFSelectedData).length>0 ? <><Userdetails details={ResponseOFSelectedData}/></>: <h4>NO data</h4>
                           }
                            
                        </div>
                    </div>
                </div>
                
           </>
}
export default Userapp;