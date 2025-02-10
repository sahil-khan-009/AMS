import Home from './Pages/Home.jsx';
import UserDashboard from './Pages/UserDashboard.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Appointment from './Pages/Appointment.jsx';
import AppointmentStatus from './Pages/AppointmentStatus.jsx';
import Profile from './Pages/Profile.jsx';
import UpdateDetails from './Pages/UpdateDetails.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.jsx';
import Notification from './Pages/Notification.jsx';
import {AppointmentProvider} from './context/AppointmentContext.jsx'

function App() {
  return (
   < AppointmentProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
       <Route path="/Login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 

        <Route path='/UserDashboard' element={<UserDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="Appointment" element={<Appointment />} />
          <Route path="AppointmentStatus" element={<AppointmentStatus />} />
          <Route path="UpdateDetails" element={<UpdateDetails />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Notification" element={<Notification />} />
        </Route> 

      </Routes>
    </Router>
    </AppointmentProvider>
  )
}

export default App;
