import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaUserDoctor } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { RiChatNewFill } from "react-icons/ri";

import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const [isPatientOpen, setIsPatientOpen] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
const navigate = useNavigate();



  const logOutUser = () => {
    sessionStorage.removeItem("token"); // Remove token
    navigate('/'); // Redirect to homepage
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-3 sidebar text-white p-3">
          <img src={logo} alt="Logo" className="logo" />
          <hr />
          <h3 className="text-center">Doctor Panel</h3>
          <hr />
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/DoctorDashboard">
                <AiOutlineDashboard />
                <span className="ms-2">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="PatientAppointments">
                <span>
                  <FaEnvelope />
                  <span className="ms-2">Appointments</span>
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <div
                className="nav-link text-white d-flex justify-content-between align-items-center"
                onClick={() => setIsPatientOpen(!isPatientOpen)}
                style={{ cursor: "pointer" }}
              >
                <span>
                  <FaUserDoctor />
                  <span className="ms-2">Patients</span>
                </span>
                {isPatientOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {isPatientOpen && (
                <ul className="nav flex-column ps-4">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="PatientDetails">
                      Patients Details
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="AppointmentNotes">
                      Past Appointments
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="PatientReport">
                      Patients Reports
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/DoctorDashboard">
                <span>
                  <IoNotifications />
                  <span className="ms-2">Notification</span>
                </span>
              </Link>
            </li>

                        <li className="nav-item">
                            <div
                                className="nav-link text-white d-flex justify-content-between align-items-center"
                                onClick={() => setIsSettingOpen(!isSettingOpen)}
                                style={{ cursor: "pointer" }}
                            >
                                <span><IoSettings /><span className="ms-2">Setting</span></span>
                                {isSettingOpen ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            {isSettingOpen && (
                                <ul className="nav flex-column ps-4">
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="Availability">Availability</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="DoctorProfile">Profile</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="DoctorChat">
                                <span><MdLogout /><span className="ms-2">Chat-Box</span></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/DoctorDashboard">
                                <span><MdLogout /><span className="ms-2">Logout</span></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-10 col-md-8 px-md-3 ms-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DoctorDashboard;
