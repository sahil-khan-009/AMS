import { useState, useEffect } from "react";
import DoctorNavbar from "../Components/DoctorNavbar";
import "../../Doctor/PagesStyle/PatientReport.css";
import { FaUpload } from "react-icons/fa";
import { doctorApi } from "../../Api-folder/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LuView } from "react-icons/lu";
import { FiImage } from "react-icons/fi";

const PatientReport = () => {
  const [treatedPatient, SetTreatedPatient] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [file, setFile] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
const [showPdfModal, setShowPdfModal] = useState(false);//--Pdf modall--
const [selectedPdfUrl,setselectedPdfUrl] = useState('');//--Pdf url-- 




  useEffect(() => {
    completedAppointment();
  }, []);

  const handleViewImage = (url) => {
    setSelectedImageUrl(url);
    setShowImageModal(true);
  };




// pdf modal

const handleShowPdfModal = (url) => { 
  const imageUrl = url;
  setShowPdfModal(true);
  setselectedPdfUrl(imageUrl);
  console.log("PDF URL:", imageUrl);

}

function handleClosePdfModal() {
  setShowPdfModal(false);
}




  const completedAppointment = async () => {
    try {
      const response = await doctorApi.TreatedPatients();
      console.log("response of treated patients", response.data);
      if (!response.data.completedAppointments) {
        alert("No patients found");
        return;
      } else {
        SetTreatedPatient(response.data.completedAppointments);
      }
    } catch (err) {
      console.log("this is catch error", err.message);
    }
  };

  const patients = [
    {
      id: 1,
      name: "John Doe",
      reportTitle: "Blood Test",
      status: "No uploaded",
    },
    { id: 2, name: "Sarad", reportTitle: "X-Ray", status: "Uploaded" },
    {
      id: 3,
      name: "Alicia Keys",
      reportTitle: "MRI Scan",
      status: "No uploaded",
    },
    { id: 4, name: "Bob Smith", reportTitle: "CT Scan", status: "Uploaded" },
    {
      id: 5,
      name: "Clara Oswald",
      reportTitle: "Ultrasound",
      status: "No uploaded",
    },
    { id: 6, name: "David Tennant", reportTitle: "ECG", status: "Uploaded" },
    {
      id: 7,
      name: "Emma Watson",
      reportTitle: "Blood Test",
      status: "No uploaded",
    },
    { id: 8, name: "Frank Castle", reportTitle: "X-Ray", status: "Uploaded" },
    {
      id: 9,
      name: "Grace Hopper",
      reportTitle: "MRI Scan",
      status: "No uploaded",
    },
    { id: 10, name: "Hank Pym", reportTitle: "CT Scan", status: "Uploaded" },
    {
      id: 11,
      name: "Irene Adler",
      reportTitle: "Ultrasound",
      status: "No uploaded",
    },
  ];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(patients.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPatients = treatedPatient.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleUploadClick = (patient) => {
    setSelectedPatient(patient);
    // toast('Hello there!');
    setShowUploadModal(true);
    console.log("Selected patient for upload:", patient);
    console.log("Selected patient for upload:", patient._id);
  };

  const handleCloseModals = () => {
    setShowUploadModal(false);
    setSelectedPatient(null);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const extractingID = selectedPatient._id;
      const id = extractingID.toString();

      if (!file || !id) {
        return alert("Patient file or patient ID is missing");
      }

      // Create FormData
      const formData = new FormData();
      formData.append("report", file); // make sure your multer expects "report"

      const response = await doctorApi.UploadReport(id, formData);
      console.log("✅ Response of upload report:", response.data);

      // Optional: You can show success toast/message here
      toast.success("Report uploaded successfully!", {
        position: "top-center",
      });
    } catch (err) {
      console.log("❌ Catch error:", err.message);
      toast.error(`Upload failed: ${err.message}`, { position: "top-center" });
    }

    setFile(null); // Reset the file input after upload
    setShowUploadModal(false); // Close the modal
  };

  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  console.log("selectedPdfUrl------------------------------------",selectedPdfUrl)
  return (
    <div className="full-height-bg" style={{ paddingTop: "5em" }}>
      <DoctorNavbar />
      <h3 className="text-primary">Patient Report</h3>
      <hr />
      <div className="mt-1">
        <table className="table table-bordered table-hover">
          <thead className="table-header text-center">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Upload Report</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPatients.map((patient, index) => (
              <tr key={patient._id} className="text-center">
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{patient.patientName}</td>{" "}
                {/* Make sure the backend sends 'patientName' */}
                <td>
                  <span
                    style={{ cursor: "pointer", color: "#007bff" }}
                    onClick={() => handleUploadClick(patient)}
                  >
                    <FaUpload size={25} />
                  </span>
                </td>
                <td>
                  {patient.report && (
                    <>
                      {/* Generate Full URL */}
                      {(() => {
                        const BASE_URL =
                          "https://backend-node-5tca.onrender.com/";
                        const fullUrl =  patient.report;
                        console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkk",selectedImageUrl)

                        return patient.report.endsWith(".png") ||
                          patient.report.endsWith(".jpg") ||
                          patient.report.endsWith(".jpeg") ? (
                          <button
                            className="btn border-0 bg-transparent"
                            onClick={() => handleViewImage(fullUrl)}
                          >
                        
                          <FiImage size={22}/>

                          </button>
                        ) : (
                          <span
                          // href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleShowPdfModal(fullUrl); // pass the PDF URL here
                          }}
                        >
                         <LuView size={22} />
                        </span>
                        
                        );
                      })()}
                    </>
                  )}
                </td>
                {/* status should also come from API */}
              </tr>
            ))}
          </tbody>
        </table>
        

        {/* Pagination Controls */}
        <div className="d-flex justify-content-center align-items-center mt-3">
          <button
            className="btn btn-outline-primary mx-1"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={`btn mx-1 ${
                currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => changePage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="btn btn-outline-primary mx-1"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <>
          {/* Backdrop */}
          <div className="modal-backdrop fade show"></div>

          {/* Modal */}
          <div
            className="modal d-block"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="modal-dialog modal-dialog" role="document">
              <div className="modal-content bg-light">
                <form onSubmit={handleUpload}>
                  <div className="modal-header">
                    <h5 className="modal-title">
                      Upload Report for {selectedPatient?.patientName}
                    </h5>
                    <button
                      type="button"
                      className="close ms-auto"
                      onClick={handleCloseModals}
                    >
                      <span>&times;</span>
                    </button>
                  </div>

                  <div className="modal-body">
                    <div className="form-group">
                      {/* <label htmlFor="reportTitle">Report Title</label> */}
                      {/* <input
                        type="text"
                        id="reportTitle"
                        className="form-control"
                        placeholder="Enter report title"
                        required
                      /> */}
                    </div>

                    <div className="form-group mt-3">
                      <label htmlFor="reportFile">Upload Report File</label>
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => setFile(e.target.files[0])}
                        id="reportFile"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">
                      Upload
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCloseModals}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}

      {/* View Image Modal */}
      {showImageModal && (
        <>
          <div className="modal-backdrop fade show"></div>

          <div
            className="modal d-block"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              style={{ maxHeight: "90vh", overflowY: "auto" }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">View Report Image</h5>
                  <button
                    type="button"
                    className="close ms-auto"
                    onClick={() => setShowImageModal(false)}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body d-flex justify-content-center">
                  <img
                    src={selectedImageUrl}
                    alt="Report Image"
                    style={{ maxWidth: "100%", maxHeight: "30em" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Pdf modal */}



      {showPdfModal && (
  <>
    <div className="modal-backdrop fade show"></div>
    <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">View Report</h5>
            <button type="button" className="close" onClick={handleClosePdfModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body" style={{ height: "500px" }}>
  <iframe
    src={selectedPdfUrl}
    title="PDF Report"
    width="100%"
    height="100%"
    style={{ border: "none" }}
  />
</div>

        </div>
      </div>
    </div>
  </>
)}


      
    </div>
  );
};

export default PatientReport;