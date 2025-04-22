import React, { useState } from 'react';
// import DoctorNavbar from '../Components/DoctorNavbar';
import '../../Doctor/PagesStyle/DoctorMsg.css'
import { MdOutlineAttachFile } from "react-icons/md";
import { BsFilterRight } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";





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
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');


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

    const filteredPatients = patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return (
        <div>
            <div className='d-flex justify-content-center' style={{ backgroundColor: 'rgb(233, 239, 241)' }} >
                <div class="search-wrapper position-relative w-50">
                    <i class="px-2 search-icon"><FaSearch size={25} /></i>
                    <input type="text" class="form-control search-input shadow-sm px-5" placeholder="Search patient here..." />
                </div>
            </div>

            <div className="chat-wrapper">
                <div className="border  py-3">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        {!showSearch ? (
                            <>
                                <h4 className="m-0 px-3">Chat</h4>
                                <span className="m-0 px-3" onClick={() => setShowSearch(true)} style={{ cursor: 'pointer' }}>
                                    <BsFilterRight size={30} />
                                </span>
                            </>
                        ) : (
                            <input
                                type="text"
                                className="form-control mx-3"
                                placeholder="Search..."
                                autoFocus
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onBlur={() => setShowSearch(false)}
                            />

                        )}
                    </div><hr />
                    <div className="patients-list d-flex flex-column gap-2 mt-3">
                        {filteredPatients.map((patient) => {
                            const isSelected = selectedPatient.id === patient.id;
                            return (
                                <div
                                    key={patient.id}
                                    onClick={() => setSelectedPatient(patient)}
                                    className={`d-flex align-items-center justify-content-between p-2 gap-4 rounded shadow-sm cursor-pointer position-relative ${isSelected
                                        ? 'bg-secondary text-white'
                                        : 'bg-white text-dark'
                                        }`}
                                    style={{
                                        transition: 'all 0.3s ease',
                                        transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                                    }}
                                >
                                    {/* Avatar and Info */}
                                    <div className="d-flex align-items-center gap-3">
                                        <div
                                            className="d-flex justify-content-center align-items-center rounded-circle bg-primary text-white fw-bold"
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                fontSize: '1rem',
                                            }}
                                        >
                                            {patient.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <div className={`fw-semibold ${isSelected ? 'text-white' : 'text-dark'}`}>
                                                {patient.name}
                                            </div>
                                            <div
                                                className={`small text-truncate`}
                                                style={{
                                                    maxWidth: '150px',
                                                    color: isSelected ? '#e0e0e0' : '#6c757d',
                                                }}
                                            >
                                                Last message: {patient.lastMessage}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Online Indicator */}
                                    <div
                                        className="rounded-circle border border-white me-3"
                                        title={patient.online ? 'Online' : 'Offline'}
                                        style={{
                                            width: '12px',
                                            height: '12px',
                                            backgroundColor: patient.online ? '#28a745' : '#adb5bd',
                                            boxShadow: '0 0 0 2px white',
                                        }}
                                    ></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Chat area */}
                <div className="chat-area border">
                    <div className="chat-header">
                        <div className="info">
                            <div className='px-3'>
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
