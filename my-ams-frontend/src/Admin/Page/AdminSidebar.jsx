import React, { useEffect } from 'react';
import '../../Admin/PageStyle/AdminSidebar.css';
import Adminnav from '../Component/Adminnav';
import AppointmentPieChart from '../Charts/AppointmentPieChart';
import { apiService, adminApi } from '../../Api-folder/Api';

const AdminSidebar = () => {


useEffect(()=>{
  fetchAppointments();
},[])

const fetchAppointments = async () => {
  try{
    const response = await adminApi.totalAppointment();
    console.log("this is appointment99999----- data", response.data);
    const appointments = Array.isArray(response.data)
    ? response.data
    : [response.data];
  console.log("this is appointment in admin dashbpard ----  data", appointments);
    

  }catch(error){

  }
}

  return (
    <div className="full-height-bg" style={{paddingTop:'5em'}}>
      <Adminnav />
      <h3>Dashboard</h3>
      <hr />
      <div className="row">
        <main className="col-lg-12 col-md-10 px-md-3">
          <div className="row g-3 d-flex ">
            {[
              { label: 'Appointments', count: 24, color: 'primary' },
              { label: 'Approved', count: 14, color: 'success' },
              { label: 'Rejected', count: 2, color: 'danger' },
              { label: 'Deleted', count: 3, color: 'warning' },
            ].map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className={`custom-card card shadow  bg-${item.color}`}>
                  <h6>{item.label}</h6>
                  <strong>{item.count}</strong>
                </div>
              </div>
            ))}
          </div>

          {/* Appointment Pie Chart */}
        </main>
        <div className="chart-container">
          <AppointmentPieChart />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
