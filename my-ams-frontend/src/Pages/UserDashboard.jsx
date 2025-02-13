import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import "../PagesStyles/UserDashboard.css";
import { FaHome, FaUserEdit, FaBars, FaTimes } from "react-icons/fa";
import { FaCircleUser, FaVideo } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { MdOutlineAddToQueue } from "react-icons/md";
import DashboardNav from '../Component/DashboardNav';

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <DashboardNav />

      {/* Sidebar Toggle Button (Visible on Mobile) */}
      <button className="sidebar-toggle-btn d-md-none mt-5" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className="container-fluid" >
        <div className="row">
          {/* Sidebar */}
          <div className={`sidebar col-lg-2 col-md-4 d-flex flex-column p-3 ${isSidebarOpen ? "open" : ""}`}>
            <Link to="/UserDashboard" className="nav-link" style={{marginTop:"5rem"}}>
              <FaHome className="me-3" /> <span>Dashboard</span>
            </Link>
            <div className="button-group">
              <a className="btn dropdown-toggle" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                <MdOutlineAddToQueue className="me-3" /> <span>Make Appointment</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                <li><Link className="dropdown-item" to="Appointment">Add Appointment</Link></li>
                <li><Link className="dropdown-item" to="AppointmentStatus">Appointment Status</Link></li>
              </ul>
            </div>
            <Link to="UpdateDetails" className="nav-link">
              <FaUserEdit className="me-3" /> <span>Update Details</span>
            </Link>
            <Link to="Profile" className="nav-link">
              <FaCircleUser className="me-3" /> <span>Profile</span>
            </Link>
            <Link to="Notification" className="nav-link">
              <IoMdNotifications className="me-3" /> <span>Notification</span>
            </Link>
            <Link to="video-call" className="nav-link">
              <FaVideo className="me-3" /> <span>Video Call</span>
            </Link>
            <Link to="logout" className="nav-link logout-link">
              <RiLogoutBoxRFill className="me-3" /> <span>Logout</span>
            </Link>
          </div>

          {/* Main Content */}
          <div className="col-lg-10 col-md-8 main-content p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
