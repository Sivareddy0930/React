import React from 'react';
import Data from './Data'
import axios from 'axios';
class Axiosusingclass extends React.Component{
     state = {
        users:[]
     };
    viewData=()=>{
        var userData=axios.get('https://jsonplaceholder.typicode.com/users')
        .then((userData)=>{
            console.log(userData.data);
            this.setState({users:userData.data})
        })
        .catch((error)=>{
            console.log("data not fetched yet");
        })

        
    }
    render(){
        return <>
        <hr />
               <h1>class</h1>
               <pre>{JSON.stringify(this.state.users)}</pre>

               <button onClick={this.viewData}>viewData</button>
               <table border='1'>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>City</th>
                </thead>
                <tbody>
                    {
                       this.state.users.map((value)=>{
                          return  <tr>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.address.city}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
               </>
    }
}
export default Axiosusingclass;