import React from "react";
import "../../Admin/ComponentStyles/Adminnav.css";
import { FaUserAlt } from "react-icons/fa";


const Adminnav = () => {
    return (
        <div className="container-fluid">
            <nav className="d-flex navbar fixed-top bg-white shadow w-100" style={{ marginLeft: '15.5em' }}>
            <div className="d-flex align-items-center text-black py-2 px-2 fs-5">
                    <span className="navbar-brand"style={{ lineHeight: '1' }}>
                        AMS
                    </span>
                    <FaUserAlt className="me-2" style={{ fontSize: '1.25rem', lineHeight: '1' ,marginLeft:'53em' }} />
                    <span className="text-start" style={{ lineHeight: '1'}}>Sahil khan</span>
                </div>
            </nav>
        </div>

    );
};

export default Adminnav;
