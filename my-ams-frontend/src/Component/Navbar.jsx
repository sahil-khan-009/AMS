import React from 'react';
import { Link } from "react-router-dom";
import '../ComponentStyle/Nav.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src="/src/assets/logo1.png" alt="Logo 1" className="me-2 logo-img" />
                    <img src="/src/assets/logo2.png" alt="Logo 2" className="logo-img" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <Link to="/login">
                        <button type="button" className="btn btn-primary rounded-pill px-4 ms-lg-3">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}