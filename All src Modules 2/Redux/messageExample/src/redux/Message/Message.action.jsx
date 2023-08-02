//action is function that return a object.object consist a properties that is type and payload.
let GM="goodmorning"
let GN="goodnight"

let gmAction=()=>{
    return {type:GM}
}

let gnAction=()=>{
    return {type:GN}
}

export {gmAction,gnAction}