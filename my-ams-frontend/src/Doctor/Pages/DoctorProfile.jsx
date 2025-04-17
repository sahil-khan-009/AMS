import React, { useState } from 'react';
import DoctorNavbar from '../Components/DoctorNavbar';

const DoctorProfile = () => {
    // Office Details state
    const [editMode, setEditMode] = useState(false);
    const [officeDetails, setOfficeDetails] = useState({
        doctorId: 'DOC12345',
        department: 'Cardiology',
        workingHours: '9:00 AM - 5:00 PM',
        availableDays: 'Monday, Wednesday, Friday',
        consultationType: 'In-person, Online',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOfficeDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleEditToggle = () => {
        setEditMode(prev => !prev);
    };

    const handleSave = () => {
        // You could send `officeDetails` to a backend here
        console.log('Saved:', officeDetails);
        setEditMode(false);
    };

    return (
        <div className="full-height-bg" style={{ paddingTop: '5em' }}>
            <DoctorNavbar />
            <div className="container">
                <h3 className="text-primary">Doctor Profile</h3>
                <hr />

                {/* Personal Details */}
                <div className="mb-4">
                    <h5 className="text-secondary">Personal Details</h5>
                    <ul className="list-group mb-3 mt-3">
                        <li className="d-flex">
                            <strong className="text-primary"><h3>Dr. John Doe</h3></strong>
                        </li>
                        <li className="d-flex gap-2 ">
                            <strong>Contact No:</strong>
                            <span>123-456-7890</span>
                        </li>
                        <li className="d-flex gap-2">
                            <strong>Email id:</strong>
                            <span>doctor@example.com</span>
                        </li>
                        <li className="d-flex gap-2 ">
                            <strong>Age:</strong>
                            <span>45</span>
                        </li>
                    </ul>
                    <hr />
                </div>

                {/* Office Details */}
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="text-secondary">Office Details</h5>
                        {!editMode ? (
                            <button className="btn btn-outline-primary btn-sm" onClick={handleEditToggle}>
                                Edit
                            </button>
                        ) : (
                            <div>
                                <button className="btn btn-success btn-sm me-2" onClick={handleSave}>
                                    Save
                                </button>
                                <button className="btn btn-secondary btn-sm" onClick={handleEditToggle}>
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="row mt-3">
                        {[
                            { label: 'Doctor ID', key: 'doctorId' },
                            { label: 'Department Name', key: 'department' },
                            { label: 'Working Hours', key: 'workingHours' },
                            { label: 'Available Days', key: 'availableDays' },
                            { label: 'Consultation Type', key: 'consultationType' },
                        ].map(({ label, key }) => (
                            <div className="col-md-4 mb-3" key={key}>
                                <strong>{label}</strong>
                                {editMode ? (
                                    <input
                                        type="text"
                                        className="form-control"
                                        name={key}
                                        value={officeDetails[key]}
                                        onChange={handleChange}
                                        disabled={key === 'doctorId' || key === 'department'}
                                    />
                                ) : (
                                    <p className="form-control-plaintext">{officeDetails[key]}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
