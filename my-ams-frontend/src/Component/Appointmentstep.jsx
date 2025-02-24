import React from 'react';
import '../ComponentStyle/Appointmentstep.css';
import { IoSearchSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiUsersLight } from "react-icons/pi";

const Appointmentstep = () => {
    return (
        <div className="easy-step">
            <div className="appointment-step text-center">
                <h2>4 Easy Steps to get your appointment</h2>
                <p>Following these easy 4 steps, you can book an appointment easily and get your desired doctor consultation fast and hassle-free.</p>
                <div className="row justify-content-center">
                    <div className="col-md-3 col-sm-6 step">
                        <div className="icon-step">
                            <IoSearchSharp />
                        </div>
                        <h5>1. Search Doctor</h5>
                        <p>Search your doctor, find the best doctor that suits your health.</p>
                    </div>
                    <div className="col-md-3 col-sm-6 step">
                        <div className="icon-step">
                            <FaLocationDot />
                        </div>
                        <h5>2. Choose Branch</h5>
                        <p>Select the nearby branch that is close to your home and select it.</p>
                    </div>
                    <div className="col-md-3 col-sm-6 step">
                        <div className="icon-step">
                            <FaRegCalendarAlt />
                        </div>
                        <h5>3. Make Schedule</h5>
                        <p>Make your schedule and fix the date you want to consult.</p>
                    </div>
                    <div className="col-md-3 col-sm-6 step">
                        <div className="icon-step">
                            <PiUsersLight />
                        </div>
                        <h5>4. Get Treatment</h5>
                        <p>After confirmation, now you can meet your doctor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appointmentstep;
