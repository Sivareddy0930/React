


const Comp2=(props)=>{
    return <>
                    <h1> accessing variables and objects from another file by importing with help of props  </h1>
                
                <div className="container">
                        <hr />
                        <img src={props.image} alt="" /> 
                        <h1>ImageName:-{props.imgName}</h1>
                        <pre>Description:-{props.Description}</pre>
                        
                </div>


                <div className="container">
                        <hr />
                        <img src={props.object.image} alt="" /> 
                        <h1>ImageName:-{props.object.Name}</h1>
                        <pre>Description:-{props.object.Description}</pre>
                        
                </div>
           </>
}
export default Comp2;