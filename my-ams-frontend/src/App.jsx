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

function App() {
  return (
    <AppointmentProvider>
      {/* <Collapse/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="register" element={<Register />} />
          <Route path="/login" element={<Login />} />
         

          <Route path='/UserDashboard' element={<UserDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="Appointment" element={<Appointment />} />
            <Route path="AppointmentStatus" element={<AppointmentStatus />} />
            <Route path="UpdateDetails" element={<UpdateDetails />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Notification" element={<Notification />} />
          </Route>

          <Route path='/AdminDashboard' element={<AdminDashboard />} >
            <Route index element={<AdminSideBar/>} />
            <Route path='Department' element={<Department/>}/>
            <Route path='Doctor' element={<Doctor/>}/>
            <Route path='AddDepartment' element={<AddDepartment/>}/>
            <Route path='AddDoctor' element={<AddDoctor/>}/>
            <Route path='UserAppointment' element={<UserAppointment/>}/>
          </Route>
        </Routes>
      </Router>
    </AppointmentProvider>
  );
}

export default App;