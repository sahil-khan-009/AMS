import React, { useState } from 'react';
import DoctorNavbar from '../Components/DoctorNavbar';
import '../../../src/Doctor/PagesStyle/PatientDetails.css';
import { FcSearch } from "react-icons/fc";

const PatientDetails = () => {
    const [searchInput, setSearchInput] = useState('');
    const [showDetails, setShowDetails] = useState(false);

    const [isEditing, setIsEditing] = useState(false);
    const [patientInfo, setPatientInfo] = useState(() => {
        const saved = localStorage.getItem('patientInfo');
        return saved ? JSON.parse(saved) : {
            name: "John Doe",
            age: 32,
            gender: "Male",
            contact: "+1 234 567 8901",
            email: "john.doe@example.com",
            condition: "Hypertension",
            diagnosed: "Jan 2022",
            allergies: "Penicillin",
            medications: "Lisinopril 10mg (Daily)",
            lastVisit: "",
            notes: "Blood pressure under control. Monitor weekly."
        };
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatientInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleEditToggle = () => {
        if (isEditing) {
            // Save to localStorage on Save click
            localStorage.setItem('patientInfo', JSON.stringify(patientInfo));
        }
        setIsEditing(!isEditing);
    };


    const handleSearch = () => {
        const nameMatch = patientInfo.name.toLowerCase().includes(searchInput.toLowerCase());
        setShowDetails(nameMatch);
    };

    const handleClear = () => {
        setSearchInput('');
        setShowDetails(false);
    };



    return (
        <div className="full-height-bg" style={{ paddingTop: '5em' }}>
            <DoctorNavbar />
            <h3>Patient Details</h3>
            <hr />
            <div className="container mt-1">
                <div className="search-bar input-group">
                    <input
                        type="text"
                        className="form-control search-input"
                        placeholder="Search By Patient Name..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />

                    <button className="btn btn-primary search-btn me-2" type="button" onClick={handleSearch}>
                        <FcSearch size={25} />
                    </button>
                    <button className="btn btn-secondary" type="button" onClick={handleClear}>
                        Clear
                    </button>


                </div>
            </div>

            {showDetails && (
                <div className="container my-2">

                    <div className="card shadow-lg rounded-4">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2 className="card-title text-primary text-center">Patient Details</h2>
                                <button className="btn btn-warning" onClick={handleEditToggle}>
                                    {isEditing ? 'Save' : 'Edit'}
                                </button>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-md-10">
                                    {isEditing ? (
                                        <>
                                            <input className="form-control mb-2" name="name" value={patientInfo.name} onChange={handleChange} />
                                            <input className="form-control mb-2" name="age" value={patientInfo.age} onChange={handleChange} />
                                            <input className="form-control mb-2" name="gender" value={patientInfo.gender} onChange={handleChange} />
                                            <input className="form-control mb-2" name="contact" value={patientInfo.contact} onChange={handleChange} />
                                            <input className="form-control mb-2" name="email" value={patientInfo.email} onChange={handleChange} />
                                        </>
                                    ) : (
                                        <>
                                            <h4 className="mb-1">{patientInfo.name}</h4>
                                            <p><strong>Age:</strong> {patientInfo.age}</p>
                                            <p><strong>Gender:</strong> {patientInfo.gender}</p>
                                            <p><strong>Contact:</strong> {patientInfo.contact}</p>
                                            <p><strong>Email:</strong> {patientInfo.email}</p>
                                        </>
                                    )}
                                </div>
                            </div>

                            <h4 className="text-success">Medical History</h4>
                            {isEditing ? (
                                <>
                                    <textarea className="form-control mb-2" name="condition" value={patientInfo.condition} onChange={handleChange} />
                                    <input className="form-control mb-2" name="diagnosed" value={patientInfo.diagnosed} onChange={handleChange} />
                                    <input className="form-control mb-2" name="allergies" value={patientInfo.allergies} onChange={handleChange} />
                                    <input className="form-control mb-2" name="medications" value={patientInfo.medications} onChange={handleChange} />
                                    <input className="form-control mb-2" name="lastVisit" value={patientInfo.lastVisit} onChange={handleChange} />
                                    <textarea className="form-control mb-2" name="notes" value={patientInfo.notes} onChange={handleChange} />
                                </>
                            ) : (
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <strong>Condition:</strong> {patientInfo.condition}<br />
                                        <strong>Diagnosed:</strong> {patientInfo.diagnosed}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Allergies:</strong> {patientInfo.allergies}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Medications:</strong> {patientInfo.medications}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Last Visit:</strong> {patientInfo.lastVisit}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Notes:</strong> {patientInfo.notes}
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PatientDetails;
