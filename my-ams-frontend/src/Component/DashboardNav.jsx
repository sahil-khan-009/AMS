import React from 'react';
import '../ComponentStyle/DashboardNav.css';
import CoverImage from "/src/assets/modified logo.png";

export default function DashboardNav() {
    return (
        <nav className="dashboard-nav navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <div className="d-flex align-items-center gap-3">
                    <img src={CoverImage} alt="Logo" className="rounded" />
                    <h3 className="text-xl font-semibold">AMS</h3>
                </div>               
            </div>
        </nav>
    );
}
