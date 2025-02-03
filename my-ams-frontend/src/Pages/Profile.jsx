import React from 'react'
import "../PagesStyles/Profile.css";

function Profile() {
    return (
                <div className="col-md-10 col-lg-12 dashboard-content">
                     <nav className="navbar-expand-lg mb-5">
                        <a className="brand">Profile</a>
                    </nav>

                    <main class="col-md-9 col-lg-10 px-4">
                        <div class="profile-container">
                            <div class="profile-header">
                                <img src="https://via.placeholder.com/100" alt="Profile Picture" />
                                <h3 class="mt-2">User Name</h3>
                            </div>
                            <div class="p-3">
                                <div class="row">
                                    <div class="col-md-6">
                                        <p><strong>User Email:</strong> user@example.com</p>
                                        <p><strong>Gender:</strong> Male</p>
                                    </div>
                                    <div class="col-md-6">
                                        <p><strong>Mobile Number:</strong> +1234567890</p>
                                        <p><strong>Age:</strong> 30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                </div>
    )
}

export default Profile
