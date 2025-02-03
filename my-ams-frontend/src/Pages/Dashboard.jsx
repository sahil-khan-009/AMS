import React from 'react';
import "../PagesStyles/Dashboard.css";

function Dashboard() {
  return (
    <div className="col-md-10 col-lg-12 dashboard-content">         
      <a className="brand">Dashboard</a>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="cards text-center">
            <div className="card-body">
              <h4 className="cards-title">Make Appointment</h4>
              <p className="card-text display-4">0</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="cards text-center">
            <div className="card-body">
              <h4 className="cards-title">Delete Appointment</h4>
              <p className="card-text display-4">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
