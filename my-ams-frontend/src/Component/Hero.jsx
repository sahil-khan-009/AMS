import React from 'react'
import '../ComponentStyle/Hero.css';
import { FaArrowRightLong } from "react-icons/fa6";


const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1>Welcome to Appointment Management System</h1>
                <p>The Appointment Management System is a web application that allows users to schedule, manage, and view appointments. It provides an easy-to-use interface for clients to book and keep track of appointments.</p>
                <button className='btn'>Explore more<FaArrowRightLong className='ms-2'/>
                </button>
            </div>
        </div>
    )
}

export default Hero
