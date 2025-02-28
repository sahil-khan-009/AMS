import React from 'react'
import '../../Admin/PageStyle/AdminDashboard.css'
import AdminSideBar from '../Component/AdminSideBar'
import Adminnav from '../Component/Adminnav'
import AppointmentPieChart from '../Charts/AppointmentPieChart'


const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSideBar />
        <main className="col-md-10 ms-sm-auto px-md-4 mt-5">
        
          <h2 className="mt-4">Dashboard</h2>
          <hr />
          <div className="row g-3">
            <div className="col-md-6 col-lg-3">
              <div className="custom-card card shadow p-3">
                <h6>Appointments</h6>
                <strong>0</strong>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="custom-card card shadow p-3">
                <h6>Approved </h6>
                <strong>0</strong>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="custom-card card shadow p-3">
                <h6>Rejected </h6>
                <strong>0</strong>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="custom-card card shadow p-3">
                <h6>Deleted </h6>
                <strong>0</strong>
              </div>
            </div>
          </div>
          {/* Appointment Pie Chart Start From here */}
          <AppointmentPieChart />
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard
