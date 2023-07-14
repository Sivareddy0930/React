//props are used to communicate with one component to another component and which is immutable but we can give alies name.
//it is used to send data from one to another component.
import Fun_2 from './Fun_2'
let Fun_1=()=>{
    let id=101
   let name="siva"
   let salary=50000
    return <div>
        <p>About props</p>

        <Fun_2 ID={id} FullName={name} Sal={salary}/>

        {/* every property we rae sending here as a object */}
    </div>
}
export default Fun_1