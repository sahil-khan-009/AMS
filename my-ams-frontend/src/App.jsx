import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import UserDashboard from './Pages/UserDashboard.jsx';
import Appointment from './Pages/Appointment.jsx';
import AppointmentStatus from './Pages/AppointmentStatus.jsx';
import Profile from './Pages/Profile.jsx';
import UpdateDetails from './Pages/UpdateDetails.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Notification from './Pages/Notification.jsx';
import { AppointmentProvider } from './context/AppointmentContext.jsx';
import AdminDashboard from './Admin/Component/AdminDashboard.jsx';
import AdminSideBar from './Admin/Page/AdminSidebar.jsx';
import Department from './Admin/Page/Department.jsx';
import AddDepartment from './Admin/Page/AddDepartment.jsx';
import AddDoctor from './Admin/Page/AddDoctor.jsx';
import UserAppointment from './Admin/Page/UserAppointment.jsx';
import Doctor from './Admin/Page/Doctor.jsx';
import DoctorDashboard from './Doctor/Components/DoctorDashboard.jsx';
import DoctorSidebar from './Doctor/Pages/DoctorSidebar.jsx';
import PatientAppointments from './Doctor/Pages/PatientAppointments.jsx';
import PatientDetails from './Doctor/Pages/PatientDetails.jsx';
import PatientReport from './Doctor/Pages/PatientReport.jsx';
import AppointmentNotes from './Doctor/Pages/AppointmentNotes.jsx';
import Availability from './Doctor/Pages/Availability.jsx';
import Doctorlogin from './Pages/Doctorlogin.jsx';
import DoctorProfile from './Doctor/Pages/DoctorProfile.jsx';
// import VideoCallPage from './Doctor/Pages/VideoCallPage.jsx';

function App() {
  return (
    <AppointmentProvider>
      {/* <Collapse/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/Doctorlogin" element={<Doctorlogin />} />

          {/* User Dashboard */}
          <Route path='/UserDashboard' element={<UserDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="Appointment" element={<Appointment />} />
            <Route path="AppointmentStatus" element={<AppointmentStatus />} />
            <Route path="UpdateDetails" element={<UpdateDetails />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Notification" element={<Notification />} />
          
          </Route>

          {/* Admin Dashboard */}
          <Route path='/AdminDashboard' element={<AdminDashboard />} >
            <Route index element={<AdminSideBar />} />
            <Route path='Department' element={<Department />} />
            <Route path='Doctor' element={<Doctor />} />
            <Route path='AddDepartment' element={<AddDepartment />} />
            <Route path='AddDoctor' element={<AddDoctor />} />
            <Route path='UserAppointment' element={<UserAppointment />} />
          </Route>
          
          {/* Doctor Dashboard */}
          <Route path="/DoctorDashboard" element={<DoctorDashboard />}>
            <Route index element={<DoctorSidebar />} />
            <Route path='PatientAppointments' element={<PatientAppointments />} />
            <Route path='PatientDetails' element={<PatientDetails />} />
            <Route path='PatientReport' element={<PatientReport />} />
            <Route path='AppointmentNotes' element={<AppointmentNotes />} />
            <Route path='Availability' element={<Availability />} />
            <Route path='DoctorProfile' element={<DoctorProfile/>} />
            {/* <Route path="PatientAppointments/video/:roomId" element={<VideoCallPage />} /> */}

          </Route>




        </Routes>
      </Router>
    </AppointmentProvider>
  );
}

export default App;