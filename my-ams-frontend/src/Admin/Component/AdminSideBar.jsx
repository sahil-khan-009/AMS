import React from 'react'
import { Link } from 'react-router-dom'
import '../../Admin/ComponentStyles/AdminSideBar.css'
import logo from '../../assets/logo.png';

const AdminSideBar = () => {
  return (
    <nav className="col-md-2 d-md-block bg-dark sidebar vh-100 p-3">
      <img src={logo} alt="Logo" className="logo img-fluid" />
      <hr />
      <h3 className="text-white text-center">Admin Panel</h3>
      <hr />
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/AdminDepartment" className="nav-link text-white">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/doctor" className="nav-link text-white">
            Doctor
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/department" className="nav-link text-white">
            Department
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/appointments" className="nav-link text-white">
            Appointments
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link text-white">
            Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link text-white">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/logout" className="nav-link text-white">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default AdminSideBar
