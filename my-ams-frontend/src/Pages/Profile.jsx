import React from 'react'
import "../PagesStyles/Profile.css";
import Cover from "/src/assets/modified logo.png";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { FaVenusMars } from "react-icons/fa";
import DashboardNav from '../Component/DashboardNav';







function Profile() {
    return (
        <div className="col-md-10 col-lg-12 mt-5">
            <DashboardNav/>
            <h3 className="page-show">Profile</h3><hr/>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="profile-card p-4">
                            <img src={Cover} alt="Profile Picture" class="profile-img" />
                            <h3 class="mt-3">SAHIL KHAN</h3>
                            <p class="text-muted"><MdEmail className='me-2'/>
                                Sahilkhan@gmail.com</p>
                            <p class="text-muted"><IoCall className='me-2' />
                                +918456789045</p>
                            <hr />
                            <div class="info-list">
                                <p><FaVenusMars class="me-2" />Gender: Male</p>
                                <p><FaBirthdayCake class="me-2" />Date of Birth: 2000</p>
                                <p><FaLocationDot class="me-2" /> Address: Alambagh</p>
                                <p><FaCity class="me-2" /> City: Lucknow</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
