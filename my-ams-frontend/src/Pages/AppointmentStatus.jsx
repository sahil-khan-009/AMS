import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { LuView } from "react-icons/lu";
import { apiService } from "../Api-folder/Api";
import DashboardNav from "../Component/DashboardNav";
import logo from "../assets/logo2.png";
import "../PagesStyles/AppointmentStatus.css";
import UpdateDetails from "./UpdateDetails";
import { useAppointment } from "../context/AppointmentContext";

function AppointmentStatus() {
  const {
    GlobalStateForUpdateFrom,
    SetGlobalStateForUpdateFrom,
    appointments,
    setAppointments,
    setupdateId
  } = useAppointment();

  const [deleteReason, setDeleteReason] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const navigate = useNavigate();

  const fetchAppointments = async () => {
    try {
      const response = await apiService.getAppointment();
      console.log("response-------------------", response.data);
      setAppointments(
        Array.isArray(response.data) ? response.data : [response.data]
      );
    } catch (err) {
      console.error("Error fetching appointments:", err.message);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDeleteAppointment = (appointmentId) => {
    console.log("appointmentId====00000=====", appointmentId);
    if (appointmentId) {
      apiService
        .deleteAppointment(appointmentId)
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

  const UpdateDetails = (appointment) => {
    if (!appointment || !appointment._id) {
      console.error("Invalid appointment data:", appointment);
      return;
    }

    console.log("Setting state with appointment:", appointment);
    SetGlobalStateForUpdateFrom(appointment);
    setupdateId(appointment._id);
    navigate("/UserDashboard/UpdateDetails");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // You can change this to any number


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAppointments = appointments.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(appointments.length / itemsPerPage);



  return (
    <div className="full-height-bg" style={{ paddingTop: '5em' }}>
      <DashboardNav />
      <h3>Appointment Status</h3>
      <hr />

      {deleteMessage && (
        <div className="alert alert-success">{deleteMessage}</div>
      )}

      <div className="table-container py-2 m-0">
        <div className="table-responsive p-0 m-0">
          <table className="table table-bordered m-0 p-0">
            <thead className="table-header text-center">
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
              {currentAppointments.length > 0 ? (
                currentAppointments.map((appointment, index) => (
                  <tr key={appointment._id}>
                    <td className="py-2">{indexOfFirstItem + index + 1}</td>
                    <td >{appointment.patientName}</td>
                    <td >{appointment.patientemail}</td>
                    <td >{appointment.doctorName}</td>
                    <td >{appointment.department}</td>
                    <td >
                      {new Date(appointment.appointmentDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }
                      )}
                    </td>
                    <td >{appointment.appointmentStatus}</td>

                    {/* View Appointment */}
                    <td>
                      <button
                        className="btn btn-sm p-0 m-0"
                        data-bs-toggle="modal"
                        data-bs-target="#viewAppointmentModal"
                        onClick={() => setSelectedAppointment(appointment)} // Set appointment here
                      >
                        <LuView className="view-icon" />
                      </button>
                    </td>


                    {/* Delete Appointment */}
                    <td >
                      <button
                        type="button"
                        className="btn p-0 m-0"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                        onClick={() => {
                          setSelectedAppointment(appointment),
                            console.log("selectedAppointment---", selectedAppointment);
                        }}
                      >
                        <AiFillDelete className="delete-icon" />
                      </button>
                    </td>

                    {/* Edit Appointment */}
                    <td className="p-0 m-0">
                      <Link
                        className="edit"
                        to="/userDashboard/UpdateDetails"
                        onClick={(e) => {
                          e.preventDefault();
                          if (appointment?._id) {
                            UpdateDetails(appointment);
                          } else {
                            console.error("Appointment data is missing!");
                          }
                        }}
                      >
                        <FaEdit className="edit-icon" />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="text-center p-0 m-0">
                    No appointments found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="pagination-controls d-flex justify-content-center mt-3">
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`btn btn-sm me-1 ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="btn btn-sm btn-outline-primary ms-2"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
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
              <h5 className="modal-title bg-dark p-2 text-white">
                Appointment Slip
              </h5>
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

                {/* Conditional rendering */}
                {selectedAppointment ? (
                  <div className="appointment-details">
                    <div className="detail-item">
                      <strong>Patient Name:</strong> {selectedAppointment.patientName}
                    </div>
                    <div className="detail-item">
                      <strong>Patient Email:</strong> {selectedAppointment.patientemail}
                    </div>
                    <div className="detail-item">
                      <strong>Doctor:</strong> {selectedAppointment.doctorName}
                    </div>
                    <div className="detail-item">
                      <strong>Department:</strong> {selectedAppointment.department}
                    </div>
                    <div className="detail-item">
                      <strong>Appointment Date:</strong>
                      {new Date(selectedAppointment.appointmentDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }
                      )}
                    </div>
                  </div>
                ) : (
                  <p>Loading appointment details...</p>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Delete Appointment Modal */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModallabel"
        aria-hidden="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cancel Appointment</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
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
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-dismiss="modal"
                onClick={() =>
                  handleDeleteAppointment(selectedAppointment?._id)
                }
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