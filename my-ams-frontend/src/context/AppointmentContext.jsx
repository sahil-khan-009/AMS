import { createContext, useContext, useState } from "react";

// Create context
const AppointmentContext = createContext();

// Create provider
export const AppointmentProvider = ({ children }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [testing, Settesting] = useState("");
  const [departmentId, SetdepartmentId] = useState("");

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
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

// Custom hook to use the context easily
export const useAppointment = () => useContext(AppointmentContext);
