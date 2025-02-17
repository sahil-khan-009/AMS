import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-node-5tca.onrender.com/api',
    withCredentials: true,
    headers:{
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
const apiService = {
    createAppointment: async (formData) => {
      return api.post("/appointments", formData);
    },
  
    getDepartments: async () => {
      return api.get("/doctor/Department");
    },
  
    login: async (email, password) => {
      return api.post("/auth/login", { userEmail: email, userPassword: password });
    },
  
    register: async (name, email, password) => {
      return api.post("/auth/register", { userName: name, userEmail: email, userPassword: password });
    },

    getAppointment: async (departmentId) => {
      return api.get(`/appointments/${departmentId}`);
    },
  };
  
  export default apiService;