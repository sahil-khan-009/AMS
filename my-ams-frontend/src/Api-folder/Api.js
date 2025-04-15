import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-node-5tca.onrender.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// <--------------------------------------Local base url--------------------------------->


const localApi = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});


// Request interceptor To add the token to the request header
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// API Methods
export const apiService = {
  // Post Method Api to  Appointment
  createAppointment: async (formData) => {
    return api.post("/appointments", formData);
  },

  // Get Method Api to Department and doctor
  getDepartments: async () => {
    return api.get('/department/Getdepartment');
  },
  // Login Api to login

  login: async (email, password) => {
    return api.post("/auth/login", {
      userEmail: email,
      userPassword: password,
    });
  },
  // Register Api to register
  register: async (name, email, password) => {
    return api.post("/auth/register", {
      userName: name,
      userEmail: email,
      userPassword: password,
    });
  },
  // Get Method Api to get Appointment status
  getAppointment: async () => {
    return api.get("/appointments");
  },

  // Delete Method Api to delete Appointment
  deleteAppointment: async (deletAppointmentId) => {
    return api.delete(`/deleteAppointment/${deletAppointmentId}`);
  },

  // Update Method Api to update Appointment
  updateAppointment: async (formData, updateid) => {
    return api.put(`/updateAppointment/${updateid}`, formData);
  },
};

// <------------------------------------- Admin Api--------------------------------->

export const adminApi = {
  // add department api
  addDepartment: async (createDepartment) => {
    return api.post("/department/Createdepartment",
      {name:createDepartment}
    );
  },

//<------------ Get department api ---------------->

getDoctorDepartment : async () =>{
  return api.get('/department/Getdepartment')

},

//<------------------------Add doctor api--------------------->

addDoctor : async (formData)=>{
  return api.post('/doctor/Createdoctor', formData)
}
,
//<------------------get doctor api ------------------------------->
 getAllDoctor : async () =>{
  
  return api.get('/doctor/Alldoctors')

 },

// <----------- Total Appointment ----------------->

totalAppointment : async ()=>{

  return api.get('/admin/totalAppointment');

},

// Approved Appointment api

approvedAppointment : async (id,status)=>{
  return api.patch(`/admin/appointments/${id}/${status}`)
},
// canceld appointment api 
cancelAppointment : async (id,status)=>{
  return api.patch(`/admin/appointments/${id}/${status}`)
},


GetDepartment : async ()=>{
  return api.get('/admin/getDepartment');

},


// Payment method
appointmentPayment : async (body)=>{
  return api.post('/admin/payment',body)
}

 
};

// export default adminApi;
//   export default apiService;