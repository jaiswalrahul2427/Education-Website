import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
function Navbar() {
  return (
    <nav className='py-2 px-[10%] sticky'>
      <img src={logo} alt="" className=' w-44' />
      <ul className='text-xl '  >
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li> <button className='px-4 py-2 text-2xl text-red-300 bg-white border-none rounded outline-none cursor-pointer'  >Conatct Us</button></li>

      </ul>
      
    </nav>
  )
}

export default Navbar
