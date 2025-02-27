import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../PagesStyles/UserDashboard.css";
import { FaHome, FaUserEdit, FaBars, FaTimes } from "react-icons/fa";
import { FaCircleUser, FaVideo } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineAddToQueue } from "react-icons/md";
import { BsClipboard2PlusFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const logOutUser = () => {
    sessionStorage.removeItem("token"); // Remove token
    navigate('/'); // Redirect to homepage
};

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar Toggle Button for Mobile */}
          <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Sidebar */}
          <div
            className={`sidebar col-lg-2 col-md-4 d-flex flex-column p-3 shadow ${
              isSidebarOpen ? "open" : ""
            }`}
          >
            <img src={logo} alt="Logo" className="logo" />
            <hr />
            <Link
              to="/UserDashboard"
              className="nav-link"
              style={{ marginTop: "1rem" }}>
              <FaHome className="me-3" /> <span>Dashboard</span>
            </Link>
            <Link to="Appointment" className="nav-link">
              <MdOutlineAddToQueue className="me-3" />{" "}
              <span>Make Appointment</span>
            </Link>
            <Link to="AppointmentStatus" className="nav-link">
              <BsClipboard2PlusFill className="me-3" />
              <span>Appointment Status</span>
            </Link>
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
            <Link to="/" className="nav-link logout-link" onClick={(e) => {
            e.preventDefault();
            logOutUser();
        }}>
            <FiLogOut className='me-3'/> <span>Logout</span>
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
};

export default UserDashboard;
