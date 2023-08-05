import {useEffect,useState} from "react"
import Axios from 'axios';
let Fun1 =()=>{

            // i want to feach data while page loading and store in a variable.

                let URL='https://jsonplaceholder.typicode.com/users';
                //data link from source

            let [data1,setData]=useState([]);



                let getData= async (apiUrl)=>{
                let axiosData=await Axios.get(apiUrl)

                console.log(axiosData.data);

                setData(axiosData.data)

                }

            useEffect(()=>{
                
                getData(URL)

            },[])


    

    return <>
    
                <h1>useEffect Example-1 </h1>
                <pre>{JSON.stringify(data1)}</pre>

                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {
                            data1.map((objects)=>{
                                    return <tr>
                                        <td>{objects.id}</td>
                                        <td>{objects.name}</td>
                                        <td>{objects.email}</td>
                                    </tr>
                                    
                            })
                        }
                    </tbody>
                </table>




             

           </>
}
export default Fun1;