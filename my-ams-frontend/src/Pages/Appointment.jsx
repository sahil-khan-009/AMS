import React, { useEffect, useState } from "react";
import "../PagesStyles/Appointment.css";
import { useAppointment } from "../context/AppointmentContext";
import { apiService ,adminApi} from "../Api-folder/Api";
import DashboardNav from "../Component/DashboardNav";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";


function Appointment() {
  const [dropDownValue, setDropDownValue] = useState([]);
  const [availibility, setAvailibility] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [message, Setmessage] = useState("");
  const [departmentPay, SetdepartmentPay] = useState({
    name: "react for fb",
    price: 10,
    product: " HOSPITAL",
  }); // New state for department

  
  const {
    selectedDepartment,
    setSelectedDepartment,
    selectedDoctorId,
    setSelectedDoctorId,
    departmentId,
    SetdepartmentId,
    setPatientName,
    patientName,
  } = useAppointment();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getDepartments();
        console.log("response -----", response.data);
        setDropDownValue(response.data);
      } catch (err) {
        console.error("Error fetching departments:", err.message);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      // department: selectedDepartment,
      doctorId: selectedDoctorId,
      availability: availibility,
      patientName,
      patientemail: email,
      appointmentDate: date,
      description,
      departmentId,
    };
    try {
      const response = await apiService.createAppointment(formData);
      console.log("response------", response.data);
      Setmessage(response.data.message);
    } catch (err) {
      console.error("Error creating appointment:", err.message);
    }
  };

  //<------- Clearing message after 3 second ----------->
  useEffect(() => {
    const timer = setTimeout(() => {
      Setmessage("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [message]);


  // Payment=======================
  
  

  return (
    <div className="full-height-bg" style={{ paddingTop: "5em" }}>
      <DashboardNav />
      <h3>Make Appointment</h3>
      

      <hr />
      {message && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>{message}</strong> You can check your details now
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <div className="form-container mx-auto p-2">
        <form onSubmit={handleSubmit}>
          <div className="row g-3 mb-3">
            <div className="col-12 col-md-6">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <select
                id="department"
                className="form-select"
                value={selectedDepartment}
                onChange={(e) => {
                  const selectedDept = dropDownValue.find(
                    (dept) => dept.name === e.target.value
                  );
                  setSelectedDepartment(e.target.value);
                  SetdepartmentId(selectedDept ? selectedDept._id : "");
                  console.log("departmentId===============", departmentId);
                }}
              >
                <option value="">Select Department</option>
                {dropDownValue.map((value) => (
                  <option key={value._id} value={value.name}>
                    {value.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="appointmentDate" className="form-label">
                Appointment Date
              </label>
              <input
                type="date"
                id="appointmentDate"
                className="form-control"
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="doctor" className="form-label">
                Doctor Name
              </label>
              <select
                id="doctor"
                className="form-select"
                value={selectedDoctorId}
                onChange={(e) => {
                  setSelectedDoctorId(e.target.value),
                    console.log("selectedDoctorId----", selectedDoctorId);
                }}
              >
                <option value="">Select Doctor</option>
                {dropDownValue
                  .find((dept) => dept.name === selectedDepartment)
                  ?.doctors?.map((doctor) => (
                    <option key={doctor._id} value={doctor._id}>
                      {doctor.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="availability" className="form-label">
                Availability
              </label>
              <select
                id="availability"
                className="form-select"
                onChange={(e) => setAvailibility(e.target.value)}
              >
                <option value="">Select Availability</option>
                {dropDownValue
                  .flatMap((dept) => dept.doctors)
                  .filter((doctor) => doctor._id === selectedDoctorId)
                  .flatMap((doctor) => doctor.availability)
                  .map((day, ind) => (
                    <option key={ind} value={day}>
                      {day}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-12 col-md-6">
              <label htmlFor="patientName" className="form-label">
                Patient's Name
              </label>
              <input
                type="text"
                id="patientName"
                className="form-control"
                placeholder="Enter Patient's Name"
                onChange={(e) => setPatientName(e.target.value)}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="patientEmail" className="form-label">
                Patient's Email
              </label>
              <input
                type="email"
                id="patientEmail"
                className="form-control"
                placeholder="Enter Patient's Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-12">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                className="form-control "
                rows="4"
                placeholder="Enter description here..."
                onChange={(e) => setDescription(e.target.value)}
                required
                style={{ resize: "none" }}
              ></textarea>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-submit btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Appointment;