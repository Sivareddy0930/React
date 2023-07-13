//In react we cannot create a object to class.
//instead of that we do the following
//class components can build by importing the React  from react package.
//And we have to extend the React.Component class.so that we can override the render method that avaliable in React.component class.
//render method used to return UserInterface.And we dont need to call this method .by default it will call.



import React from 'react'

class Emp extends React.Component{
    render(){
        return <div><hr />
        <h1>Emp Class component</h1></div>
    }
}

export default Emp