import React from 'react';
import "../PagesStyles/Dashboard.css";
import { FaLaptopMedical } from "react-icons/fa";
import { MdApproval, MdOutlinePendingActions, MdAutoDelete } from "react-icons/md";
import DashboardNav from '../Component/DashboardNav';
import { useAppointment } from '../context/AppointmentContext';

function Dashboard() {
  const { appointments } = useAppointment();

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
            <strong>{appointments.length}</strong>
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
            <strong>1</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
