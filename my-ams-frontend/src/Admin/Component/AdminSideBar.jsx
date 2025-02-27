import React from 'react'
import { Link } from 'react-router-dom'
import '../../Admin/ComponentStyles/AdminSideBar.css'
import logo from '../../assets/logo.png';

const AdminSideBar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 bg-light sidebar shadow d-flex flex-column vh-100 p-3">
          <img src={logo} alt="Logo" className="logo" />
          <hr />
          <h3 className="text-center">Admin Panel</h3>
          <hr />
          <aside className="d-flex flex-column p-3 vh-100">
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/doctor" className="nav-link">
                  Doctor
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/department" className="nav-link">
                  Department
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/appointments" className="nav-link">
                  Appointments
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/settings" className="nav-link">
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link">
                  Logout
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};
export default AdminSideBar
