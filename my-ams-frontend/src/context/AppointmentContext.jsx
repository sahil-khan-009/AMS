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
        email, setEmail,
        date, setDate,
        description, 
        setDescription,
        GlobalStateForUpdateFrom, 
        SetGlobalStateForUpdateFrom,
        appointments, setAppointments

     
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

// Custom hook to use the context easily
export const useAppointment = () => useContext(AppointmentContext);
