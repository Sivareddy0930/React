import {useState} from "react"

let FilterData=()=>{
let data=[{ id:1, name:"siva"},{ id:2, name:"vamsi"}]
let [Userdata,updateData]= useState('');
let eventHandler=(event)=>{
    updateData(event.target.value)

}

    return <>
                <h1>Filter Data</h1>
                <pre>{JSON.stringify(Userdata)}</pre>
                    <input type="search" onChange={eventHandler}/>
                <table className="table table-bordered table-hover">
                    <thead>
                        <th>Id</th>
                    <th>Name</th>
                    </thead>
                    <tbody>
                        {data.filter((object)=>{
                                return Userdata.toLocaleLowerCase() ==='' ? object:object.name.toLocaleLowerCase().includes(Userdata)
                        }).map((object)=>{
                            return <tr>
                                <td>{object.id}</td>
                                <td>{object.name}</td>
                            </tr>
                        })}

                    </tbody>
                </table>

               

                
           </>
}

export default FilterData;