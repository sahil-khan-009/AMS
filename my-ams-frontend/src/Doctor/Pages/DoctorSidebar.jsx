import React from 'react'
import DoctorNavbar from '../Components/DoctorNavbar'

const DoctorSidebar = () => {
    return (
        <div className="full-height-bg" style={{ paddingTop: 'ar5em' }}>
            <DoctorNavbar/>
            <h3>Dashboard</h3>
            <hr />
            <div className="row">
        <main className="col-lg-12 col-md-10 px-md-3">
          <div className="row g-3 d-flex ">
            {[
              { label: 'Upcoming Appointments', count: 5, color: 'primary' },
              { label: 'Patients', count: 7, color: 'success' },
              { label: 'Reports', count: 3, color: 'danger' },
              { label: 'Completed', count: 9, color: 'warning' },
            ].map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className={`custom-card card shadow  bg-${item.color}`}>
                  <h6>{item.label}</h6>
                  <strong>{item.count}</strong>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
        </div>
    )
}

export default DoctorSidebar
