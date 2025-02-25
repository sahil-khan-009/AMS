import React from 'react';
import "../PagesStyles/Dashboard.css";
import { useState,useEffect } from 'react';
import { FaLaptopMedical } from "react-icons/fa";
import { MdApproval, MdOutlinePendingActions, MdAutoDelete } from "react-icons/md";
import DashboardNav from '../Component/DashboardNav';
// import { useAppointment } from '../context/AppointmentContext';
import apiService from "../Api-folder/Api";

function Dashboard() {
  const [appointmentsCounts, setAppointmentsCounts] = useState([]);



  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await apiService.getAppointment();
      setAppointmentsCounts(
        Array.isArray(response.data) ? response.data : [response.data]
      );
    } catch (err) {
      console.error("Error fetching appointments:", err.message);
    }
  };




  return (
    <div className="dashboard py-3 shadow px-3" style={{ marginTop: "5rem" }}>
      <DashboardNav />
      <p className="page-show">Dashboard</p>
      <hr />

      <div className='d-flex flex-wrap gap-3 '>
        <div className="custom-card">
          <FaLaptopMedical size={30} className='me-3' />
          <div className="text-content">
            <h6>Make Appointment</h6>
            <strong>{appointmentsCounts.length+1}</strong>
          </div>
        </div>
        <div className="custom-card">
          <MdApproval size={30} className='me-3' />
          <div className="text-content">
            <h6>Approved Appointment</h6>
            <strong>1</strong>
          </div>
        </div>
        <div className="custom-card">
          <MdOutlinePendingActions size={30} className='me-3' />
          <div className="text-content">
            <h6>Pending Appointment</h6>
            <strong>1</strong>
          </div>
        </div>
        <div className="custom-card">
          <MdAutoDelete size={30} className='me-2' />
          <div className="text-content">
            <h6>Delete Appointment</h6>
            <strong>8</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
