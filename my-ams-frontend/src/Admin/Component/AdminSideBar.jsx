import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../../Admin/ComponentStyles/AdminSideBar.css";
import logo from "../../assets/logo.png";

const AdminSideBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <nav className="col-md-2 d-md-block bg-dark sidebar vh-100 p-3">
        <img src={logo} alt="Logo" className="logo img-fluid" />
        <hr />
        <h3 className="text-white text-center">Admin Panel</h3>
        <hr />
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/AdminSideBar" className="nav-link text-white">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="AddDoctor" className="nav-link text-white">
              Doctor
            </Link>
          </li>

          {/* Department Dropdown */}
          <li
            className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              to="Department"
              className="nav-link dropdown-toggle text-white"
              id="departmentDropdown"
              role="button"
              aria-expanded={isDropdownOpen}
            >
              Department
            </Link>
            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`} aria-labelledby="departmentDropdown">
              {/* <li>
                <Link to="/AdminDepartment" className="dropdown-item">View Departments</Link>
              </li> */}
              <li>
                <Link to="AddDepartment" className="dropdown-item">Add Department</Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="UserAppointment" className="nav-link text-white">
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
      <div className="col-lg-10 col-md-8 main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminSideBar;
