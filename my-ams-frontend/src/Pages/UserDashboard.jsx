import React from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { Outlet, Link } from 'react-router-dom';
import "../PagesStyles/UserDashboard.css";

const UserDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 sidebar">
          <div className="d-flex items-center gap-3">
            <IoHomeSharp className="text-2xl" />
            <h3 className="text-xl font-semibold">AMS</h3>
          </div>
          <Link to="/UserDashboard">Dashboard</Link>

          <div className="dropdown">
            <Link to="/" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Make Appointment</Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="Appointment">Add Appointment</Link></li>
              <li><Link className="dropdown-item" to="AppointmentStatus">Appointment Status</Link></li>
            </ul>
          </div>

          <Link to="UpdateDetails">Update Details</Link>
          <Link to="Profile">Profile</Link>
          <Link to="Notification">Notification</Link>
          <Link to="Video Call">Video Call</Link>
          <Link to="#">Logout</Link>
        </div>

        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
