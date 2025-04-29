import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import "../PagesStyles/UserDashboard.css";
import { FaHome, FaUserEdit, FaBars } from "react-icons/fa";
import { FaCircleUser, FaVideo } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineAddToQueue } from "react-icons/md";
import { BsClipboard2PlusFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 992) {
      setIsSidebarOpen(false);
    }
  };

  const logOutUser = () => {
    sessionStorage.removeItem("token"); // Remove token
    navigate('/'); // Redirect to homepage
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Toggle Button for Mobile */}
        <button className="sidebar-toggle d-lg-none" onClick={toggleSidebar}>
          {isSidebarOpen ? "" : <FaBars />}
        </button>

        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`col-lg-2 col-md-3 sidebar text-white p-3 shadow ${isSidebarOpen ? "open" : ""}`}
        >
          <img src={logo} alt="Logo" className="logo" />
          <hr />
          <h3 className="text-center">User Panel</h3>
          <hr />
          <Link to="/UserDashboard" className="nav-link" onClick={handleLinkClick} style={{ marginTop: "1rem" }}>
            <FaHome className="me-2" /> <span>Dashboard</span>
          </Link>
          <Link to="Appointment" className="nav-link" onClick={handleLinkClick}>
            <MdOutlineAddToQueue className="me-2" /> <span>Make Appointment</span>
          </Link>
          <Link to="AppointmentStatus" className="nav-link" onClick={handleLinkClick}>
            <BsClipboard2PlusFill className="me-2" />
            <span> Status</span>
          </Link>
          <Link to="UpdateDetails" className="nav-link" onClick={handleLinkClick}>
            <FaUserEdit className="me-2" /> <span>Update Details</span>
          </Link>
          <Link to="Profile" className="nav-link" onClick={handleLinkClick}>
            <FaCircleUser className="me-2" /> <span>Profile</span>
          </Link>
          <Link to="Notification" className="nav-link" onClick={handleLinkClick}>
            <IoMdNotifications className="me-2" /> <span>Notification</span>
          </Link>
          <Link to="Video-call/123/abc" className="nav-link" onClick={handleLinkClick}>
            <FaVideo className="me-2" /> <span>Video Call</span>
          </Link>
          <Link
            to="/"
            className="nav-link logout-link"
            onClick={(e) => {
              e.preventDefault();
              logOutUser();
            }}
          >
            <FiLogOut className="me-2" /> <span>Logout</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="col-lg-10 col-md-8 main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
