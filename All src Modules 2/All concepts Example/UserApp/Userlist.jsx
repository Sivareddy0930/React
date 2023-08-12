


let Userlist=(props)=>{


        let selectedData=(responseObject)=>{

               // console.log(responseObject);
                props.responsemethod(responseObject);


        }



    return <>
                
                <h1>Userlist</h1>
                <pre>{JSON.stringify(props.userdata)}</pre>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>GENDER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          props.userdata.map((object)=>{
                            return <tr key={object.id} onClick={selectedData.bind(this,object)}>
                                <td>{object.id}</td>
                                <td>{object.firstName}</td>
                                <td>{object.gender}</td>
                            </tr>
                          })
                        }
                    </tbody>
                </table>


           </>
}
export default Userlist;