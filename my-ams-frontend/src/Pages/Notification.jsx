import React from 'react'
import "../PagesStyles/Notification.css"
import DashboardNav from '../Component/DashboardNav'

function Notification() {
  return (
    <div  className="full-height-bg" style={{paddingTop:'5em'}}>
      <DashboardNav/>
      <h3 >Notification</h3><hr/>
      <div class="notifications">
        <div class="alert alert-light border-start border-primary border-1 p-3">
          <strong>New Appointment:</strong> John Doe has scheduled an appointment for 10 AM.
          <span class="text-muted d-block small">5 mins ago</span>
        </div>
        <div class="alert alert-light border-start border-danger border-1 p-3">
          <strong>Cancelled Appointment:</strong> Sarah Smith cancelled her appointment.
          <span class="text-muted d-block small">30 mins ago</span>
        </div>
        <div class="alert alert-light border-start border-success border-1 p-3">
          <strong>Approved:</strong> Your appointment was approved.
          <span class="text-muted d-block small">1 hour ago</span>
        </div>
      </div>
    </div>

  )
}

export default Notification
