
let incr="INCR"
let desc="DESC"

let incrAction=()=>{
    return {type:incr}
}
let descAction=()=>{
    return {type:desc}
}
export {incrAction,descAction}