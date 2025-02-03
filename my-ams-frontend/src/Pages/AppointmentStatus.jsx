import React from 'react'
import "../PagesStyles/AppointmentStatus.css";


function AppointmentStatus() {
    return (
        <div className="col-md-10 col-lg-12 dashboard-content">
            <nav className="navbar-expand-lg mb-5">
                        <a className="brand">Appointment Status</a>
                    </nav>
            <div class="table-container">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered">
                        <thead class="table-dark">
                            <tr>
                                <th>Sr No</th>
                                <th>Patient Name</th>
                                <th>Patient Email</th>
                                <th>Appointment Date</th>
                                <th>Description</th>
                                <th>Department</th>
                                <th>Status</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>john@example.com</td>
                                <td>2025-01-28</td>
                                <td>General Checkup</td>
                                <td>General Medicine</td>
                                <td>Pending</td>
                                <td><button class="bs">Delete</button></td>
                                <td><button class="bs">Edit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <nav>
                    <ul class="pagination justify-content-center">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default AppointmentStatus
