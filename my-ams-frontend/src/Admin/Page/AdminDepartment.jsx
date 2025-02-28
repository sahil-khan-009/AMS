import React from 'react'
import BarchartAdmin from '../Charts/BarchartAdmin'
import Adminnav from '../Component/Adminnav'

function AdminDepartment() {
  return (
    <div>
      <Adminnav />
      <h2 className="mt-5 p-3">Department</h2>
      <hr />
      <BarchartAdmin />
    </div>
  )
}

export default AdminDepartment
