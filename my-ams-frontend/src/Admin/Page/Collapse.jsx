import React from 'react';
import '../PageStyle/Collapse.css';

const Collapse = () => {
    return (
        <div>
            <div id="sidebar" className="sidebar p-3">
                <a href="#" className="text-white text-decoration-none d-flex align-items-center ms-3 mb-3">
                    <h4>My Sidebar</h4>
                </a>
                <a href="#">Dashboard</a>
                <a href="#">Profile</a>
                {/* Updated dropdown button */}
                <a 
                    className="d-block" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#submenu"
                    role="button"
                    aria-expanded="true"
                    aria-controls="submenu"
                >
                    Dropdown ▼
                </a>
                <div id="submenu" className="collapse ps-3">
                    <a href="#">Sub-item 1</a>
                    <a href="#">Sub-item 2</a>
                    <a href="#">Sub-item 3</a>
                </div>
                <a href="#">Settings</a>
            </div>
        </div>
    );
};

export default Collapse;
