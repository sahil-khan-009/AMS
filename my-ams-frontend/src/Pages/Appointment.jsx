import React, { useEffect, useState } from "react";
import "../PagesStyles/Appointment.css";
import { useAppointment } from "../context/AppointmentContext";
import { apiService } from "../Api-folder/Api";
import DashboardNav from "../Component/DashboardNav";

function Appointment() {
  const [dropDownValue, setDropDownValue] = useState([]);
  const [availibility, setAvailibility] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [message, Setmessage] = useState("");

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

  return (
    <div
      className="col-md-10 col-lg-12 px-3 py-3 dashboard-content shadow"
      style={{ marginTop: "4rem" }}
    >
      <DashboardNav />
      <p className="page-show">Make Appointment</p>
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
      <div className="form-container mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="row g-3 mb-3">
            <div className="col-6 col-md-12">
              <label htmlFor="department" className="form-label">
                Department:
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
              <label htmlFor="doctor" className="form-label">
                Doctor Name:
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
                Availability:
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
                Patient's Name:
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
                Patient's Email:
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
              />
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">
                Description:
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

// import React, { useEffect, useState } from "react";
// import "../PagesStyles/Appointment.css";
// import axios from "axios";

// function Appointment() {
//   const [dropDownValue, SetdropDownValue] = useState([]);
//   const [selectedDepartment, setSelectedDepartment] = useState("");
//   const [selectedAvailibilit, setselectedAvailibilit] = useState("");
//   const [availibility,setAvailibility]=useState("");
//   const [patientName, SetPatientName] = useState("");
//   const [email, Setemail] = useState("");
//   const [date,Setdate] = useState("");
//   const [description,Setdescryption] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4000/api/doctor/Department",
//           {
//             withCredentials: true,
//           }
//         );

//         SetdropDownValue(response);

//         console.log("DropDownvalues===========", dropDownValue);
//         // SetdoctorName(doctorname)
//         console.log("response---------------", response);
//       } catch (err) {
//         console.log("it is a catch error:", err.message);
//       }
//     };

//     fetchData(); // Call the async function
//   }, []);

//   const handleSubmit = async (e)=>{
//     e.preventDefault();
//     const fromData = {
//             department :selectedDepartment,
//             doctorName: selectedAvailibilit,
//             availability:availibility,
//             patientName:patientName,
//             patientemail:email,
//             appointmentDate:date,
//             description:description
//   };

//   try{
//     const response = await axios.post("")

//   }catch(err){

//   }
// }

//   return (
//     <div className=" col-md-10 col-lg-12 dashboard-content">
//       <nav className="navbar-expand-lg mb-5">
//         <a className="brand">Add Appointment</a>
//       </nav>
//       <div className="form-container mx-auto">
//         <form onSubmit={handleSubmit}>
//           <div className="row g-3 mb-3">
//             <div className="col-6 col-md-12">
//               <label htmlFor="department" className="form-label">
//                 Department:
//               </label>
//               <select
//                 className="form-select"
//                 id="department"
//                 required
//                 onChange={(e) => setSelectedDepartment(e.target.value)}
//               >
//                 <option value="">Select Department</option>
//                 {dropDownValue.data &&
//                   dropDownValue.data.map((values, ind) => (
//                     <option key={ind} value={values.department}>
//                       {values.department}
//                     </option>
//                   ))}
//               </select>
//             </div>

//             <div className="col-12 col-md-6">
//               <label htmlFor="doctor" className="form-label">
//                 Doctor Name:
//               </label>
//               <select
//                 className="form-select"
//                 id="doctor"
//                 required
//                 onChange={(e) => setselectedAvailibilit(e.target.value)}
//               >
//                 <option value="">Select Doctor</option>
//                 {dropDownValue.data &&
//                   dropDownValue.data
//                     .filter(
//                       (values) => values.department === selectedDepartment
//                     ) // Filter doctors based on department
//                     .flatMap((values) => values.doctors) // Extract doctors array
//                     .map((val, ind) => (
//                       <option key={ind} value={val.name}>
//                         {val.name}
//                       </option>
//                     ))}
//               </select>
//             </div>

//             <div className="col-12 col-md-6">
//               <label htmlFor="dropDownValue" className="form-label">
//                 Availibility
//               </label>
//               <select className="form-select" id="department" onChange={(e)=> setAvailibility(e.target.value) } required>
//                 {dropDownValue.data &&
//                   dropDownValue.data
//                     .flatMap((dept) => dept.doctors) // Extract all doctors
//                     .filter((doc) => doc.name === selectedAvailibilit) // Find selected doctor
//                     .flatMap((doc) => doc.availability) // Extract availability
//                     .map((day, ind) => (
//                       <option key={ind} value={day}>
//                         {day}
//                       </option>
//                     ))}
//               </select>
//             </div>
//           </div>

//           {/* Patient Name */}
//           <div className="row g-3 mb-3">
//             <div className="col-12 col-md-6">
//               <label htmlFor="inputName6" className="form-label">
//                 Patient's Name:
//               </label>
//               <input
//                 type="text"
//                 id="inputName6"
//                 className="form-control"
//                 placeholder="Enter Patient's Name"
//                 onChange={(e)=> SetPatientName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="col-12 col-md-6">
//               <label htmlFor="inputEmail6" className="form-label">
//                 Patient's Email:
//               </label>
//               <input
//                 type="email"
//                 id="inputEmail6"
//                 className="form-control"
//                 placeholder="Enter Patient's Email"
//                 onChange={(e)=> Setemail(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {/* Appointment Date and Description */}
//           <div className="row g-3 mb-3">
//             <div className="col-12 col-md-6">
//               <label htmlFor="appointmentDate" className="form-label">
//                 Appointment Date:
//               </label>
//               <input
//                 type="date"
//                 id="appointmentDate"
//                 className="form-control"
//                 onChange={(e)=>Setdate(e.target.value) }
//                 required
//               />
//             </div>
//             <div className="col-12">
//               <label htmlFor="descriptionInput" className="form-label">
//                 Description:
//               </label>
//               <textarea
//                 id="descriptionInput"
//                 className="form-control"
//                 rows="4"
//                 placeholder="Enter description here..."
//                 required
//                 onChange={(e)=> Setdescryption(e.target.value)}  ></textarea>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="d-grid">
//             <button type="submit"  className="btn btn-submit btn-primary">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Appointment;

// = await axios.get(
//   "https://backend-node-5tca.onrender.com/api/doctor/Department",
//   { withCredentials: true }
// );
// setDropDownValue(response.data); // Store only the data part
// } catch (err) {
// console.log("Error fetching departments:", err.message);
// }
// };

// fetchData();
// }, []);
