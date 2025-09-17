import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-node-5tca.onrender.com/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

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

// <--------------------------------------Local base url--------------------------------->

const localApi = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Local API Interceptor (for cookie-based auth)
localApi.interceptors.request.use(
  (config) => {
    // Optional: Check if token is present in sessionStorage or localStorage and add it to headers
    const token = sessionStorage.getItem("token"); // Or use localStorage if needed
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("Making request to Local API: ", config.url);
    return config;
  },
  (error) => {
    console.error("Local API Request Error:", error);
    return Promise.reject(error); // Reject the promise if there's an error
  }
);
// Request interceptor To add the token to the request header

//LOCAL API MMETHODS
export const localApiService = {
  //   UserChatId : async()=>{
  //     return localApi.get('/ChatUserID')
  //   },
  // // Doctor chat id
  // DoctorChatId : async()=>{
  //   return localApi.get('/doctorDashboard/DoctorChatId')
  // },
  // doctorLogin : async (formData)=>{
  //   return localApi.post('/auth/loginDoctor',
  //    formData
  //  )
  // },
  // User login
  // login: async (email, password) => {
  //   return api.post("/auth/login", {
  //     userEmail: email,
  //     userPassword: password,
  //   });
  // },
};

// API Methods
export const apiService = {
  // Post Method Api to  Appointment
  createAppointment: async (formData) => {
    return api.post("/appointments", formData);
  },

  // Get Method Api to Department and doctor
  getDepartments: async () => {
    return api.get("/department/Getdepartment");
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

  AlluserAppointment: async () => {
    return api.get("/AlluserAppointment");
  },

  // COMPLTED APPOINTMENT API
  completedAppointment: async () => {
    return api.get("/completedAppointments");
  },
  // Delete Method Api to delete Appointment
  deleteAppointment: async (deletAppointmentId) => {
    return api.delete(`/deleteAppointment/${deletAppointmentId}`);
  },

  // Update Method Api to update Appointment
  updateAppointment: async (formData, updateid) => {
    return api.put(`/updateAppointment/${updateid}`, formData);
  },

  UserChatId: async () => {
    return api.get("/ChatUserID");
  },

  userChatDoctorappointment : async ()=>{
    return api.get('/appointmentDoctorChat')
  },


};

// <------------------------------------- Admin Api--------------------------------->

export const adminApi = {
  // add department api
  addDepartment: async (createDepartment) => {
    return api.post("/department/Createdepartment", { name: createDepartment });
  },

  //<------------ Get department api ---------------->

  getDoctorDepartment: async () => {
    return api.get("/department/Getdepartment");
  },

  //<------------------------Add doctor api--------------------->

  addDoctor: async (formData) => {
    return api.post("/doctor/Createdoctor", formData);
  },
  //<------------------get doctor api ------------------------------->
  getAllDoctor: async () => {
    return api.get("/doctor/Alldoctors");
  },

  // <----------- Total Appointment ----------------->

  totalAppointment: async () => {
    return api.get("/admin/totalAppointment");
  },

  // Approved Appointment api

  approvedAppointment: async (id, status, mode, slot) => {
    return api.patch(`/admin/appointments/${id}/${status}/${mode}`, {
      timeSlot: slot,
    });
  },
  // canceld appointment api
  cancelAppointment: async (id, status) => {
    return api.patch(`/admin/appointments/${id}/${status}`);
  },

  GetDepartment: async () => {
    return api.get("/admin/getDepartment");
  },

  // Payment method
  appointmentPayment: async (body) => {
    return api.post("/admin/payment", body);
  },

  BarChartApi: async () => {
    return api.get("/admin/appointmentChart");
  },
};

export const doctorApi = {
  // Post method api to login doctor
  doctorLogin: async (formData) => {
    return api.post("/auth/loginDoctor", formData);
  },

  // to get all Appointment of doctor

  allAppointment: async () => {
    return api.get("/doctorDashboard/allAppointments");
  },

  vdoCompleted: async (id, status) => {
    return api.patch(`/doctorDashboard/videoStatus/${id}`, {
      videoStatus: status,
    });
  },

  TreatedPatients: async () => {
    return api.get("/doctorDashboard/treatedPatient");
  },

  UploadReport: async (id, formData) => {
    return api.post(`/doctorDashboard/UploadUserReport/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  DoctorChatId: async () => {
    return api.get("/doctorDashboard/DoctorChatId");
  },

  DoctorChatLoggedInUser: async () => {
    return api.get("/doctorDashboard/loggedInUSer");
  },
};
//
// <------------------------------------- Video Call Api --------------------------------->

export const videoCallApi = {
  // in your Api file
  conferenceLeft: async (appointmentId) => {
    return api.patch(`/doctor/video/appointments/status/${appointmentId}`, {
      callStatus: "completed",
    });
  },
};
