import React from 'react'
import Adminnav from '../Component/Adminnav'
import DoctorAppointmentsChart from '../Charts/DoctorAppointmentChart'

const Doctor = () => {
  return (
    <div className='full-height-bg'style={{paddingTop:'5em'}}>
    <Adminnav/>
    <h3 >Department</h3>
    <hr />
    <DoctorAppointmentsChart/>
  </div>
  )
}

export default Doctor
