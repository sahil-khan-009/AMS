import React from 'react'
import "../PagesStyles/AppointmentStatus.css";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';



function AppointmentStatus() {
    return (
        <div className="dashboard">
            <p className="page-show">Appointment Status</p>
            <div className="table-container">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead className="table-secondary custom-header">
                            <tr className='text-center'>
                                <th>Sr No</th>
                                <th>Patient Name</th>
                                <th>Patient Email</th>
                                <th>Appointment Date</th>
                                <th>Description</th>
                                <th>Department</th>
                                <th>Doctor Name</th>
                                <th>Status</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center'>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john@example.com</td>
                                <td>2025-01-28</td>
                                <td>General Checkup</td>
                                <td>General Medicine</td>
                                <td>Dr.Sameer</td>
                                <td>Pending</td>
                                <td>
                                    <Link className='delete' to="/" type='button'>
                                        <AiFillDelete className='delete-icon' />
                                    </Link>
                                </td>
                                <td>
                                    <Link className='edit' to="/" type='button'>
                                        <FaEdit className='edit-icon' />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <nav>
                    <ul className="pagination justify-content-center">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default AppointmentStatus
