import React, { useEffect, useState } from "react";
import "../PagesStyles/AppointmentStatus.css";
// import { useAppointment } from "../context/AppointmentContext";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import apiService from "../Api-folder/Api";
import DashboardNav from "../Component/DashboardNav";
import { LuView } from "react-icons/lu";


function AppointmentStatus() {
  const [AppointmentDetails, SetAppointmentDetails] = useState([]);
  const [DeleteReason, SetDeleteReason] = useState("");
  const [DeleteAppointmentMessage, SetDeleteAppointmentMessage] = useState("");
  // const { departmentId , selectedDoctorId} = useAppointment();

  // console.log("Selected DepartmentId----:", departmentId);
  // console.log("Selected selectedDoctorId----:",selectedDoctorId);

  // Load appointments from localStorage on mount
  // useEffect(() => {
  //   const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
  //   SetAppointmentDetails(savedAppointments);
  // }, []);

  const fetchData = async () => {
    try {
      const response = await apiService.getAppointment();
      const newAppointments = Array.isArray(response.data)
        ? response.data
        : [response.data];

      console.log(
        "response-------------------------------------------yyyyyyyy--------Api",
        response.data
      );

      SetAppointmentDetails(response.data);

      console.log("appointment------------State", AppointmentDetails);
    } catch (err) {
      console.log("Error fetching appointments catch error :", err.message);
    }
  };
  // Fetch appointments when departmentId changes
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Updated AppointmentDetails:", AppointmentDetails);
  }, []);

  const DeleteAppointment = (deletAppointmentId) => {
    console.log("DeleteAppointmentId------", deletAppointmentId);
    if (deletAppointmentId) {
      apiService
        .deleteAppointment(deletAppointmentId)
        .then((response) => {
          console.log("DeleteAppointmentResponse", response);
          if (response.data) {
            SetDeleteAppointmentMessage(response.data.message);
            console.log("DeleteAppointmentMessage", DeleteAppointment);
          }
          fetchData();
        })
        .catch((err) => {
          console.log("DeleteAppointmentError", err.message);
        });
    }
  };



  useEffect(() => {
    if (DeleteAppointmentMessage) {
      const timer = setTimeout(() => {
        SetDeleteAppointmentMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [DeleteAppointmentMessage]);


  return (
    <div className="col-md-10 col-lg-12 mt-5 shadow px-3 py-3">
      <DashboardNav />
      <p className="page-show">Appointment Status</p>
      <hr />
      {DeleteAppointmentMessage && (
        <div className="alert alert-success" role="alert">
          {DeleteAppointmentMessage}
        </div>
      )}
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
                <th> Status</th>
                <th>View Appointment</th>
                <th>Cancel Appointment</th>
                <th>Update Appointment</th>
              </tr>
            </thead>
            <tbody>
              {AppointmentDetails.length > 0 ? (
                AppointmentDetails.map((appointment, index) => (
                  <tr key={appointment._id}>
                    <td>{index + 1}</td>
                    <td>{appointment.patientName}</td>
                    <td>{appointment.patientemail}</td>
                    <td>{appointment.doctor.name}</td>
                    <td>{appointment.department}</td>
                    <td>{new Date(appointment.appointmentDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                    })}</td>
                    <td>{appointment.appointmentStatus}</td>

                    <td>
                      <LuView className="view-icon" />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <AiFillDelete className="delete-icon" />
                      </button>

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <textarea
                                style={{ resize: "none" }}
                                id="description"
                                className="form-control"
                                rows="4"
                                placeholder="Enter description here..."
                                required
                                onChange={(e) => {
                                  SetDeleteReason(e.target.value),
                                    console.log(
                                      "DeleteReason----------------------",
                                      DeleteReason
                                    );
                                }}
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
                                className="btn btn-primary btn-sm "
                                data-bs-dismiss="modal"
                                onClick={() =>
                                  DeleteAppointment(appointment._id)
                                }
                              >
                                Submit Your Reason
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* 

                      <td onClick={() => console.log("Delete")}>
                        <Link className="delete" to="" type="button">
                          <AiFillDelete className="delete-icon" />
                        </Link>
                      </td> */}

                    <td>
                      <Link className="edit" to="/" type="button">
                        <FaEdit className="edit-icon" />
                      </Link>
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
      </div>
    </div>
  );
}

export default AppointmentStatus;