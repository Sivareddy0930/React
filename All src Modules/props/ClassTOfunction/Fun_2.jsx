//props are used to communicate with one component to another component and which is immutable but we can give alies name.
//it is used to send data from one to another component.

let Fun_2=(props)=>{
    
    return <div>
        <p>About props</p>
        <p>{JSON.stringify(props)}</p>
        {/* objects are not supported in react so we need to change to strings by using JSON>stringify */}


        <h1>id:-{props.id[0]}</h1>
        <h1>Adderss:-{props.loc.address}</h1>
        <h1>Method:-{props.met()}</h1>
    </div>
}
export default Fun_2
