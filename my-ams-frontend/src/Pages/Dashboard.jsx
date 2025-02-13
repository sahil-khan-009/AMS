import React from 'react';
import "../PagesStyles/Dashboard.css";
import { MdOutlineAddToQueue } from "react-icons/md";
import { MdApproval } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdAutoDelete } from "react-icons/md";


function Dashboard() {
  return (
    <div className="dashboard mt-5">
      <p className="page-show">Dashboard</p>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>User Login Successfully!</strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <div className='d-flex gap-3'>
        <div class=" col-3 card text-white bg-secondary mb-3 p-3" >
          <h5 class="card-title"><MdOutlineAddToQueue className='me-2' />Make Appointment</h5>
          <p class="card-text">0</p>
        </div>
        <div class=" col-3 card text-white bg-secondary mb-3 p-3" >
          <h5 class="card-title"><MdApproval className='me-2'/>Approved Appointment</h5>
          <p class="card-text">0</p>
        </div>
        <div class=" col-3 card text-white bg-secondary mb-3 p-3" >
          <h5 class="card-title"><MdOutlinePendingActions className='me-2' />Pending Appointment</h5>
          <p class="card-text">0</p>
        </div>
      </div>
      <div className='d-flex gap-3 mt-3'>
      <div class=" col-3 card text-white bg-secondary mb-3 p-3" >
          <h5 class="card-title"><MdAutoDelete className='me-2'/>Delete Appointment</h5>
          <p class="card-text">0</p>
        </div>
      </div>
    </div>

  );
}

export default Dashboard;
