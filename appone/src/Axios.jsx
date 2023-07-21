import users from "./Data"
const Axios=()=>{
   
    return <>
            <h4>we can fetch Json Data from API in two ways </h4>
            <h4>fetch and Axios</h4>
            <h1>Axios</h1>
            <pre>{JSON.stringify(users)}</pre>
            <table border='1'>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>City</th>
                </thead>
                <tbody>
                    {
                       users.map((value)=>{
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
export default Axios