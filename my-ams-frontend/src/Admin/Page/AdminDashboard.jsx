import React from 'react'
import '../../Admin/PageStyle/AdminDashboard.css'
import AdminSideBar from '../Component/AdminSideBar'
import Adminnav from '../Component/Adminnav'
import AppointmentPieChart from '../Charts/AppointmentPieChart'


const AdminDashboard = () => {
  return (
    <div className="container-fluid full-height-bg p-4">
      <Adminnav/>
      <div className="row">

        <AdminSideBar />
        <main className="col-lg-12 col-md-8 px-md-3 ">
        
          <h3 className="mt-5">Dashboard</h3>
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
