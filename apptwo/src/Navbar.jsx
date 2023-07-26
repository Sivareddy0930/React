import {Link} from 'react-router-dom'
const Navbar=()=>{
        return <>
                    <nav className="navbar navbar-dark bg-success navbar-expand-lg ">
                        <Link to="#" className="navbar-brand">LOGO</Link>

                        <div className="ml-auto">
                            <ul className="navbar-nav ">
                                <li><Link className="nav-link" to="./Home">HOME</Link></li>
                                <li><Link className="nav-link"  to="./Product">Product</Link></li>
                                <li><Link className="nav-link" to="./Services">Services</Link></li>
                                <li><Link className="nav-link" to="./Contactus">Contactus</Link></li>
                            </ul>
                        </div>
                    </nav>
               </>
}

export default Navbar;