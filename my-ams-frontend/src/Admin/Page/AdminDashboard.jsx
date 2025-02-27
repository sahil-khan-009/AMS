import React from 'react'
import '../../Admin/PageStyle/AdminDashboard.css'
import AdminSideBar from '../Component/AdminSideBar'
import Adminnav from '../Component/Adminnav'

const AdminDashboard = () => {
    return (
        <div>
            <AdminSideBar />
            <Adminnav/>
            <p className="page-show"style={{ marginLeft: '9em',marginTop:'5rem' }}>Dashboard</p><hr/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 col-sm-10 col-md-10" style={{ marginLeft: '15.5em' }}>
                        <div className="py-3 shadow px-3">
                            <div className="d-flex flex-wrap gap-3">
                                <div className="custom-card">
                                    <div className="text-content">
                                        <h6>Appointment</h6>
                                        <strong>0</strong>
                                    </div>
                                </div>
                                <div className="custom-card">
                                    <div className="text-content">
                                        <h6>Approved Appointment</h6>
                                        <strong>1</strong>
                                    </div>
                                </div>
                                <div className="custom-card">
                                    <div className="text-content">
                                        <h6>Reject Appointment</h6>
                                        <strong>1</strong>
                                    </div>
                                </div>
                                <div className="custom-card">
                                    <div className="text-content">
                                        <h6>Delete Appointment</h6>
                                        <strong>8</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 mt-4" style={{ marginLeft: '15.5em' }}>
                        <div className="dashboard py-3 shadow px-3">
                            <div className="d-flex flex-wrap gap-3">
                                <div className="custom-card">
                                    <div className="text-content">
                                        <h6>Appointment</h6>
                                        <strong>0</strong>
                                    </div>
                                </div>
                                <div className="custom-card">
                                    <div className="text-content">
                                        <h6>Approved Appointment</h6>
                                        <strong>1</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 mt-4" style={{ marginLeft: '15.5em' }}>
                        <div className="dashboard py-3 shadow px-3">
                            <div className="d-flex flex-wrap gap-3">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
