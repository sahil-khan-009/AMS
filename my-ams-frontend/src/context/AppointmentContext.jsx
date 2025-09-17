import { createContext, useContext, useState } from "react";

// Create context
const AppointmentContext = createContext();

// Create provider
export const AppointmentProvider = ({ children }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [testing, Settesting] = useState("");
  const [departmentId, SetdepartmentId] = useState("");
  const [Doctorname,Setdoctorname]= useState("");
  const [updateid,setupdateId] = useState("");  
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [GlobalStateForUpdateFrom, SetGlobalStateForUpdateFrom] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [role,Setrole]= useState("")
  const [specificDoctorID, setspecificDoctorID] = useState('');
  const [videoRoomId, SetvideoRoomId] = useState("");
  const [navBarConfig,SetNavBarConfig] = useState(false); // this state is resposible for nav-bar condition rendering

  return (
    <AppointmentContext.Provider
      value={{
        selectedDoctorId,
        setSelectedDoctorId,
        selectedDepartment,
        setSelectedDepartment,
        testing,
        Settesting,
        departmentId,
        SetdepartmentId,
        Doctorname,Setdoctorname,
        setupdateId,
        updateid,
        patientName, 
        setPatientName,
        email,setEmail,
        date,setDate,
        description, 
        setDescription,
        GlobalStateForUpdateFrom, 
        SetGlobalStateForUpdateFrom,
        appointments, setAppointments,
        role,Setrole,
        specificDoctorID, setspecificDoctorID,
        videoRoomId, SetvideoRoomId,
        navBarConfig,SetNavBarConfig
         
     
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

// Custom hook to use the context easily
export const useAppointment = () => useContext(AppointmentContext);