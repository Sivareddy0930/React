
let mystate={
    value:1
}
let Reducerfun=(state=mystate,action)=>{

    switch(action.type){

        case "increment":
            return {value:state.value+1}
        case "decrement":
            return {value:state.value-1}
        default:
            return state

    }

}
export {Reducerfun}