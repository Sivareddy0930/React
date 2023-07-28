import React from "react";
import {Link} from "react-router-dom";
class Navbar extends React.Component{
    render(){
        return <>
                    
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg"> 
                    <Link to="#" className="navbar-brand">Nav LOGO</Link>

                    <div className="ml-auto">
                        <ul className="navbar-nav">
                            <li><Link to="./Product" className="nav-link">Product</Link></li>
                            <li><Link to="./Service" className="nav-link">Services</Link></li>
                            <li><Link to="./Login" className="nav-link">Login</Link></li>
                        </ul>
                    </div>
                </nav>

                </>
    }
}

export default Navbar;