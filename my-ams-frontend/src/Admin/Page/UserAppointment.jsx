import React, { useEffect, useState } from "react";
import Adminnav from "../Component/Adminnav";
import { FaCheck, FaFilter } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LuView } from "react-icons/lu";
import "../PageStyle/UserAppointment.css";
import { adminApi } from "../../Api-folder/Api";

const UserAppointment = () => {
  const [appointment, Setappointment] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState(""); // New state for date filter
  const [currentPage, setCurrentPage] = useState(1);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedAppointment, SetSelectedAppointment] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");

  const appointmentsPerPage = 10;

  // Getting all appointment

  const fetchAppointment = async () => {
    try {
      const response = await adminApi.totalAppointment();
      console.log("this is total appointment response------ ", response.data);
      Setappointment(response.data);
    } catch (err) {
      console.log("this is catch error", err.message);
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, search, selectedDate]);

  const filteredAppointments = appointment.filter((appt) => {
    const matchesSearch =
      search === "" ||
      appt.patientName.toLowerCase().includes(search.toLowerCase()) ||
      appt.doctorName.toLowerCase().includes(search.toLowerCase()) ||
      appt.department.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || appt.appointmentStatus === filter;

    const matchesDate =
      selectedDate === "" || appt.appointmentDate === selectedDate; // Date filtering

    return matchesSearch && matchesFilter && matchesDate;
  });

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = filteredAppointments.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment
  );
  const totalPages = Math.ceil(
    filteredAppointments.length / appointmentsPerPage
  );

  // Bussiness logic of apporoved appointment

  const approvedAppointments = async (id, status, mode,slot) => {
    try {
      const response = await adminApi.approvedAppointment(id, status, mode,slot);
      console.log("Appointment Status Updated:", response.data);
      if (response.data.message) {
        window.location.reload();
      }
    } catch (err) {
      console.error("Error updating appointment status:", err.message);
    }
  };

  // bussiness logic of cancel appointment
  const cancelledAppointment = async (id, status) => {
    try {
      const response = await adminApi.cancelAppointment(id, status);
      console.log("Appointment status updated : ", response.data);
      if (response.data.message) {
        window.location.reload();
      }
    } catch (err) {
      console.error("error updating appointment status", err.message);
    }
  };

  // Time Slots logic

  useEffect(() => {
    const generateTimeSlots = () => {
      if (!appointment || appointment.length === 0) return;

      const startStr = selectedAppointment.doctorStartTime; // "11:00 PM" or "14:00"
      const endStr = selectedAppointment.doctorEndTime; // "2:00 AM" or "18:00"

      // Convert both times to Date objects
      const today = new Date().toDateString(); // just to attach date

      const parseTime = (timeStr) => {
        const date = new Date(`${today} ${timeStr}`);
        return isNaN(date.getTime())
          ? new Date(`${today} ${convertTo24Hour(timeStr)}`) // fallback
          : date;
      };

      const convertTo24Hour = (time) => {
        // fallback for edge cases like "2:00", convert manually
        const [hours, minutes] = time.split(":").map(Number);
        const date = new Date();
        date.setHours(hours, minutes || 0, 0, 0);
        return date.toTimeString().slice(0, 5);
      };

      const startDate = parseTime(startStr);
      const endDate = parseTime(endStr);

      // Handle overnight shifts (like 11 PM to 2 AM)
      if (endDate <= startDate) endDate.setDate(endDate.getDate() + 1);

      let current = new Date(startDate);
      const slots = [];

      while (current < endDate) {
        const next = new Date(current.getTime() + 15 * 60000);

        const formatTime = (date) =>
          date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });

        slots.push(`${formatTime(current)} - ${formatTime(next)}`);
        current = next;
      }

      setTimeSlots(slots);
    };

    generateTimeSlots();
  }, [selectedAppointment]);


  useEffect(() => {
    console.log("Updated selectedAppointment:", selectedAppointment);
  }, [selectedAppointment]);
  

  return (
    <div className="full-height-bg" style={{ paddingTop: "5em" }}>
      <Adminnav />
      <h4>Appointments</h4>
      <hr />

      <div className="d-flex flex-wrap items-center gap-3">
        <div className="status">
          <label className="me-2">Status:</label>
          <select
            className="border px-3 py-2 rounded"
            value={filter}
            onChange={(e) => {
              if (e.target.value === "All") {
                setSearch("");
                setSelectedDate("");
              }
              setFilter(e.target.value);
            }}
          >
            <option value="All">All</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
        >
        Test
        </button>

        <div className="byDate">
          <label className="me-2">By Date:</label>
          <input
            type="date"
            className=" byDate border px-3 py-2 rounded"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <div className="bySearch">
          <label className="me-2">By Search:</label>
          <input
            type="text"
            placeholder="Search by Name, Doctor, or Department..."
            className="bySearch border px-3 py-2 rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="table-responsive mt-2">
        <table className="table table-bordered text-center">
          <thead className="thead">
            <tr>
              <th scope="col">Sr. No</th>
              <th scope="col">Patient Name </th>
              <th scope="col">Patient Email</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Department</th>
              <th scope="col">Appointment Date</th>
              <th scope="col">Status</th>
              <th>Mode</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentAppointments.map((appt, index) => (
              <tr key={appt._id}>
                <td>{indexOfFirstAppointment + index + 1}</td>
                <td>{appt.patientName}</td>
                <td>{appt.patientemail}</td>
                <td>{appt.doctorName}</td>
                <td>{appt.department}</td>

                <td>
                  {" "}
                  {new Date(appt.appointmentDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
                <td
                  className={`${
                    appt.appointmentStatus === "pending"
                      ? "text-warning"
                      : "text-success"
                  }`}
                >
                  {appt.appointmentStatus}
                </td>
                <td>{appt.mode}</td>
                <td>
                  {appt.appointmentStatus === "pending" ? (
                    <div>
                      <i
                        type="button"
                        className=" me-3 text-success btn "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                        onClick={() => {
                          SetSelectedAppointment(appt);
                          // console.log("this is selected ----SetSelectedAppointment", selectedAppointment)
                        }
                      }

                        // onClick={() =>
                        // approvedAppointments(appt._id, "confirm", appt.mode)
                        // }
                      >
                        <FaCheck size={20} /> {/*this is tick ✅ */}
                      </i>
                      <i
                        className="text-danger "
                        type="button"
                        onClick={() => cancelledAppointment(appt._id, "cancel")}
                      >
                        <ImCancelCircle size={20} /> {/* this is ❎ */}
                      </i>
                    </div>
                  ) : (
                    <i className="text-dark" type="button">
                      <LuView size={20} />
                    </i>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-secondary px-2 py-1 rounded-circle"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack className="text-white" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`btn px-3 py-2 rounded-circle ${
                currentPage === i + 1 ? "btn-primary" : "btn-secondary"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="btn btn-secondary px-2 py-1 rounded-circle"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <IoIosArrowForward className="text-white" />
          </button>
        </div>
      </div>

      {/* Time slot modal */}

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Select Slot for individual appointment
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close" 
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <select className="form-select"
               onChange={(e) => setSelectedSlot(e.target.value)}
              >
                <option value="">-- Select a time slot --</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() =>
                  approvedAppointments(
                    selectedAppointment._id,
                    "confirm",
                    selectedAppointment.mode,
                    selectedSlot

                  )
                }
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAppointment;

// console.log("status-------",status);
// console.log("id------",id);
// const Id = id;
// const confirm = status;
