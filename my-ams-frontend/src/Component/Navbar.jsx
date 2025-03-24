import React, { useEffect, useState, useRef } from 'react';
import '../ComponentStyle/Navbar.css';
import logo from '../assets/logo.png';
import { RiLoginBoxFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link as NavLink } from 'react-router-dom';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const menuRef = useRef(null); // Reference for menu

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle menu function
    const toggleMenu = () => {
        setMobileMenu((prev) => !prev);
    };

    // Close menu on link click (for mobile)
    const closeMenuOnLinkClick = () => {
        if (window.innerWidth < 992) {
            setMobileMenu(false);
        }
    };

    // Close menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMobileMenu(false);
            }
        };

        if (mobileMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mobileMenu]);

    return (
        <nav className={`px-1 py-1 ${sticky ? 'dark-nav' : ''}`} ref={menuRef}>
            <img src={logo} alt='Logo' className='logo' />

            {/* Mobile menu toggle */}
            <HiOutlineMenuAlt3 className='menu' onClick={toggleMenu} size={30} />

            {/* Navigation Links */}
            <ul className={mobileMenu ? 'mobile-menu-open' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={closeMenuOnLinkClick}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500} onClick={closeMenuOnLinkClick}>Programs</Link></li>
                <li><Link to='aboutus' smooth={true} offset={-100} duration={500} onClick={closeMenuOnLinkClick}>About Us</Link></li>
                <li><Link to='services' smooth={true} offset={-100} duration={500} onClick={closeMenuOnLinkClick}>Our Services</Link></li>
                <li><Link to='easy-step' smooth={true} offset={-100} duration={500} onClick={closeMenuOnLinkClick}>Appointment</Link></li>
                <li><Link to='contactus' smooth={true} offset={-40} duration={500} onClick={closeMenuOnLinkClick}>Contact Us</Link></li>
                <li>
                    <NavLink to='/Login'>
                        <button className='btn'><RiLoginBoxFill className='me-1' /> Login</button>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
