import React, { useEffect, useState } from "react";
import "../PagesStyles/Appointment.css";
import { useNavigate } from "react-router-dom";
import { useAppointment } from "../context/AppointmentContext";
import apiService from "../Api-folder/Api";
// import { Link } from "react-router-dom";

function UpdateDetails() {
  const [dropDownValue, setDropDownValue] = useState([]);

  const [availibility, setAvailibility] = useState("");

  const [message, Setmessage] = useState("");

  const {
    selectedDepartment,
    setSelectedDepartment,
    selectedDoctorId,
    setSelectedDoctorId,
    Settesting,
    departmentId,
    SetdepartmentId,
    Doctorname,
    Setdoctorname,
    updateid,
    updateAppointment,
    patientName,
    setPatientName,
    email,
    setEmail,
    date,
    setDate,
    description, setDescription
  } = useAppointment();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getDepartments();
        setDropDownValue(response.data);
      } catch (err) {
        console.error(
          "Error fetching Catch errrrorrrr--- departments:",
          err.message
        );
      }
    };
    console.log("updateid", updateid);
    console.log("SelectedDepartment--", selectedDepartment);
    fetchData();
  }, []);
  // Settesting("Testing Context api");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      department: selectedDepartment,
      doctorId: selectedDoctorId, // Sending doctorId instead of name
      availability: availibility,
      patientName,
      patientemail: email,
      appointmentDate: date,
      description,
      departmentId,
    };

    try {
      const response = await apiService.updateAppointment(formData, updateid);
      console.log("response from createAppointment:", response);
      Setmessage("appointment updated successfully");
    } catch (err) {
      console.error("Error creating appointment:", err.message);
    }
  };

  useEffect(() => {
    console.log("Doctorname in updatDetails-----------------", Doctorname);
    console.log("patientName in updatDetails-----------------", patientName);
  }, [Doctorname, patientName]);

  return (
    <div className="col-md-10 col-lg-12 dashboard-content">
      <nav className="navbar-expand-lg mb-5">
        <a className="brand">Update Appointment</a>
      </nav>
      {message ? (
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
      ) : null}
      <div>update </div>
      <div className="form-container mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Department Dropdown */}
          <div className="row g-3 mb-3">
            <div className="col-6 col-md-12">
              <label htmlFor="department" className="form-label">
                Department:
              </label>

              <select
                className="form-select"
                id="department"
                required
                value={selectedDepartment}
                onChange={(e) => {
                  const selectedDept = dropDownValue.find(
                    (dept) => dept.department === e.target.value
                  );
                  setSelectedDepartment(e.target.value);
                  if (selectedDept) {
                    SetdepartmentId(selectedDept._id); // Correctly setting departmentId
                    console.log("Selected Department ID:", selectedDept._id);
                    console.log(
                      "e.target.value.length> 0 ? e.target.value :updateAppointment.department------------------------",
                      updateAppointment.department
                    );
                  }
                }}
              >
                <option value="">Select Department</option>
                {dropDownValue.map((dept, ind) => (
                  <option key={ind} value={dept.department}>
                    {dept.department}
                  </option>
                ))}
              </select>
            </div>

            {/* Doctor Dropdown */}
            <div className="col-12 col-md-6">
              <label htmlFor="doctor" className="form-label">
                Doctor Name:
              </label>
              <select
                className="form-select"
                id="doctor"
                required
                value={Doctorname}
                onChange={(e) => {
                  const selectedDoctor = dropDownValue
                    .filter((dept) => dept.department === selectedDepartment)
                    .flatMap((dept) => dept.doctors)
                    .find((doctor) => doctor._id === e.target.value); // Find doctor by ID

                  setSelectedDoctorId(e.target.value); // Set doctor ID
                  Setdoctorname(selectedDoctor ? selectedDoctor.name : ""); // Set doctor name

                  console.log(
                    "Selected Doctor Name:",
                    selectedDoctor ? selectedDoctor.name : "Not found"
                  );
                }}
              >
                <option value="">Select Doctor</option>
                {dropDownValue
                  .filter((dept) => dept.department === selectedDepartment)
                  .flatMap((dept) => dept.doctors)
                  .map((doctor, ind) => (
                    <option key={ind} value={doctor._id}>
                      {doctor.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* Availability Dropdown */}
            <div className="col-12 col-md-6">
              <label htmlFor="availability" className="form-label">
                Availability:
              </label>
              <select
                className="form-select"
                id="availability"
                required
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

          {/* Patient Details */}
          <div className="row g-3 mb-3">
            <div className="col-12 col-md-6">
              <label htmlFor="patientName" className="form-label">
                Patient's Name:
              </label>
              <input
                type="text"
                id="patientName"
                className="form-control"
                placeholder="Enter Patient's Name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="patientEmail" className="form-label">
                Patient's Email:
              </label>
              <input
                type="email"
                id="patientEmail"
                className="form-control"
                placeholder="Enter Patient's Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
              />
            </div>
          </div>

          {/* Appointment Date and Description */}
          <div className="row g-3 mb-3">
            <div className="col-12 col-md-6">
              <label htmlFor="appointmentDate" className="form-label">
                Appointment Date:
              </label>
              <input
                type="date"
                id="appointmentDate"
                className="form-control"
                onChange={(e) => setDate(e.target.value)}
                required
                value={date}
              />
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <textarea
                style={{ resize: "none" }}
                id="description"
                className="form-control"
                rows="4"
                placeholder="Enter description here..."
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
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

export default UpdateDetails;
