import {useState} from "react"

let Filter=()=>{

let [data,updateData]= useState([{ id:1, name:"siva"},{ id:2, name:"vamsi"}]);

let searchHandler=(event)=>{

        let requirement=event.target.value;
        console.log(requirement);
        // console.log(requirement==data[0].name);
        // console.log(data.length);

        filterLogic(requirement);
       

}

let filterLogic=(requirement)=>{
    for(let i=0;i<data.length;i++){
        if(requirement===data[i].name){
            console.log(data[i].id);
            let j=data[i].id
    }
    }

}

    return <>
                <h1>Filter Data</h1>
                <pre>{JSON.stringify(data)}</pre>
                    <input type="search" onChange={searchHandler}/>
                <table className="table table-bordered table-hover">
                    <thead>
                        <th>Id</th>
                    <th>Name</th>
                    </thead>
                    <tbody>
                        {data.map((object)=>{
                            return <tr>
                                <td>{object.id}</td>
                                <td>{object.name}</td>
                            </tr>
                        })}

                    </tbody>
                </table>

                <hr />
                <table className="table table-bordered table-hover">
                    <thead>
                        <th>Id</th>
                    <th>Name</th>
                    </thead>
                    <tbody>
                        {

                        // for(let j=0;j<data.length;j++){
                        //         if(requirement==data[j].name){
                        //              console.log(data[i].id);
                        //                 let j=data[i].id
                        //                         }
                        //             }
                            // if(sname=){

                            // }
                       }

                    </tbody>
                </table>

                
           </>
}

export default Filter;