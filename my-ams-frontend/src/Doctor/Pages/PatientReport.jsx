import { useState } from "react";
import DoctorNavbar from '../Components/DoctorNavbar';
import '../../Doctor/PagesStyle/PatientReport.css';
import { FaUpload } from "react-icons/fa";

const PatientReport = () => {
  const patients = [
    { id: 1, name: "John Doe", reportTitle: "Blood Test", status: "No uploaded" },
    { id: 2, name: "Sarad", reportTitle: "X-Ray", status: "Uploaded" },
    { id: 3, name: "Alicia Keys", reportTitle: "MRI Scan", status: "No uploaded" },
    { id: 4, name: "Bob Smith", reportTitle: "CT Scan", status: "Uploaded" },
    { id: 5, name: "Clara Oswald", reportTitle: "Ultrasound", status: "No uploaded" },
    { id: 6, name: "David Tennant", reportTitle: "ECG", status: "Uploaded" },
    { id: 7, name: "Emma Watson", reportTitle: "Blood Test", status: "No uploaded" },
    { id: 8, name: "Frank Castle", reportTitle: "X-Ray", status: "Uploaded" },
    { id: 9, name: "Grace Hopper", reportTitle: "MRI Scan", status: "No uploaded" },
    { id: 10, name: "Hank Pym", reportTitle: "CT Scan", status: "Uploaded" },
    { id: 11, name: "Irene Adler", reportTitle: "Ultrasound", status: "No uploaded" }
  ];

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(patients.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPatients = patients.slice(indexOfFirstItem, indexOfLastItem);

  const handleUploadClick = (patient) => {
    setSelectedPatient(patient);
    setShowUploadModal(true);
  };

  const handleCloseModals = () => {
    setShowUploadModal(false);
    setSelectedPatient(null);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    alert(`Successfully uploading report for ${selectedPatient.name}`);
    setShowUploadModal(false);
  };

  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="full-height-bg" style={{ paddingTop: '5em' }}>
      <DoctorNavbar />
      <h3 className='text-primary'>Patient Report</h3>
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
              <tr key={patient.id} className="text-center">
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{patient.name}</td>
                <td>
                  <span
                    style={{ cursor: "pointer", color: "#007bff" }}
                    onClick={() => handleUploadClick(patient)}
                  >
                    <FaUpload size={25} />
                  </span>
                </td>
                <td>{patient.status}</td>
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
              className={`btn mx-1 ${currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"}`}
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
    <div className="modal d-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-dialog" role="document">
        <div className="modal-content bg-light">
          <form onSubmit={handleUpload}>
            <div className="modal-header">
              <h5 className="modal-title">Upload Report for {selectedPatient?.name}</h5>
              <button type="button" className="close ms-auto" onClick={handleCloseModals}>
                <span>&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="reportTitle">Report Title</label>
                <input
                  type="text"
                  id="reportTitle"
                  className="form-control"
                  placeholder="Enter report title"
                  required
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="reportFile">Upload Report File</label>
                <input
                  type="file"
                  id="reportFile"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">Upload</button>
              <button type="button" className="btn btn-secondary" onClick={handleCloseModals}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
)}

    </div>
  );
};

export default PatientReport;
