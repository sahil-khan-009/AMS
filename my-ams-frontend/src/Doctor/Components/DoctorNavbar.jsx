import React from 'react'
import { FaUserAlt } from "react-icons/fa";


const DoctorNavbar = () => {
  return (
    <nav className="navbar col-lg-10 navbar-light bg-white shadow fixed-top">
          <div className="container-fluid">
            <span className="navbar-brand fw-bold">AMS</span>
            <div className="d-flex align-items-center text-dark">
              <FaUserAlt className="me-2" />
              <span>Doctor</span>
            </div>
          </div>
        </nav>
  )
}

export default DoctorNavbar
