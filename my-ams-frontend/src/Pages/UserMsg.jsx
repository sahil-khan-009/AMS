import React, { useState, useEffect } from "react";
import "../PagesStyles/UserMsg.css";
import { MdOutlineAttachFile } from "react-icons/md";
import { BsFilterRight } from "react-icons/bs";
import { RiUserAddFill } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import socket from "../Sockets/socket";
import { localApiService, apiService } from "../Api-folder/Api";

const patients = [
  { id: 1, name: "Emily Johnson", lastMessage: "2 min ago", online: true },
  { id: 2, name: "Robert Williams", lastMessage: "1 hour ago", online: false },
  { id: 3, name: "Sophia Martinez", lastMessage: "Yesterday", online: true },
  { id: 4, name: "James Anderson", lastMessage: "3 days ago", online: false },
  { id: 5, name: "Michael Brown", lastMessage: "4 days ago", online: false },
  { id: 6, name: "Michael Brown", lastMessage: "4 days ago", online: false },
  { id: 7, name: "Michael Brown", lastMessage: "4 days ago", online: false },
  { id: 8, name: "Michael Brown", lastMessage: "4 days ago", online: false },
  { id: 9, name: "Michael Brown", lastMessage: "4 days ago", online: false },
  { id: 10, name: "Michael Brown", lastMessage: "4 days ago", online: false },
  { id: 11, name: "Michael Brown", lastMessage: "4 days ago", online: false },
  { id: 12, name: "Michael Brown", lastMessage: "4 days ago", online: false },
];

const messagesMock = [
  {
    id: 1,
    sender: "Emily",
    text: "Hello Doctor, I have been feeling a bit dizzy lately.",
    time: "10:15 AM",
  },
  {
    id: 2,
    sender: "Doctor",
    text: "Hi Emily, I’m sorry to hear that. Can you describe the dizziness in more detail?",
    time: "10:17 AM",
  },
];

function UserMsg() {
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(
    Array.isArray(newMessage) && newMessage.length > 0 ? newMessage : []
  );

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [UserChatID, SetUSerChatID] = useState("");
  const [sendingToDocId, SetsendingToDocId] = useState("");
  const [ChatDoctor, SetChatDoctor] = useState([]);
  const [Mymessage, SetMymessage] = useState([]);
  const [chatHistoryMap, setChatHistoryMap] = useState({});

  const navigate = useNavigate();

  // For sending messages
  const handleSend = () => {
    if (!newMessage.trim()) return;

    // Send to server
    sendingMessage();

    // Add to current doctor's chat history
    setChatHistoryMap((prev) => ({
      ...prev,
      [currentDoctorId]: [
        ...(prev[currentDoctorId] || []),
        {
          sender: "doctor",
          text: newMessage,
          time: new Date().toLocaleTimeString(),
        },
      ],
    }));

    setNewMessage("");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  const filteredPatients = ChatDoctor.filter((patient) =>
    patient.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ---------------------------<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>--------------------------

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await apiService.userChatDoctorappointment();
        console.log(
          "response from backend>>>>>>>>>>>>>>>>>>>>> ",
          response.data
        );
        SetChatDoctor(response.data?.appointments);
        if (response.data?.appointments.length > 0) {
          const id = response.data?.appointments?.[0]?.userId;
          SetUSerChatID(id);
        }
      } catch (err) {
        console.error("Error fetching int catch:", err);
      }
    };
    fetchChatData();
  }, []);

  //   useEffect(()=>{
  //     console.log("ChatDoctor datannnnnnnnn in useEffect:", ChatDoctor);
  //   },[ChatDoctor])
  // ---------------------------<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>-------------------------

  useEffect(() => {
    const fetchIdData = async () => {
      try {
        const response = await apiService.UserChatId();
        console.log("rsponse from backend data---------", response.data);
        const id = response.data?.appointments?.[0]?.userId;
        const docId = response.data.appointments?.[0]?.doctorId?._id;
        if (id && docId) {
          //   SetUSerChatID(id);
          //   SetsendingToDocId(docId);
          console.log("main kuch bhi nahi karta");
        } else {
          console.log("No ID found in the response.");
        }
      } catch (error) {
        console.error("Error fetching User Chat ID:", error);
      }
    };

    fetchIdData();
  }, []);

  // Socket logiica goes here------------------------------
  useEffect(() => {
    if (!UserChatID && !sendingToDocId) return;

    socket.emit("join-Room", UserChatID);
    console.log("Joined Room:", UserChatID);

    const currentDoctorId = selectedPatient?.doctorId;

    const handleMessage = (data) => {
      setChatHistoryMap((prev) => ({
        ...prev,
        [currentDoctorId]: [
          ...(prev[currentDoctorId] || []),
          {
            sender: "user", // message from doctor should be marked as "doctor"
            text: data.message,
            time: new Date().toLocaleTimeString(),
          },
        ],
      }));
    };

    socket.on("receiveMessage", handleMessage);

    return () => {
      socket.off("receiveMessage", handleMessage);
    };
  }, [UserChatID, selectedPatient]);

  const sendingMessage = () => {
    if (!UserChatID || !sendingToDocId) return;

    socket.emit("sendMessage", {
      senderId: UserChatID,
      receiverId: sendingToDocId, // This should also be dynamic if possible
      message: newMessage,
    });
  };

  // socket logic goes till her--------------------------
  const currentDoctorId = selectedPatient?.doctorId;
  const currentChat = chatHistoryMap[currentDoctorId] || [];

  console.log("User Chat ID-------:", UserChatID);
  console.log("Doctor Chat ID-------:", sendingToDocId);
  console.log("newMessage========================", newMessage);

  return (
    <div>
      {/* <button className='btn btn-primary' onClick={ sendingMessage}>sendMessagetoDoctor</button> */}
      <div className="chat-wrapper">
        <div className="border  py-3">
          <div className="d-flex align-items-center justify-content-between mb-3">
            {!showSearch ? (
              <>
                <h4 className="m-0 px-3">Chat User</h4>
                <span
                  className="ms-auto text-primary"
                  style={{ cursor: "pointer" }}
                >
                  <RiUserAddFill size={23} />
                </span>
                <span
                  className="m-0 px-3 text-primary"
                  onClick={() => setShowSearch(true)}
                  style={{ cursor: "pointer" }}
                >
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
          </div>
          <hr />
          <div className="patients-list d-flex flex-column gap-2 mt-3">
            {filteredPatients.map((patient, ind) => {
              const isSelected = selectedPatient.doctorId === patient.doctorId;
              return (
                <div
                  key={ind}
                  onClick={() => {
                    setSelectedPatient(patient);
                    SetsendingToDocId(patient.doctorId);
                  }}
                  className={`d-flex align-items-center justify-content-between p-2 gap-4 rounded shadow-sm cursor-pointer position-relative ${
                    isSelected
                      ? "bg-secondary bg-opacity-75 text-white"
                      : "bg-white text-dark"
                  }`}
                  style={{
                    transition: "all 0.3s ease",
                    transform: isSelected ? "scale(1.02)" : "scale(1)",
                  }}
                >
                  {/* Avatar and Info */}
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="d-flex justify-content-center align-items-center rounded-circle bg-primary text-white fw-bold"
                      style={{
                        width: "40px",
                        height: "40px",
                        fontSize: "1rem",
                      }}
                    >
                      {patient.doctorName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div
                        className={`fw-semibold ${
                          isSelected ? "text-white" : "text-dark"
                        }`}
                      >
                        {patient.doctorName}
                      </div>
                      <div
                        className={`small text-truncate`}
                        style={{
                          maxWidth: "150px",
                          color: isSelected ? "#e0e0e0" : "#6c757d",
                        }}
                      >
                        Last message: {patient.lastMessage}
                      </div>
                    </div>
                  </div>

                  {/* Online Indicator */}
                  <div
                    className="rounded-circle border border-white me-3"
                    title={patient.online ? "Online" : "Offline"}
                    style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: patient.online ? "#28a745" : "#adb5bd",
                      boxShadow: "0 0 0 2px white",
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
          <div>
            <hr />
            <div
              className="px-3"
              onClick={() => navigate("/DoctorDashboard")}
              style={{ cursor: "pointer" }}
            >
              <BiLogOut size={27} />
            </div>
          </div>
        </div>

        {/* Chat area */}
        <div className="chat-area border">
          <div className="chat-header">
            <div className="info">
              <div className="px-3">
                <div className="name">{selectedPatient.doctorName}</div>
                <div className="status">
                  {selectedPatient.online ? "Online" : "Offline"}
                </div>
              </div>
            </div>
          </div>

          <div className="chat-body">
            {/* {messages.map((msg) => (
                               <div key={msg.id} className={`chat-message ${msg.sender === 'Doctor' ? 'sent' : 'received'}`}>
                                   {msg.sender !== 'Doctor'}
                                   <div className="bubble">{msg.text}</div>
                                   {msg.sender === 'Doctor'}
                                   <div className="time">{msg.time}</div>
                               </div>
                           ))} */}

            {/*  */}
            {currentChat.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${
                  msg.sender === "doctor" ? "sent" : "received"
                }`}
              >
                <div className="bubble">{msg.text}</div>
                <div className="time">{msg.time}</div>
              </div>
            ))}

            {/* Render sent messages */}

            {messages.map((msg, idx) => (
              <div key={idx} className="chat-message sent">
                <div className="bubble">{msg}</div>
                <div className="time">Just now</div>
              </div>
            ))}
          </div>







        <div className="chat-input ">
          {/* Label to trigger file input */}
          <label htmlFor="file-upload" className="upload-btn ">
            <MdOutlineAttachFile size={25} />
          </label>
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          {/* File input (hidden) */}
          <input
            type="file"
            id="file-upload"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />

          {/* Send message button */}
          <button onClick={handleSend}>➤</button>
        </div>



        </div>

      </div>
    </div>
  );
}

export default UserMsg;
