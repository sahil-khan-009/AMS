import React, { useState } from 'react';
import DoctorNavbar from '../Components/DoctorNavbar';

const Availability = () => {
    const [date, setDate] = useState('');
    const [dutyType, setDutyType] = useState('');
    const [reason, setReason] = useState('');
    const [shiftTiming, setShiftTiming] = useState('');
    const [entries, setEntries] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!date || !dutyType || (dutyType === 'Duty' && !shiftTiming) || (dutyType !== 'Duty' && !reason)) {
            alert('Please fill in all required fields.');
            return;
        }

        const newEntry = {
            date,
            dutyType,
            detail: dutyType === 'Duty' ? shiftTiming : reason,
        };

        setEntries([...entries, newEntry]);

        // Clear form
        setDate('');
        setDutyType('');
        setReason('');
        setShiftTiming('');
    };

    return (
        <div className="full-height-bg" style={{ paddingTop: '5em' }}>
            <DoctorNavbar />
            <div className="container">
                <h3 className="text-primary">Availability</h3>
                <hr />
                <form onSubmit={handleSubmit} className="d-flex align-items-center gap-3 flex-wrap mb-4">
                    <label>Select Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        style={{ maxWidth: '200px' }}
                    />

                    <label>Type:</label>
                    <select
                        className="form-select"
                        value={dutyType}
                        onChange={(e) => setDutyType(e.target.value)}
                        style={{ maxWidth: '200px' }}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Duty">Duty</option>
                        <option value="Week Off">Week Off</option>
                        <option value="Leave">Leave</option>
                    </select>

                    {dutyType && (
                        <>
                            {dutyType === 'Duty' ? (
                                <>
                                    <label>Shift Timing:</label>
                                    <select
                                        className="form-select"
                                        value={shiftTiming}
                                        onChange={(e) => setShiftTiming(e.target.value)}
                                        required
                                        style={{ maxWidth: '250px' }}
                                    >
                                        <option value="">Select Shift</option>
                                        <option value="9:30 AM - 6:30 PM (Full Time)">9:30 AM - 6:30 PM (Full Time)</option>
                                        <option value="9:30 AM - 2:30 PM (Half Day)">9:30 AM - 2:30 PM (Half Day)</option>
                                    </select>
                                </>
                            ) : (
                                <>
                                    <label>Reason:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                        required
                                        placeholder="Enter reason"
                                        style={{ maxWidth: '300px' }}
                                    />
                                </>
                            )}
                        </>
                    )}

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
                <hr />
                {entries.length > 0 && (
                    <>
                        <h4 className="text-secondary">Submitted Entries</h4>
                        <table className="table table-bordered table-hover">
                            <thead className='table-header text-center'>
                                <tr>
                                    <th>Sr</th>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>Timing / Reason</th>
                                </tr>
                            </thead>
                            <tbody>
                                {entries.map((entry, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{entry.date}</td>
                                        <td>{entry.dutyType}</td>
                                        <td>{entry.detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
};

export default Availability;
