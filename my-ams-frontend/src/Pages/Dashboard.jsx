import React, { useState, useEffect } from "react";
import "../PagesStyles/Dashboard.css";
import DashboardNav from "../Component/DashboardNav";
import { adminApi, apiService } from "../Api-folder/Api";

function Dashboard() {
  const [appointmentsCounts, setAppointmentsCounts] = useState({
    make: 0,
    approved: 0,
    pending: 0,
    deleted: 0,
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await adminApi.totalAppointment();
      const appointments = Array.isArray(response.data)
        ? response.data
        : [response.data];
      console.log("this is appointment data", appointments);

      // Calculate counts based on appointment status
      const counts = {
        make: appointments.length, // Total appointments
        approved: appointments.filter(
          (app) => app.appointmentStatus === "confirmed"
        ).length,
        pending: appointments.filter(
          (app) => app.appointmentStatus === "pending"
        ).length,
        deleted: appointments.filter(
          (app) => app.appointmentStatus === "cancelled"
        ).length,
      };

      setAppointmentsCounts(counts);
    } catch (err) {
      console.error("Error fetching appointments:", err.message);
    }
  };

  return (
    <div className="full-height-bg" style={{ paddingTop: "5em" }}>
      <DashboardNav />
      <h3>Dashboard</h3>
      <hr />

      <div className="row g-3 d-flex justify-content-center">
        {[
          {
            label: "Created Appointments",
            count: appointmentsCounts.make,
            color: "primary",
          },
          {
            label: "Approved",
            count: appointmentsCounts.approved,
            color: "success",
          },
          {
            label: "Pending",
            count: appointmentsCounts.pending,
            color: "danger",
          },
          {
            label: "Deleted",
            count: appointmentsCounts.deleted,
            color: "warning",
          },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className={`custom-card card shadow p-3 bg-${item.color}`}>
              <h6>{item.label}</h6>
              <strong>{item.count}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
