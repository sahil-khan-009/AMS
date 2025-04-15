import React from 'react';
import DoctorNavbar from '../Components/DoctorNavbar';
import '../../Doctor/PagesStyle/AppointmentNotes.css';

const AppointmentNotes = () => {
    const appointmentData = [
        {
            patientName: 'John Doe',
            appointments: [
                {
                    date: '2023-01-15',
                    note: 'Regular check-up, prescribed medication for blood pressure.'
                },
                {
                    date: '2022-11-05',
                    note: 'Initial consultation, diagnosed with hypertension.'
                }
            ]
        },
        {
            patientName: 'Jane Smith',
            appointments: [
                {
                    date: '2022-12-10',
                    note: 'Follow-up on diabetes management, adjusted insulin dosage.'
                }
            ]
        }
    ];

    return (
        <div className="full-height-bg" style={{ paddingTop: '5em' }}>
            <DoctorNavbar />
            <h3 className='text-primary'>Past Appointments</h3>
            <hr />
            <div className="container mt-1">
                {appointmentData.map((patient, index) => (
                    <div key={index} className="mb-4">
                        <h5 className="text-secondary">{patient.patientName}</h5>
                        {patient.appointments.map((appointment, idx) => (
                            <div key={idx} className="card appointment-card p-3 mb-2">
                                <div className="appointment-date">
                                    Appointment on {appointment.date}
                                </div>
                                <div>{appointment.note}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppointmentNotes;
