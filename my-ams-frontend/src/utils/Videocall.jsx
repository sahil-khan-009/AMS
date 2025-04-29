import React, { useEffect, useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { videoCallApi } from "../Api-folder/Api";

const VideoCall = () => {
  const { appointmentId } = useParams();
  const [searchParams] = useSearchParams();
  const videoCallLink = searchParams.get("link");
  const jitsiRef = useRef(null); // 👈 useRef instead of getElementById



// useEffect( async () => {   
//     try {
//         const response = await videoCallApi.conferenceLeft(appointmentId);
//         console.log("Response from dusre useEffect me hit hua chal to raha hai:", response.data);
//       } catch (err) {
//         console.error("Error in conferenceLeft:", err);
//       }
    

// },[appointmentId]);

useEffect(() => {
    if (!videoCallLink || !jitsiRef.current) return;
  
    const domain = "meet.jit.si";
    const roomName = videoCallLink.split("/").pop();
  
    const options = {
      roomName,
      width: "100%",
      height: 600,
      parentNode: jitsiRef.current,
    };
  
    const api = new window.JitsiMeetExternalAPI(domain, options);
  
    api.addEventListener("participantJoined", async () => {
      console.log("Call Ended");
  
      try {
        console.log('hit ------------------------ hua')
        const response = await videoCallApi.conferenceLeft(appointmentId);
        console.log("Response from participantJoined:", response.data);
      } catch (err) {
        console.error("Error in participantJoined:", err);
      }
    });
  
    return () => {
      if (api && typeof api.dispose === "function") {
        api.dispose(); // ✅ Safe cleanup
      }
    };
  }, [appointmentId, videoCallLink]);
  

  return <div id="jitsi-container" ref={jitsiRef} />; // 👈 attach ref
};

export default VideoCall;
