import React from 'react'
import { BiSolidMessageRounded } from "react-icons/bi";
import '../PagesStyles/UserChat.css';
import DashboardNav from '../Component/DashboardNav';

function UserChat() {

    const handleStartMessaging = () => {
        window.location.href = 'UserMsg'; 

    };


  return (
    <div className="full-height-bg" style={{ paddingTop: '12em' }}>
            <DashboardNav />
            <div className="container"></div>
            <main className="d-flex flex-column align-items-center justify-content-center flex-grow-1 px-4 text-center py-5">
                <h3 className="text-primary fs-1 fw-bold mb-3 drop-shadow-md">Chat With Doctor</h3>
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
  )
}

export default UserChat
