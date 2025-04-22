import React, { useState, useEffect } from "react";
import DoctorNavbar from "../Components/DoctorNavbar";
import { IoVideocam } from "react-icons/io5";
import { doctorApi } from "../../Api-folder/Api";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useAppointment } from "../../context/AppointmentContext";

const PatientAppointments = () => {
  const [status, setStatus] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [meetingLink, setMeetingLink] = useState("");
  const [appoinmentdata, Setappoinmentdata] = useState([]);



const {  videoRoomId, SetvideoRoomId} = useAppointment();

  const navigate = useNavigate();
  // const doctorid = localStorage.getItem("doctorId");
  const allAppointment = async () => {
    try {
      const result = await doctorApi.allAppointment();
      console.log("Result from PatientAppointment:", result.data.appointments);
      if (result.data) {
        Setappoinmentdata(result.data.appointments);
      } else {
        console.log("No data found");
      }
    } catch (err) {
      console.log("Catch error this is cacth error :", err);
    }
  };

  useEffect(() => {
    allAppointment();
  }, []);

  const appointments = [
    {
      id: 1,
      name: "John Doe",
      type: "Online",
      date: "2025-04-10",
      time: "10:00 AM",
      description: "Follow-up consultation for test results",
      meetingLink: "https://meet.example.com/johndoe",
    },
    {
      id: 2,
      name: "Jane Smith",
      type: "Offline",
      date: "2025-04-11",
      time: "2:00 PM",
      description: "Initial in-person check-up",
    },
    {
      id: 3,
      name: "Robert Johnson",
      type: "Online",
      date: "2025-04-09",
      time: "9:30 AM",
      description: "Review of blood test reports",
    },
    {
      id: 4,
      name: "Emily Davis",
      type: "Offline",
      date: "2025-04-12",
      time: "11:00 AM",
      description: "Back pain assessment",
    },
    {
      id: 5,
      name: "Michael Brown",
      type: "Online",
      date: "2025-04-13",
      time: "3:00 PM",
      description: "Prescription follow-up",
    },
    {
      id: 6,
      name: "Sarah Wilson",
      type: "Offline",
      date: "2025-04-14",
      time: "1:00 PM",
      description: "General health check-up",
    },
    {
      id: 7,
      name: "David Martinez",
      type: "Online",
      date: "2025-04-10",
      time: "5:00 PM",
      description: "Discuss MRI scan results",
    },
    {
      id: 8,
      name: "Linda Taylor",
      type: "Offline",
      date: "2025-04-15",
      time: "10:45 AM",
      description: "Diabetes consultation",
    },
    {
      id: 9,
      name: "James Anderson",
      type: "Online",
      date: "2025-04-09",
      time: "4:15 PM",
      description: "Check-up after surgery",
    },
    {
      id: 10,
      name: "Patricia Thomas",
      type: "Offline",
      date: "2025-04-12",
      time: "9:00 AM",
      description: "Physical therapy session",
    },
    {
      id: 11,
      name: "Christopher Garcia",
      type: "Online",
      date: "2025-04-11",
      time: "6:00 PM",
      description: "Discuss allergy symptoms",
    },
  ];

  const filteredAppointments = appoinmentdata.filter((app) => {
    const matchStatus = status === "All" || app.type === status;
    const matchDate = selectedDate === "" || app.date === selectedDate;
    return matchStatus && matchDate;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAppointments = filteredAppointments.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);


  return (
    <div className="full-height-bg" style={{ paddingTop: "5em" }}>
      <DoctorNavbar />
      <h3>Patient Appointments (Online/Offline)</h3>
      <hr />

      <div className="row">
        <div className="d-flex flex-wrap items-center gap-3">
          <div className="status">
            <label className="me-2">Status:</label>
            <select
              className="border px-3 py-2 rounded"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
          <div className="byDate">
            <label className="me-2">By Date:</label>
            <input
              type="date"
              className="border px-3 py-2 rounded"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>

        <div className="container p-1">
          <table className="table table-bordered table-hover text-center">
            <thead className="table-header">
              <tr>
                <th>Sr</th>
                <th>Patient Name</th>
                <th>Mode</th>
                <th>Date</th>
                <th>Time</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentAppointments.length > 0 ? (
                currentAppointments.map((app, index) => (
                  <tr key={app._id}>
                    <td>{indexOfFirstItem + index + 1}</td>
                    <td>{app.patientName}</td>
                    <td>{app.mode}</td>
                    <td>{app.appointmentDate}</td>
                    <td>{app.patientemail}</td>
                    <td>{app.description}</td>
                    <td>
                      {app.mode === "online" ? (
                        <IoVideocam
                          size={25}
                          style={{ cursor: "pointer", color: "blue" }}
                          onClick={() => {
                            setMeetingLink(
                              app.videoCallLink || "No link available"
                            );
                            setIsModalOpen(true);
                          }}
                        />
                      ) : (
                        "N/A"
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No appointments found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {isModalOpen && (
          <div
            className="modal d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Video Meeting Link</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setIsModalOpen(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Click the link below to join the meeting:</p>
                  <a
                    href={meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {meetingLink}

                   
                  </a>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div>
          <div className="pagination-controls d-flex justify-content-center">
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
                className={`btn btn-sm me-1 ${
                  currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="btn btn-sm btn-outline-primary ms-2"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointments;