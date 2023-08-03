
let defaultvalue={
    value:1
}

let Productreducer=(state=defaultvalue,action)=>{

    switch(action.type){
        case "INCR":
            return {value:state.value+1}
        case "DESC":
            return {value:state.value-1}
        default:
            return defaultvalue
    }

}
export {Productreducer}