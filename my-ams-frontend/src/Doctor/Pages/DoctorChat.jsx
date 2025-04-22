import React from 'react';
import DoctorNavbar from '../Components/DoctorNavbar';
import '../../Doctor/PagesStyle/DoctorChat.css';
import { BiSolidMessageRounded } from "react-icons/bi";

const DoctorChat = () => {

    const handleStartMessaging = () => {
        window.open('/DoctorDashboard/DoctorMsg', '_blank');
      };

    return (
        <div className="full-height-bg" style={{ paddingTop: '12em' }}>
            <DoctorNavbar />
            <div className="container"></div>
            <main className="d-flex flex-column align-items-center justify-content-center flex-grow-1 px-4 text-center py-5">
                <h3 className="text-primary fs-1 fw-bold mb-3 drop-shadow-md">Chat With Patient's</h3>
                <hr className="custom-hr" />
                <button
                    className="custom-button d-flex align-items-center gap-2"
                    onClick={handleStartMessaging}
                >
                    <i><BiSolidMessageRounded size={25} /></i>
                    <span>Start Messaging</span>
                </button>
            </main>
        </div>
    );
};

export default DoctorChat;
