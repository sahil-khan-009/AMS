import React from 'react';
import '../ComponentStyle/DashboardNav.css';
import CoverImage from "/src/assets/modified logo.png";
import { FaUserAlt } from "react-icons/fa";


export default function DashboardNav() {
    return (
        <nav className="dashboard-nav navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <div className="d-flex align-items-center gap-3">
                    <img src={CoverImage} alt="Logo" className="rounded" />
                    <h3 className="text-xl font-semibold">AMS</h3>
                </div>
                <div>
                    <button type="button" className="btn btn-primary btn-lg d-flex align-items-center w-100" disabled>
                        <FaUserAlt className="me-2" />
                        <span className="flex-grow-1 text-start">Sahil Khan</span> {/* Align text to the left */}
                    </button>
                </div>
            </div>
        </nav>
    );
}
