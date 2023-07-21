import axios from 'axios'
const Axios2=()=>{

    let getData=()=>{
        var userData=axios.get('https://jsonplaceholder.typicode.com/users')
        .then((userData)=>{
            console.log(userData.data);
        })
        .catch((error)=>{
            console.log("data not fetched yet");
        })  
        
    }
    
    return <>
            <h4>we can fetch Json Data from API in two ways </h4>
            <h4>fetch and Axios</h4>
            <h1>Axios</h1>
            <button onClick={getData}>Button</button>
            <pre>{JSON.stringify(getData)}</pre>
                </>
}
export default Axios2