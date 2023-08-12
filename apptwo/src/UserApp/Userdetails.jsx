


let Userdetails=(props)=>{

    let {details}=props
    return <>
                <h1>Userdetails</h1>
                <pre>{JSON.stringify(props)}</pre>

                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <img src={details.image} alt="ok" />
                        </div>
                        <div className="card-body">
                            <ul>
                                <li >{details.id}</li>
                                <li>{details.firstName}</li>
                                <li>{details.gender}</li>
                                {/* <li>{details.}</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
           </>
}
export default Userdetails;