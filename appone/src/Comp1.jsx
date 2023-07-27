let Handler=(e,name)=>{
    console.log(e,name);
}
const Comp1=()=>{
    return <>
            <h1>New Component</h1>
            <button onClick={function(e){ 
                return Handler(e,"Siva")
                }
            }>Click</button>
            </>
}
export default Comp1;

// passing arugments to handler while calling in a function comonent.