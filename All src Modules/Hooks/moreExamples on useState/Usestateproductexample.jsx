import React,{useState} from "react";

let Usestateproductexample=()=>{

            let [data,setData]=useState({
                pname:"mi",
                img:"https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672738688.24231648!500x500.jpg",
                price:50000,
                qty:1,
                totalAmount:""
                

            });
            //... spread operator is required to copy all data and modify.
             let descHandler=()=>{
                    setData({...data,qty:data.qty-1})
             }
             let incrHandler=()=>{
                setData({...data,qty:data.qty+1})
         }
         
        
    return <>
                <h1>useState Product Example</h1>
                <pre>{JSON.stringify(data)}</pre>

                <table className="table">
                    <thead>
                        <th>Product Name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>qty</th>
                        <th>TotalAmount</th>
                    </thead>

                    <tbody>
                       <tr>
                        <td>{data.pname}</td>
                        <td><img src={data.img} alt="" width={200}/></td>
                        <td>{data.price}</td>
                        <td><button onClick={descHandler}>-</button>{data.qty}<button onClick={incrHandler}>+</button></td>
                        <td>{data.totalAmount=data.price*data.qty}</td>

                       </tr>
                    </tbody>

                </table>
           </>
}
export default Usestateproductexample;