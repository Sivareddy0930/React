import React from 'react';
class Tablerendring extends React.Component{

            empData=[
                {id:101,name:"siva",salary:50000},
                {id:102,name:"subba",salary:40000},
                {id:103,name:"vamsi",salary:60000},
                {id:104,name:"jaggu",salary:1116}
            ]


       render(){
        
        return <>
        <pre>{JSON.stringify(this.empData)}</pre>
                <h1>Table Rendering</h1>
                <hr />
                <table border='1'>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </thead>
                    <tbody>
                        {this.empData.map((value)=>{
                           return <tr>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.salary}</td>
                            </tr>

                        })}
                    </tbody>
                </table>

               </>
       }
}
export default Tablerendring;
//table is displaying well gut in console level some warnings are there like 
//warning:-Each child in a list should have a unique "key" prop.