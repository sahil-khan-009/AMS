import React, { useState } from 'react';
// import DoctorNavbar from '../Components/DoctorNavbar';
import '../../Doctor/PagesStyle/DoctorMsg.css'
import { MdOutlineAttachFile } from "react-icons/md";



const patients = [
    { id: 1, name: 'Emily Johnson', lastMessage: '2 min ago', online: true },
    { id: 2, name: 'Robert Williams', lastMessage: '1 hour ago', online: false },
    { id: 3, name: 'Sophia Martinez', lastMessage: 'Yesterday', online: true },
    { id: 4, name: 'James Anderson', lastMessage: '3 days ago', online: false },
    { id: 5, name: 'Michael Brown', lastMessage: '4 days ago', online: false },
];

const messagesMock = [
    { id: 1, sender: 'Emily', text: 'Hello Doctor, I have been feeling a bit dizzy lately.', time: '10:15 AM' },
    { id: 2, sender: 'Doctor', text: 'Hi Emily, I’m sorry to hear that. Can you describe the dizziness in more detail?', time: '10:17 AM' },
];

const DoctorMsg = () => {

    const [selectedPatient, setSelectedPatient] = useState(patients[0]);
    const [messages, setMessages] = useState(messagesMock);
    const [newMessage, setNewMessage] = useState('');

    const handleSend = () => {
        if (!newMessage.trim()) return;

        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setMessages([...messages, { id: messages.length + 1, sender: 'Doctor', text: newMessage, time }]);
        setNewMessage('');
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Handle file upload (send it to backend or attach it to the chat)
            console.log("Selected file:", file);
            // You can create a FormData object and send via fetch or axios
        }
    };


    return (
        <div>
            <div className='d-flex justify-content-center' >
            <div class="search-wrapper position-relative w-50">
                <i class="bi bi-search search-icon"></i>
                <input type="text" class="form-control search-input shadow-sm" placeholder="Search here..." />
            </div>
            </div>

            <div className="chat-wrapper">
                <div className="border px-3 py-3">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <h4 className="m-0">Chat</h4>

                    </div><hr />
                    <div className="patients-list d-flex flex-column gap-2 mt-3">
                        {patients.map((patient) => (
                            <div
                                key={patient.id}
                                onClick={() => setSelectedPatient(patient)}
                                className={`d-flex justify-content-between align-items-center p-3 rounded cursor-pointer shadow-sm transition 
                ${selectedPatient.id === patient.id
                                        ? 'bg-white border-start border-4 border-primary text-dark'
                                        : 'bg-white hover-bg-success'
                                    }`}
                                style={{ transition: 'all 0.2s ease' }}
                            >
                                <div>
                                    <div className={`fw-semibold ${selectedPatient.id === patient.id ? 'text-white' : 'text-dark'}`}>
                                        {patient.name}
                                    </div>
                                    <div className={`small ${selectedPatient.id === patient.id ? 'text-light' : 'text-success'}`}>
                                        Last message: {patient.lastMessage}
                                    </div>
                                </div>
                                <span
                                    className="rounded-circle"
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        backgroundColor: patient.online ? '#28a745' : '#6c757d'
                                    }}
                                ></span>
                            </div>
                        ))}
                    </div>


                </div>

                {/* Chat area */}
                <div className="chat-area border">
                    <div className="chat-header">
                        <div className="info">
                            <div>
                                <div className="name">{selectedPatient.name}</div>
                                <div className="status">{selectedPatient.online ? 'Online' : 'Offline'}</div>
                            </div>
                        </div>
                    </div>

                    <div className="chat-body">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`chat-message ${msg.sender === 'Doctor' ? 'sent' : 'received'}`}>
                                {msg.sender !== 'Doctor'}
                                <div className="bubble">{msg.text}</div>
                                {msg.sender === 'Doctor'}
                                <div className="time">{msg.time}</div>
                            </div>
                        ))}
                    </div>

                    <div className="chat-input">

                        {/* Label to trigger file input */}
                        <label htmlFor="file-upload" className="upload-btn ">
                            <MdOutlineAttachFile size={25} />
                        </label>
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />

                        {/* File input (hidden) */}
                        <input
                            type="file"
                            id="file-upload"
                            style={{ display: 'none' }}
                            onChange={handleFileUpload}
                        />

                        {/* Send message button */}
                        <button onClick={handleSend}>➤</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DoctorMsg
