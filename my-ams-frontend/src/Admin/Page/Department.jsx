import React from 'react'
import BarchartAdmin from '../Charts/BarchartAdmin'
import Adminnav from '../Component/Adminnav'

function Department() {
  return (
    <div className='full-height-bg'style={{paddingTop:'5em'}}>
      <Adminnav />
      <h3 >Department</h3>
      <hr />
      <BarchartAdmin />
    </div>
  )
}

export default Department
