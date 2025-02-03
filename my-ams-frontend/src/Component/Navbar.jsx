import React from 'react';
import '../ComponentStyle/Nav.css'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img src="/src/assets/logo1.png" alt="Logo 1" className="me-2" style={{ height: '40px' }} />
                        <img src="/src/assets/logo2.png" alt="Logo 2" style={{ height: '40px' }} />
                    </a>
                    <button
                        className="navbar-toggler ms-auto"
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
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="#">Contact</Link>
                            </li>
                        </ul>
                        <Link to="/Login">  <button type="button" className="btn btn-primary rounded-pill px-4">
                            Login
                        </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
