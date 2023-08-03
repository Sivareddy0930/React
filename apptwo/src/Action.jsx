
let INCR="increment"
let DECR="decrement"

let incrAction=()=>{
    return {type:INCR}
}
let decrAction=()=>{
    return {type:DECR}
}
export {incrAction,decrAction}