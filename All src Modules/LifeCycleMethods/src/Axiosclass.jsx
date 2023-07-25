import React from "react";
import axios from "axios";
class Axiosclass extends React.Component{
    state={
        user:[]
    }

    viewData=()=>{
        var userData=axios.get('https://dummyjson.com/users')
        .then((userData)=>{
            console.log(userData.data);
            this.setState({user:userData.data.users})
        })
        .catch((error)=>{
            console.log("data not fetched yet");
        })

        
    }
    render(){
        return <>
                    <p>Axios Example using class</p>
                    <pre>{JSON.stringify(this.state)}</pre>
                    <button onClick={this.viewData}>getData</button>
                    {/* using button click we get data */}


                    <table border={'1'}>
                        <thead>
                            <th>ID</th>
                            <th>First Name</th>
                        </thead>
                        <tbody>
                                {
                                    this.state.user.map((value)=>{
                                        return <tr>
                                            <td>{value.id}</td>
                                            <td>{value.firstName}</td>
                                        </tr>
                                    })
                                }
                        </tbody>
                    </table>
                </>
    }
}
export default Axiosclass;