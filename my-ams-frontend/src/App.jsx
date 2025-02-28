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
import AdminSideBar from './Admin/Component/AdminSideBar.jsx';
import AdminDashboard from './Admin/Page/AdminDashboard.jsx';
import AdminDepartment from '../src/Admin/Page/AdminDepartment.jsx';
import AddDepartment from './Admin/Page/AddDepartment.jsx';
import AddDoctor from './Admin/Page/AddDoctor.jsx';

function App() {
  return (
    <AppointmentProvider>
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

          <Route path='/AdminSideBar' element={<AdminSideBar />} >
            <Route index element={<AdminDashboard />} />
            <Route path='AdminDepartment' element={<AdminDepartment/>}/>
            <Route path='AddDepartment' element={<AddDepartment/>}/>
            <Route path='AddDoctor' element={<AddDoctor/>}/>
          </Route>
        </Routes>
      </Router>
    </AppointmentProvider>
  );
}

export default App;