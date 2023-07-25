


// let Comp3=(props)=>{
//     return <>
//                 <hr />
//                 <img src={props.img} alt="" />
//                 <h1>{props.name}</h1>
//                 <p>{props.Description}</p>   
//            </>
// }

//using object Destructuring.

let Comp3=(props)=>{
    const {img,name,Description}=props
    return <>
                <hr />
                <h1>this is Comp3</h1>
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>{Description}</p>   
           </>
}
export default Comp3;