import React from 'react';
class Productstate1 extends React.Component{
        state={
                product1:{
                  name:"Iphone",
                price:50000,
                qty:1
                },

                customerName:"siva"
              }
              //here we have two properties in a object state.And again product1 object has 3 properties

              //  incr=()=>{

              //   this.setState({product1:{qty:this.state.product1.qty+1}})
              //   //if we want to update qty  like this it will update whole product1 object and that contain only qty.restof the values get removed
              // }
              incr=()=>{
                  this.setState({product1:{...this.state.product1,  qty:this.state.product1.qty +1}})}
              desc=()=>{

                this.setState({product1:{...this.state.product1,qty:this.state.product1.qty -1}})
              }

    render(){
        return <>
          <hr />

                    <nav className='navbar navbar-dark bg-dark'>
                        <a href="#" className='navbar-barand'>navbar component</a>
                    </nav>
                    <div>
                    <p>{JSON.stringify(this.state)}</p>

                      <table className='table'>
                        <thead>
                          <th>ProductName</th>
                          <th>P_price</th>
                          <th>Qty</th>
                          <th>CustomerName</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{this.state.product1.name}</td>
                            <td>{this.state.product1.price * this.state.product1.qty}</td>
                            <td><button className='btn btn-success' onClick={this.desc}>-</button>{this.state.product1.qty}<button className='btn btn-success' onClick={this.incr}>+</button></td>
                            <td>{this.state.customerName}</td>
                          </tr>
                        </tbody>
                      </table>
                    

                             <hr />
                             
                    </div>

            </>
    }
              
}
export default Productstate1;
//Aim is to change the quantity of product by incr and desc.
//And change cost of the product accordingly