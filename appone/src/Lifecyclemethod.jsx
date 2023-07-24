import React from "react";
import axios from "axios";
class Lifecyclemethod extends React.Component{
    state={
        user:[]
    }
    // Life cycle method componentDidMount 
    //it call automaticall after render method .

    componentDidMount=()=>{
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
        <hr />
                        <h1>using Life cycle method componentDidMount</h1>
                    <pre>{JSON.stringify(this.state)}</pre>
                   
                    
                    <table border={'1'}>
                        <thead>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </thead>
                        <tbody>
                                {
                                    this.state.user.map((value)=>{
                                        return <tr>
                                            <td>{value.id}</td>
                                            <td>{value.firstName}</td>
                                            <td>{value.lastName}</td>
                                        </tr>
                                    })
                                }
                        </tbody>
                    </table>
                </>
    }
}
export default Lifecyclemethod;