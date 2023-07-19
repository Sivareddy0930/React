import React,{Component} from 'react'
import Emp2 from './Emp2'
class Emp1 extends Component {
    state={wish:"Hello",
            qty:1}
    wishHandler=(Value)=>{
        this.setState({qty:Value})
    }
    render(){
        return <>
        <h1>Event Binding</h1>

        <pre>{JSON.stringify(this.state)}</pre>
        <h1>Message:-{this.state.qty}</h1>


        <button className='btn btn-success' onClick={this.wishHandler.bind(this,this.state.qty+1)}>Plus</button>
        <button className='btn btn-success' onClick={this.wishHandler.bind(this,this.state.qty-1)}>Minus</button>
        <Emp2 wish={this.state.wish} qty={this.state.qty}/>
        </>
    }
}
export default Emp1;