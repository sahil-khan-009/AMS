import React, { useEffect, useState } from 'react';
import '../ComponentStyle/Navbar.css';
import logo from '../assets/logo.png';
import { RiLoginBoxFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link as NavLink } from 'react-router-dom';



const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`px-5 ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt='Logo' className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}>Programs</Link></li>
                <li><Link to='aboutus' smooth={true} offset={-100} duration={500}>About Us</Link></li>
                <li><Link to='services' smooth={true} offset={-100} duration={500}>Our Services</Link></li>
                <li><Link to='easy-step' smooth={true} offset={-100} duration={500}>Appointment</Link></li>
                <li><Link to='contactus' smooth={true} offset={-40} duration={500}>Contact Us</Link></li>
                <li>
                    <NavLink to='/Login'><button className='btn' ><RiLoginBoxFill className='me-1' /> Login</button></NavLink>
                </li>
            </ul>
            <HiOutlineMenuAlt3 className='menu' onClick={toggleMenu}  size={30} />
        </nav>
    );
}

export default Navbar;
