import React, { useState } from 'react';
import {doctorApi } from '../Api-folder/Api';
import { useNavigate } from 'react-router-dom';
import { useAppointment } from '../context/AppointmentContext';


function Doctorlogin() {
  const [formData, setFormData] = useState({
    email: '',
    uniqueId: ''
  });


 const { 
  
  specificDoctorID, setspecificDoctorID
  
  } = useAppointment();

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    // console.log('Submitted onClick Data:', formData);

    try{
  const response = await doctorApi.doctorLogin(formData);
  console.log("This is result ----- ",response.data);

  if (response.data.message) {

    sessionStorage.setItem("token", response.data.token); // ✅ fixed this line
    // localStorage.setItem("doctorId", response.data.doctor.uniqueId); // ✅ fixed this line
    navigate('/DoctorDashboard');
  } else {
    console.log('Login failed');
  }
  
}catch(err){
  console.log('this is catch err',err)
}
    

  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Doctor Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="uniqueId" className="form-label">Enter ID</label>
            <input 
              type="text" 
              className="form-control" 
              id="uniqueId"
              name="uniqueId"
              value={formData.uniqueId}
              onChange={handleChange}
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Doctorlogin;
