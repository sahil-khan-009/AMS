import React from 'react'
import '../ComponentStyle/Program.css';
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { IoIosClipboard } from "react-icons/io";




const Program = () => {
    return (
        <div className="container programs">
            <h1>Programs</h1>
            <div className="row g-4">
                <div className="col-md-3 col-sm-6 programs-box">
                    <div className="card h-100">
                        <div className="card-body">
                            <i><FaHeartCircleCheck /></i>
                            <h5>Comprehensive Care</h5>
                            <p >We provide a wide range of medical services to meet all your healthcare needs.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 programs-box">
                    <div className="card h-100">
                        <div className="card-body">
                            <i><FaStethoscope /></i>
                            <h5>Experienced Specialists</h5>
                            <p >Our team consists of highly trained professionals dedicated to top-notch medical care.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 programs-box">
                    <div className="card h-100">
                        <div className="card-body">
                            <i><FaMicroscope /></i>
                            <h5>Modern Facilities</h5>
                            <p>Our clinic offers advanced diagnostic and treatment options in a comfortable environment.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 programs-box">
                    <div className="card h-100">
                        <div className="card-body">
                            <i><IoIosClipboard /></i>
                            <h5>Personalized Treatment Plans</h5>
                            <p>We design customized treatment plans to ensure the best outcomes for each patient.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program
