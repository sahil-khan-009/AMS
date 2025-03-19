import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaHospital, FaCog, FaEnvelope, FaChevronDown, FaChevronUp, FaBars } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import '../ComponentStyles/AdminDashboard.css';

const AdminDashboard = () => {
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  // Function to handle sidebar closing on small screens
  const handleLinkClick = () => {
    if (window.innerWidth < 992) {
      setIsSidebarOpen(false);
    }
  };
  const logOutUser = () => {
    sessionStorage.removeItem("token"); // Remove token
    navigate('/'); // Redirect to homepage
  };

  // Click outside sidebar to close
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isSidebarOpen]);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Toggle Button for Small Screens */}
        <div 
          className="sidebar-toggle d-lg-none" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "" : <FaBars />}
        </div>

        {/* Sidebar Column */}
        <div 
          ref={sidebarRef}
          className={`col-lg-2 col-md-3 sidebar text-white p-3 ${isSidebarOpen ? "open" : ""}`} 
          id="sidebar"
        >
          <img src={logo} alt="Logo" className="logo" />
          <hr />
          <h3 className="text-center">Admin Panel</h3>
          <hr />
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/AdminDashboard" onClick={handleLinkClick}>
              <AiOutlineDashboard /><span className="ms-2">Dashboard</span>
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
                    <Link className="nav-link text-white" to="Doctor" onClick={handleLinkClick}>View Doctors</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="AddDoctor" onClick={handleLinkClick}>Add Doctor</Link>
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
                <span><FaHospital /><span className="ms-2"> Department</span></span>
                {isDepartmentOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {isDepartmentOpen && (
                <ul className="nav flex-column ps-4">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="Department" onClick={handleLinkClick}>View Department</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="AddDepartment" onClick={handleLinkClick}>Add Department</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="UserAppointment" onClick={handleLinkClick}>
                <FaEnvelope /> <span className="ms-2">Appointments</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="#settings" onClick={handleLinkClick}>
                <BiUser /> <span className="ms-2">Patients</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="#settings" onClick={handleLinkClick}>
                <MdOutlinePayment /> <span className="ms-2">Payments</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="#settings" onClick={handleLinkClick}>
                <FaCog /> <span className="ms-2">Settings</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="#profile" onClick={handleLinkClick}>
                <FaUser /> <span className="ms-2">Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="#logout" onClick={(e) => {
              e.preventDefault();
              logOutUser();
            }} >
                <FiLogOut /> <span className="ms-2">Logout</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content Column */}
        <div className="col-lg-10 col-md-8 px-md-3 ms-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
