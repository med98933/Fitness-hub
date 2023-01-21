import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <>
        <nav>
           <div className='NavbarContainer'>
                <Link to='/' className='Logo'>Fitness hub</Link>
                <input type='checkbox' className='toggle-menu'/>
                <div className='hamburger'></div>
                <ul className='nav-menu'>
                    <li className='nav-item'><a href='#About' className='nav-link'>About</a></li>
                    <li className='nav-item'><Link to='/Exercices' className='nav-link'>Exercices</Link></li>
                    <li className='nav-item'><a href='#Programs' className='nav-link'>Programs</a></li>
                    <li className='nav-item'><a href='#signup' className='nav-link'>Sign up</a></li>
                    <li className='nav-btn'>
                    <Link to='/Dashboard'>Sign In</Link>
                    </li>
                </ul>
                
           </div>
        </nav>
    </>
  )
}




export default Navbar
