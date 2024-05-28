import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

function Navbar() {
  const divRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.right = isMenuOpen ? '0px' : '-200px';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='py-2 px-[10%] fixed bg-blue-400'>
      <img src={logo} alt="Logo" className='w-44' />
      <ul className='text-xl menu' ref={divRef}>
        <li><Link to='Home' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='Offer' smooth={true} offset={260} duration={500}>Program</Link></li>
        <li><Link to='Gallery' smooth={true} offset={-150} duration={500}>Gallery</Link></li>
        <li><Link to='Offer' smooth={true} offset={260} duration={500}>Campus</Link></li>
        <li><Link to='Testimonials' smooth={true} offset={-150} duration={500}>Testimonials</Link></li>
        <li>
          <button className='px-1 py-2 text-xl text-red-300 bg-white border-none rounded outline-none cursor-pointer '>
            <Link to='Contact' smooth={true} offset={0} duration={500}>Contact Us</Link>
          </button>
        </li>
      </ul>
      <div className='md:display:none'>
      <img  onClick={toggleMenu} src={menu_icon} className='w-5 menu-icon md: ' alt="Menu Icon" />

      </div>
    </nav>
  );
}

export default Navbar;
