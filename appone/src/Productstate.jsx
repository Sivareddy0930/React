import React, { Fragment } from 'react';
class Productstate extends React.Component{
        state={name:"Iphone",
                price:50000,
                qty:1
              }

               incr=()=>{

                this.setState({qty:this.state.qty +1})
              }
              desc=()=>{

                this.setState({qty:this.state.qty -1})
              }
    render(){
        return <Fragment>

                    <p>{JSON.stringify(this.state)}</p>
                    <nav className='navbar navbar-dark bg-dark'>
                        <a href="#" className='navbar-barand'>navbar component</a>
                    </nav>
                    <div>
                             <h1>ProductName:-{this.state.name}</h1>
                             <h1>P_price:-{this.state.price * this.state.qty}</h1>
                             <h1>Qty:-{this.state.qty}</h1>
                             <button className='btn btn-success' onClick={this.incr}>Incr</button>
                             <hr />
                             <button className='btn btn-success' onClick={this.desc}>desc</button>
                    </div>

            </Fragment>
    }

}
export default Productstate;
//Aim is to change the quantity of product by incr and desc.
//And change cost of the product accordingly