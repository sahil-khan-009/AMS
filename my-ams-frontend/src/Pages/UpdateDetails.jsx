import React, { useEffect, useState } from "react";
import "../PagesStyles/Appointment.css";
import { useNavigate } from "react-router-dom";
import { useAppointment } from "../context/AppointmentContext";
import {apiService} from "../Api-folder/Api";
import DashboardNav from "../Component/DashboardNav";

function UpdateDetails() {
  const [dropDownValue, setDropDownValue] = useState([]);
  const [availibility, setAvailibility] = useState("");
  const [message, Setmessage] = useState("");

  const {
    GlobalStateForUpdateFrom,
    SetGlobalStateForUpdateFrom,
    updateid,
  } = useAppointment();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getDepartments();
        console.log("response.data-------",response.data)
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
      // department: GlobalStateForUpdateFrom.department,
      doctorId: GlobalStateForUpdateFrom.selectedDoctorId,
      availability: availibility,
      patientName: GlobalStateForUpdateFrom.patientName,
      patientemail: GlobalStateForUpdateFrom.patientemail,
      appointmentDate: GlobalStateForUpdateFrom.appointmentDate,
      description: GlobalStateForUpdateFrom.description,
      departmentId: GlobalStateForUpdateFrom.departmentId,
    };


    console.log("formData>>>>>>>>>>>>>>>>>>>>>>>>>",formData)
    try {
      const response = await apiService.updateAppointment(formData, updateid);
      console.log("Response:", response);
      Setmessage("Appointment updated successfully");
    } catch (err) {
      console.error("Error updating appointment:", err.message);
    }
  };

  const handleInputChange = (e) => {
    SetGlobalStateForUpdateFrom({
      ...GlobalStateForUpdateFrom,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="col-md-10 col-lg-12 px-3 py-3 dashboard-content shadow"
      style={{ marginTop: "4rem" }}
    >
      <DashboardNav />
      <p className="page-show">Update Details</p>
      <hr />
      {message && (
        <div className="alert alert-warning alert-dismissible fade show">
          <strong>{message}</strong> You can check your details now
          <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
        </div>
      )}
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
                name="department"
                required
                value={GlobalStateForUpdateFrom.department || ""}
                onChange={(e) => {
                  const selectedDept = dropDownValue.find(
                    (dept) => dept.name === e.target.value
                  );
                  console.log("Selected department:", selectedDept); // Debugging
                  SetGlobalStateForUpdateFrom({
                    ...GlobalStateForUpdateFrom,
                    department: e.target.value,
                    departmentId: selectedDept ? selectedDept._id : "", // Ensure it's assigned correctly
                  });
                }}
                
              >
                <option value="">Select Department</option>
                {dropDownValue.map((dept, ind) => (
                  <option key={ind} value={dept.name}>
                    {dept.name}
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
                name="selectedDoctorId"
                required
                value={GlobalStateForUpdateFrom.selectedDoctorId || ""}
                onChange={(e) => {
                  const selectedDoctor = dropDownValue
                    .find((dept) => dept.name === GlobalStateForUpdateFrom.department)
                    ?.doctors.find((doctor) => doctor._id === e.target.value);

                  SetGlobalStateForUpdateFrom({
                    ...GlobalStateForUpdateFrom,
                    selectedDoctorId: e.target.value,
                    doctorName: selectedDoctor?.name || "",
                  });
                }}
              >
                <option value="">Select Doctor</option>
                {dropDownValue
                  .find((dept) => dept.name === GlobalStateForUpdateFrom.department)
                  ?.doctors.map((doctor, ind) => (
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
                name="availability"
                required
                value={availibility || ""}
                onChange={(e) => setAvailibility(e.target.value)}
              >
                        <option value="">Select Availability</option>
                {dropDownValue
                  .find((dept) => dept.name === GlobalStateForUpdateFrom.department)
                  ?.doctors.find((doctor) => doctor._id === GlobalStateForUpdateFrom.selectedDoctorId)
                  ?.availability.map((day, ind) => (
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
                name="patientName"
                className="form-control"
                placeholder="Enter Patient's Name"
                value={GlobalStateForUpdateFrom.patientName || ""}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="patientemail" className="form-label">
                Patient's Email:
              </label>
              <input
                type="email"
                id="patientemail"
                name="patientemail"
                className="form-control"
                placeholder="Enter Patient's Email"
                value={GlobalStateForUpdateFrom.patientemail || ""}
                onChange={handleInputChange}
                required
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
                name="appointmentDate"
                className="form-control"
                value={GlobalStateForUpdateFrom.appointmentDate?.split("T")[0] || ""}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                rows="4"
                placeholder="Enter description..."
                value={GlobalStateForUpdateFrom.description || ""}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary w-50">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateDetails;
