import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { LuView } from "react-icons/lu";
import apiService from "../Api-folder/Api";
import DashboardNav from "../Component/DashboardNav";
import logo from "../assets/logo2.png";
import "../PagesStyles/AppointmentStatus.css";

function AppointmentStatus() {
  const [appointments, setAppointments] = useState([]);
  const [deleteReason, setDeleteReason] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await apiService.getAppointment();
      setAppointments(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (err) {
      console.error("Error fetching appointments:", err.message);
    }
  };

  const handleDeleteAppointment = (appointmentId) => {
    if (appointmentId) {
      apiService.deleteAppointment(appointmentId)
        .then((response) => {
          if (response.data) {
            setDeleteMessage(response.data.message);
          }
          fetchAppointments();
        })
        .catch((err) => console.error("Delete error:", err.message));
    }
  };

  useEffect(() => {
    if (deleteMessage) {
      const timer = setTimeout(() => setDeleteMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [deleteMessage]);

  return (
    <div className="col-md-10 col-lg-12 mt-5 shadow px-3 py-3">
      <DashboardNav />
      <p className="page-show">Appointment Status</p>
      <hr />

      {deleteMessage && <div className="alert alert-success">{deleteMessage}</div>}

      <div className="table-container">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-secondary text-center">
              <tr>
                <th>Sr No</th>
                <th>Patient Name</th>
                <th>Patient Email</th>
                <th>Doctor Name</th>
                <th>Department</th>
                <th>Appointment Date</th>
                <th>Status</th>
                <th>View</th>
                <th>Cancel</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment, index) => (
                  <tr key={appointment._id}>
                    <td>{index + 1}</td>
                    <td>{appointment.patientName}</td>
                    <td>{appointment.patientemail}</td>
                    <td>{appointment.doctor.name}</td>
                    <td>{appointment.department}</td>
                    <td>
                      {new Date(appointment.appointmentDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </td>
                    <td>{appointment.appointmentStatus}</td>

                    {/* View Appointment */}
                    <td>
                      <button
                        className="btn  btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#viewAppointmentModal"
                        onClick={() => setSelectedAppointment(appointment)}
                      >
                        <LuView className="view-icon" />
                      </button>
                    </td>

                    {/* Delete Appointment */}
                    <td>
                      <button
                        type="button"
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                      >
                        <AiFillDelete className="delete-icon" />
                      </button>
                    </td>

                    {/* Edit Appointment */}
                    <td>
                      <Link className="edit" to="/UserDashboard/UpdateDetails">
                        <FaEdit className="edit-icon" />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10">No appointments found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Appointment Modal */}
      <div
        className="modal fade"
        id="viewAppointmentModal"
        tabIndex="-1"
        aria-labelledby="viewAppointmentModalLabel"
        aria-hidden="true"
      >
        <div className="bg-container">
        <div className="modal-dialog modal-lg">
        <div className="modal-header d-flex justify-content-center">
              <h5 className="modal-title bg-dark p-2 text-white">Appointment Slip</h5>
            </div>
          <div className="modal-content">
            <div className="modal-body">
            <div className="modal-header d-flex justify-content-center">
            <img src={logo} alt="Logo" className="logo" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
              {selectedAppointment ? (
                <div className="appointment-details">
                  <div className="detail-item">
                    <strong>Patient Name:</strong> <span>{selectedAppointment.patientName}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Patient Email:</strong> <span>{selectedAppointment.patientemail}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Doctor:</strong> <span>{selectedAppointment.doctor.name}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Department:</strong> <span>{selectedAppointment.department}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Appointment Date:</strong>
                    <span>
                      {new Date(selectedAppointment.appointmentDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Delete Appointment Modal */}
      <div className="modal fade" id="deleteModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cancel Appointment</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter cancellation reason..."
                required
                onChange={(e) => setDeleteReason(e.target.value)}
              ></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-dismiss="modal"
                onClick={() => handleDeleteAppointment(selectedAppointment?._id)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentStatus;
