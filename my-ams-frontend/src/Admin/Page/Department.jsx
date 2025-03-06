import React from 'react'
import BarchartAdmin from '../Charts/BarchartAdmin'
import Adminnav from '../Component/Adminnav'

function Department() {
  return (
    <div className='full-height-bg p-4'>
      <Adminnav />
      <h3 className="mt-5">Department</h3>
      <hr />
      <BarchartAdmin />
    </div>
  )
}

export default Department
