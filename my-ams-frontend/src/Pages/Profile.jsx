import React from 'react'
import "../PagesStyles/Profile.css";
import Cover from "/src/assets/modified logo.png";

function Profile() {
    return (
        <div className="col-md-10 col-lg-12 dashboard-content">
            <p className="page-show">Profile</p>
            {/* <div class="container">
                <div class="card profile-card shadow-sm p-4">
                    <div class="card-body text-center">
                        <div class="profile-header  rounded-top ">
                            <img src={Cover} alt="Profile Picture" class="profile-pic" />
                            <h3 class="mt-2">Sahil Khan</h3>
                        </div>
                        <div class="row mt-3 text-start">
                            <div class="col-md-6">
                                <p><strong>User Email:</strong> user@example.com</p>
                                <p><strong>Gender:</strong> Male</p>
                            </div>
                            <div class="col-md-6">
                                <p><strong>Mobile Number:</strong> +1234567890</p>
                                <p><strong>Date of Birth:</strong> 2000</p>
                            </div>
                            <div class="col-md-6">
                                <p><strong>Address:</strong> Alambagh</p>
                                <p><strong>City:</strong> Lucknow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div class="max-w-4xl mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
                <div class="flex flex-col items-center">
                    <img alt="Profile image of Sahil Khan" class="w-32 h-32 rounded-full shadow-lg mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/WpgjgcYQJhz5D0BJipInmbcqhiOWTaujEbg6-GgGyFY.jpg" width="150" />
                    <h1 class="text-2xl font-bold text-gray-800">
                        Sahil Khan
                    </h1>
                    <p class="text-gray-600">
                        user@example.com
                    </p>
                    <p class="text-gray-600">
                        +1234567890
                    </p>
                </div>
                <div class="mt-6">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">
                        Personal Information
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="flex items-center">
                            <i class="fas fa-venus-mars text-gray-600 mr-2">
                            </i>
                            <span class="text-gray-800">
                                Gender: Male
                            </span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-birthday-cake text-gray-600 mr-2">
                            </i>
                            <span class="text-gray-800">
                                Date of Birth: 2000
                            </span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-map-marker-alt text-gray-600 mr-2">
                            </i>
                            <span class="text-gray-800">
                                Address: Alambagh
                            </span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-city text-gray-600 mr-2">
                            </i>
                            <span class="text-gray-800">
                                City: Lucknow
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
