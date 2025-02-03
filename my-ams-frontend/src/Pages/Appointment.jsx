import React, { useEffect ,useState} from "react";
import "../PagesStyles/Appointment.css";
import axios from 'axios';


function Appointment() {
    // const [doctorName,SetdoctorName] = useState('');
    // const [department,Setdepartment]= useState('');
    const [dropDownValue,SetdropDownValue]= useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:4000/api/doctor/Department", {
            withCredentials: true,
          });
    
            
            SetdropDownValue(response.data);

            console.log("DropDownvalues===========",dropDownValue)
            // SetdoctorName(doctorname)
          console.log("response---------------", response);
        } catch (err) {
          console.log("it is a catch error:", err.message);
        }
      };
    
      fetchData(); // Call the async function
    }, []);




    return (
                <div className=" col-md-10 col-lg-12 dashboard-content">
                    <nav className="navbar-expand-lg mb-5">
                        <a className="brand">Add Appointment</a>
                    </nav>
                    <div className="form-container mx-auto">
                        <form>
                            <div className="row g-3 mb-3">



                            <div className="col-6 col-md-12">
                                    <label htmlFor="department" className="form-label">Department:</label>
                                    <select className="form-select" id="department" required>
                                     {dropDownValue && dropDownValue.map((values,ind)=>(
                                         <option value="department" >{values.department}</option>

                                     ))}  
                                     
                                    </select>
                                </div>



                                <div className="col-12 col-md-6">
                                    <label htmlFor="department" className="form-label">Doctorname:</label>
                                    <select className="form-select" id="department" required>
                                     {dropDownValue && dropDownValue.map((values,ind)=>(
                                         <option value="department" >{values.name}</option>

                                     ))}  
                                     
                                    </select>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="dropDownValue" className="form-label">Availibility</label>
                                    <select className="form-select" id="department" required>
                                     {dropDownValue && dropDownValue.map((values,ind)=>(
                                         <option value="department" >{values.availability}</option>

                                     ))}  
                                     
                                    </select>
                                </div>
                            </div>

                            {/* Patient Name */}
                            <div className="row g-3 mb-3">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="inputName6" className="form-label">Patient's Name:</label>
                                    <input
                                        type="text"
                                        id="inputName6"
                                        className="form-control"
                                        placeholder="Enter Patient's Name"
                                        required
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="inputEmail6" className="form-label">Patient's Email:</label>
                                    <input
                                        type="email"
                                        id="inputEmail6"
                                        className="form-control"
                                        placeholder="Enter Patient's Email"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Appointment Date and Description */}
                            <div className="row g-3 mb-3">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="appointmentDate" className="form-label">Appointment Date:</label>
                                    <input
                                        type="date"
                                        id="appointmentDate"
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="descriptionInput" className="form-label">Description:</label>
                                    <textarea
                                        id="descriptionInput"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Enter description here..."
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="d-grid">
                                <button type="submit" className="btn btn-submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
    );
}

export default Appointment;







// // import React from 'react'
// import React, { useState } from "react";
// import axios from "axios";
// import "../PagesStyles/Appointment.css";
// function Appointment() {
//   const [patientName, SetpatientName] = useState("");
//   const [patientemail, Setpatientemail] = useState("");
//   const [doctorName, SetdoctorName] = useState("");
//   const [description, Setdescription] = useState("");
//   const [appointmentDate,SetappointmentDate]= useState("");
//   const [message, SetMessage] = useState("");

//   const UserAppointment = async (e) => {
//     e.preventDefault();
//     try {
//       await axios
//         .post(
//           "http://localhost:4000/api/appointments",
//           {
//              patientName,
//              patientemail,
//              doctorName,
//              description,
//              appointmentDate

//           },
//           { withCredentials: true }
//         )
//         .then((result) => {
//           console.log("result=====", result);
//           if(result && result.data){
//             const message = result.data.message;
//             SetMessage(message);
//             console.log("Appointment Message----",message)
//           }

//         });
//     } catch (err) {
//       console.log("this is catch error=============", err.message);
//     }
    
//   };

//   return (
//     <>
//       <div className="container2 py-5">

//       {message && (
//             <div
//               className={`alert ${
//                 message === "User created successfully"
//                   ? "alert-primary"
//                   : "alert-warning"
//               }`}
//               role="alert"
//             >
//               {message}
//             </div>
//           )}
        
//         <div className="row justify-content-center">
//           <div className="col-md-4 text-center mb-4">
//             <img
//               src="/src/assets/Doctor.png"
//               alt="Doctor"
//               className="img-fluid"
//               style={{ width: "400px", height: "400px" }}
//             />
//             <div className="mt-3">
//               <h5 className="fw-bold">Dr. Sadaf Hanif Awan</h5>
//               <p className="text-muted mb-1">General Practitioner</p>
//               <p className="text-muted">New AI Shifa Clinic · Al Wast Road</p>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="card shadow">
//               <div className="card-body">
//                 <h3 className="card-title text-center mb-4">
//                   Healthcare, without the headaches
//                 </h3>
//                 <div className="d-flex justify-content-between mb-4">
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="appointmentType"
//                       id="inChamber"
//                       //   value="In Doctor Chamber"
//                       //   onChange={handleChange}
//                     />
//                     <label className="form-check-label" htmlFor="inChamber">
//                       In Doctor Chamber
//                     </label>
//                   </div>
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="appointmentType"
//                       id="videoCall"
//                       //   value="In Video Call"
//                       //   onChange={handleChange}
//                     />
//                     <label className="form-check-label" htmlFor="videoCall">
//                       In Video Call
//                     </label>
//                   </div>
//                 </div>
//                 <form onSubmit={UserAppointment}>
//                   <div className="mb-3">
//                     <label htmlFor="patientName" className="form-label">
//                       Patient's Full Name
//                     </label>
//                     <input
//                       type="text"
//                       id="patientName"
//                       name="patientName"
//                       className="form-control"
//                       placeholder="Enter full name"
//                       // value={formData.patientName}
//                       onChange={(e) => SetpatientName(e.target.value)}
//                       // required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="patientemail" className="form-label">
//                       Patient's Email
//                     </label>
//                     <input
//                       type="text"
//                       id="patientemail"
//                       name="patientemail"
//                       className="form-control"
//                       placeholder="Enter Patient Email"
//                       //   value={formData.patientemail}
//                       onChange={(e) => Setpatientemail(e.target.value)}
//                       // required
//                     />
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6">
//                       <label htmlFor="doctorName" className="form-label">
//                         Doctor Name
//                       </label>
//                       <input
//                         type="text"
//                         id="doctorName"
//                         name="doctorName"
//                         className="form-control"
//                         placeholder="Enter doctor's name"
//                         // value={formData.doctorName}
//                         onChange={(e) => SetdoctorName(e.target.value)}
//                         // required
//                       />
//                     </div>
//                     <div className="col-md-6">
//                       <label htmlFor="appointmentDate" className="form-label">
//                         Appointment Date
//                       </label>
//                       <input
//                         type="date"
//                         id="appointmentDate"
//                         name="appointmentDate"
//                         className="form-control"
//                         // value={formData.appointmentDate}
//                          onChange={(e) => SetappointmentDate(e.target.value)}
//                         // required
//                       />
//                     </div>
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="description" className="form-label">
//                       Description
//                     </label>
//                     <textarea
//                       className="form-control"
//                       id="description"
//                       name="description"
//                       rows="3"
//                       placeholder="Describe your symptoms"
//                       //   value={formData.description}
//                       onChange={(e) => Setdescription(e.target.value)}

//                       // required
//                     ></textarea>
//                   </div>
//                   <div className="text-center">
//                     <button type="submit" className="btn1 btn1-success w-100">
//                       Get Your Appointment
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Appointment;
