import React, { useEffect, useState } from "react";
import "../PagesStyles/AppointmentStatus.css";
import { useAppointment } from "../context/AppointmentContext";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import apiService from "../Api-folder/Api";

function AppointmentStatus() {
  const [AppointmentDetails, SetAppointmentDetails] = useState([]);
  const { departmentId } = useAppointment();

  console.log("Selected DepartmentId----:", departmentId);

  // Load appointments from localStorage on mount
  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    SetAppointmentDetails(savedAppointments);
  }, []);

  // Fetch appointments when departmentId changes
  useEffect(() => {
    const fetchData = async () => {
      if (!departmentId) {
        console.log("departmentId is not set yet!");
        return;
      }
      try {
        const response = await apiService.getAppointment(departmentId);
        const newAppointments = Array.isArray(response.data)
          ? response.data
          : [response.data];

        console.log("API Data (New Appointments):", newAppointments);

        // Retrieve existing appointments
        const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

        // ✅ **Remove Duplicates: Keep only unique appointments**
        const combinedAppointments = [...storedAppointments, ...newAppointments];

        // ✅ **Filter Out Duplicates**
        const uniqueAppointments = Array.from(
          new Map(combinedAppointments.map((item) => [item._id, item])).values()
        );

        // Store **only unique** appointments in localStorage
        localStorage.setItem("appointments", JSON.stringify(uniqueAppointments));

        // Update state
        SetAppointmentDetails(uniqueAppointments);
      } catch (err) {
        console.log("Error fetching appointments:", err.message);
      }
    };

    fetchData();
  }, [departmentId]);

  useEffect(() => {
    console.log("Updated AppointmentDetails:", AppointmentDetails);
  }, [AppointmentDetails]);

  return (
    <div className="col-md-10 col-lg-12 mt-5">
      <p className="page-show">Appointment Status</p>
      <div className="table-container">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-secondary text-center">
              <tr>
                <th>Sr No</th>
                <th>Patient Name</th>
                <th>Patient Email</th>
                <th>Appointment Date</th>
                <th>Department</th>
                <th>Doctor Name</th>
                <th>Description</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {AppointmentDetails.length > 0 ? (
                AppointmentDetails.map((appointment, index) => (
                  <tr key={appointment._id}>
                    <td>{index + 1}</td>
                    <td>{appointment.patientName}</td>
                    <td>{appointment.patientemail}</td>
                    <td>{appointment.appointmentDate}</td>
                    <td>{appointment.departmentId.department}</td>
                    <td>
                      {appointment.departmentId.doctors
                        .filter((doc) => doc._id === appointment.doctorId)
                        .map((doc) => doc.name)}
                    </td>
                    <td>
                      <Link className="delete" to="/" type="button">
                        <AiFillDelete className="delete-icon" />
                      </Link>
                    </td>
                    <td>
                      <Link className="edit" to="/" type="button">
                        <FaEdit className="edit-icon" />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No appointments found</td>
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

// try {
//   const response = await axios.get(
//     `https://backend-node-5tca.onrender.com/api/appointments/${departmentId}`, // Use route parameter
//     { withCredentials: true }
//   );

//   console.log("Appointments:---------------------", response.data);
//   const appointments = Array.isArray(response.data) ? response.data : [response.data];

//   SetAppointmentDetails(appointments);
//   localStorage.setItem("appointments", JSON.stringify(appointments))
// } catch (err) {
//   console.log("Error fetching departments:", err.message);
// }
// };
