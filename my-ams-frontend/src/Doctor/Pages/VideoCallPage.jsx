import { useParams } from "react-router-dom";

const VideoCallPage = () => {
  const { roomId } = useParams();
  const videoCallLink = `https://meet.jit.si/${roomId}`;

  return (
    <div className="container mt-3">
      <h3>Video Call Room</h3>
      <iframe
        src={videoCallLink}
        allow="camera; microphone; fullscreen; display-capture"
        style={{ width: "100%", height: "90vh", border: "none" }}
        title="Video Call"
      ></iframe>
    </div>
  );
};

export default VideoCallPage;
