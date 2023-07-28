import {Link} from 'react-router-dom';
let Navbar=()=>{
    return <>
                <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                    <Link to="#" className='navbar-brand'>GO TO GOA</Link>

                    <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li><Link to='./Product' className='nav-link'> Product</Link></li>
                        <li><Link to='./Service'className='nav-link'>Service</Link></li>
                        <li><Link to='./Login'className='nav-link'>Login</Link></li>

                    </ul>
                    </div>


                    
                </nav>
           </>
}
export default Navbar;