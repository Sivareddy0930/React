let Comp1=(props)=>{
    return <>
    <hr />
                  <h1> accessing Array of objects from another file by importing with help of props  </h1>


                  
                <pre>{JSON.stringify(props.array)}</pre>
               


                <div className="container">
                        
                        <img src={props.array[0].image} alt="" /> 
                        <h1>ImageName:-{props.array[0].Name}</h1>
                        <pre>Description:-{props.array[0].Description}</pre>
                        
                </div>


                <div className="container">
                        
                        <img src={props.array[1].image} alt="" /> 
                        <h1>ImageName:-{props.array[1].Name}</h1>
                        <pre>Description:-{props.array[1].Description}</pre>
                        
                </div>   <div className="container">
                        
                        <img src={props.array[2].image} alt="" /> 
                        <h1>ImageName:-{props.array[2].Name}</h1>
                        <pre>Description:-{props.array[2].Description}</pre>
                        
                </div>

           </>
}
export default Comp1;