//props are used to communicate with one component to another component and which is immutable but we can give alies name.
//it is used to send data from one to another component.

let Fun_2=(props)=>{
    
    return <div>
        <p>About props</p>
        <p>{JSON.stringify(props)}</p>
        {/* objects are not supported in react so we need to change to strings by using JSON>stringify */}


        <h1>id:-{props.ID}</h1>
        <h1>Name:-{props.FullName}</h1>
        <h1>salary:-{props.Sal}</h1>
    </div>
}
export default Fun_2
