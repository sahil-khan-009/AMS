import React from 'react';
import '../ComponentStyle/DashboardNav.css';
import { FaUserAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";


export default function DashboardNav() {
    return (
        <nav className="navbar col-lg-10 navbar-light bg-white shadow fixed-top ms-auto">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="d-flex align-items-center gap-3 logo-container">
                        <FaBars className="bar-icon fs-5" />
                        <h3 className="brand-name m-0" style={{ lineHeight: '1' }}>AMS</h3>
                    </div>
                    <div className="d-flex align-items-center text-black py-2 fs-5">
                        <FaUserAlt className="me-2" style={{ fontSize: '1.25rem', lineHeight: '1' }} />
                        <span className="text-start" style={{ lineHeight: '1' }}>Sahil khan</span>
                    </div>
                </div>

            </div>
        </nav>
    );
}
