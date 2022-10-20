import './Navbar.css'
import { FiShoppingCart } from 'react-icons/fi';

import logo from '../../../images/logo2.png'

const Navbar = () => {
    return (
        <nav className='nav h-14 sm:h-12 w-full px-3 flex items-center m-auto justify-between'>
            <a href='www.google.com'>
                <img className='h-10' src={logo} />
            </a>
            <div className="nav_left flex items-center text-sm">
                <a href="www.google.com" className='p-2 transition duration-300 hover:bg-slate-100 rounded-full'>
                    <FiShoppingCart />
                </a>
                <a href="www.google.com">
                    <button className='btn hover:underline transition duration-300 p-1 mx-3'>Login</button>
                </a>
                <a href="www.google.com" className='rounded-full'>
                    <button className='btn bg-red-500 hover:bg-red-600 transition duration-300 text-white p-1 px-3 rounded-full pb-1'>Sign Up</button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;