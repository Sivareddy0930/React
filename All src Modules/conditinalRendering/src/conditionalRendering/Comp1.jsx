// conditional rendring  refers to render a component based on condition (true/false).
import Comp2 from "./Comp2";
import {useState} from 'react'
let Comp1=()=>{
   
    let [show,showData]=useState(false);

    return<>

            <h1>Conditional rendering comp1</h1>

            <button onClick={()=>showData(!show)} >view</button>
                {
                    show && <Comp2/>       
                }
            <hr />

            
            {
                show?<Comp2/>: <p>"this is false data"</p>
            }
       


         </>
}
export default Comp1;