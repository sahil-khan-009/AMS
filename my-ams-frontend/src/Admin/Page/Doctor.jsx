import React from 'react'
import Adminnav from '../Component/Adminnav'
import DoctorAppointmentsChart from '../Charts/DoctorAppointmentChart'

const Doctor = () => {
  return (
    <div className='full-height-bg p-4'>
    <Adminnav/>
    <h3 className="mt-5">Department</h3>
    <hr />
    <DoctorAppointmentsChart/>
  </div>
  )
}

export default Doctor
