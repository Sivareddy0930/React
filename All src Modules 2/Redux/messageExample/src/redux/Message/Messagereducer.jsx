
let initialstate={
    msg:"hello"
}
let Messagereducer=(state=initialstate,action)=>{

        switch(action.type){

            case "goodmorning":
                return {msg:"Hello Good Morning !!"}
            case "goodnight":
                return {msg:"bye Good Night !!"}
            default :
                return state

        }
}
export {Messagereducer}