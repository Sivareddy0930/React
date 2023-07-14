import React from 'react'
class Cls_2 extends React.Component{

    render(props){
        return <div>
            <h1>Properties reaciveing here</h1>
            {/* <p>{this.props}</p>objects are not valid as a react child  */}
        

            <p>{JSON.stringify(this.props)}</p>
            <pre>id:-{this.props.id[0]}</pre>
            <p>Name:-{this.props.Name}</p>
            <h1>Pincode:-{this.props.loc.pincode}</h1>

            <p>Avaliable:-{this.props.avl}</p>
            
            <p>{this.props.Method()}</p>

        </div>
    }
}
export default Cls_2;

//in class level property and methods can access by using this keyword.