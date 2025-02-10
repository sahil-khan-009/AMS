import React from "react";
import "../PagesStyles/AppointmentStatus.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppointment } from "../context/AppointmentContext";

function AppointmentStatus() {
  const [AppointmentDetails, SetAppointmentDetails] = useState([]);
  const { selectedDoctorId, testing, departmentId } = useAppointment();

  console.log("Selected Doctor Id: in appointment status---- ", selectedDoctorId);
  // console.log("Selected Department---in appontmenstatus:------ ", selectedDepartment);
  // console.log("Testing:----------------", testing);

  useEffect(() => {
    const savedAppointments = localStorage.getItem("appointments");
    if (savedAppointments) {
      SetAppointmentDetails(JSON.parse(savedAppointments));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!departmentId) {
        console.log("departmentId is not set yet!");
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:4000/api/appointments/${departmentId}`, // Use route parameter
          { withCredentials: true }
        );

        console.log("Appointments:---------------------", response.data);
        const appointments = Array.isArray(response.data) ? response.data : [response.data];

        SetAppointmentDetails(appointments);
      localStorage.setItem("appointments", JSON.stringify(appointments))
      } catch (err) {
        console.log("Error fetching departments:", err.message);
      }
    };
    fetchData();
  }, [departmentId]);

  useEffect(() => {
    console.log("Updated AppointmentDetails:", AppointmentDetails);
  }, [AppointmentDetails]); // ✅ Log when state updates

  return (
    <div className="col-md-10 col-lg-12 dashboard-content">
      <nav className="navbar-expand-lg mb-5">
        <a className="brand">Appointment Status</a>
      </nav>
      <div className="table-container">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Sr No</th>
                <th>Patient Name</th>
                <th>Patient Email</th>
                <th>Appointment Date</th>
                <th>Description</th>
                <th>Department</th>
                <th>Status</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {AppointmentDetails && AppointmentDetails.length > 0 ? (
                AppointmentDetails.map((appointment, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{appointment.patientName}</td>
                    <td>{appointment.patientemail}</td>
                    <td>{appointment.appointmentDate}</td>
                    <td>{appointment.description}</td>
                    {/* <td>{appointment.departmentId}</td> */}
                    <td>{appointment.appointmentStatus}</td>
                    <td>
                      <button className="bs">Delete</button>{" "}
                      {/* Button inside row */}
                    </td>
                    <td>
                      <button className="bs">Edit</button>{" "}
                      {/* Button inside row */}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No appointments found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AppointmentStatus;

