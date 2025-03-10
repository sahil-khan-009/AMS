import React, { useState } from "react";
import { FaHome,FaUser,FaHospital,FaCog, FaEnvelope, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FaUserDoctor } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import '../ComponentStyles/AdminSideBar.css';

const AdminSideBar = () => {
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Column */}
        <div className="col-lg-2 col-md-3 sidebar text-white p-3" id="sidebar">
          <img src={logo} alt="Logo" className="logo" />
          <hr />
          <h3 className="text-center">Admin Panel</h3>
          <hr />
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/AdminSideBar">
                <FaHome /><span className="ms-2">Dashboard</span>
              </Link>
            </li>

            {/* Doctor Section */}
            <li className="nav-item">
              <div
                className="nav-link text-white d-flex justify-content-between align-items-center"
                onClick={() => setIsDoctorOpen(!isDoctorOpen)}
                style={{ cursor: "pointer" }}
              >
                <span><FaUserDoctor /><span className="ms-2"> Doctor</span></span>
                {isDoctorOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {isDoctorOpen && (
                <ul className="nav flex-column ps-4">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="Doctor">View Doctors</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="AddDoctor">Add Doctor</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Department Section */}
            <li className="nav-item">
              <div
                className="nav-link text-white d-flex justify-content-between align-items-center"
                onClick={() => setIsDepartmentOpen(!isDepartmentOpen)}
                style={{ cursor: "pointer" }}
              >
                <span><FaHospital  /><span className="ms-2"> Department</span></span>
                {isDepartmentOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {isDepartmentOpen && (
                <ul className="nav flex-column ps-4">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="Department">View Department</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="AddDepartment">Add Department</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="UserAppointment">
                <FaEnvelope /> <span className="ms-2">Appointments</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="#settings">
                <FaCog /> <span className="ms-2">Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="#profile">
                <FaUser /> <span className="ms-2">Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="#logout">
                <FiLogOut  /> <span className="ms-2">Logout</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content Column */}
        <div className="col-lg-10 col-md-8 px-md-3 ms-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
