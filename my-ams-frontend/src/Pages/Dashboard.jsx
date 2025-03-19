import React, { useState, useEffect } from 'react';
import "../PagesStyles/Dashboard.css";
import DashboardNav from '../Component/DashboardNav';
import { apiService } from "../Api-folder/Api";

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
    <div className="dashboard py-2 mt-5 vh-90">
      <DashboardNav />
      <h3 className="page-show">Dashboard</h3>
      <hr />
      
      <div className="row g-3 d-flex justify-content-center">
            {[
              { label: 'Make Appointments', count: 0, color: 'primary' },
              { label: 'Approved', count: 0, color: 'success' },
              { label: 'Pending', count: 0, color: 'danger' },
              { label: 'Deleted', count: 0, color: 'warning' },
            ].map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className={`custom-card card shadow p-3 bg-${item.color}`}>
                  <h6>{item.label}</h6>
                  <strong>{item.count}</strong>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
}

export default Dashboard;
