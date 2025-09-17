import React, { useState, useEffect } from "react";
import { apiService } from "../Api-folder/Api";
import { VscReport } from "react-icons/vsc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardNav from "../Component/DashboardNav";

function UserReport() {
  const [completed, SetCompleted] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportUrl, SetReportUrl] = useState("");

  useEffect(() => {
    copmleteAppointment();
  }, []);

  const copmleteAppointment = async () => {
    try {
      const response = await apiService.completedAppointment();
      console.log("Response from completed appointment", response);
      if (response.data) {
        SetCompleted(response.data.completedAppointments);
      }
    } catch (err) {
      console.error("This is a catch error", err);
    }
  };
  const handleClick = (app) => {
    const url = app.report; // ✅ use app.report instead of app.reportUrl
  
    if (!url) {
      toast.error("Report URL is undefined", { position: "top-center" });
      return;
    }
  
    SetReportUrl(url);
    setIsModalOpen(true);
  
    console.log("Report URL:", url);
  };
  
  

  const handleCloseModal = () => {
    setIsModalOpen(false);
    SetReportUrl("");
  };
  useEffect(() => {
    if (reportUrl) {
      console.log("Updated reportUrl:", reportUrl);
    }
  }, [reportUrl]);
  

  const isImage = (url) => {
    return url?.match(/\.(jpeg|jpg|png)$/i);
  };
  console.log("Report URL:-------------", reportUrl);
  return (
    <div className="full-height-bg" style={{ paddingTop: "5em" }}>
      <DashboardNav/>
      <h3 className="text-primary"> Report</h3>
      <hr />
      <table className="table  table-striped table-hover table-bordered">
        <thead>
          <tr className="text-center">
            <th scope="col">sr_no</th>
            <th scope="col">Patient Name</th>
            <th scope="col">Appointment mode</th>
            <th scope="col">Reports</th>
          </tr>
        </thead>
        <tbody>
          {completed.length > 0 ? (
            completed.map((app, ind) => (
              <tr key={app._id} className="text-center">
                <td>{ind + 1}</td>
                <td>{app.patientName}</td>
                <td>{app.mode}</td>
                <td onClick={() => handleClick(app)} className="cursor-pointer">
                  <VscReport size={22} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <>
          <div className="modal-backdrop fade show"></div>
          <div
            className="modal d-block"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {isImage(reportUrl)
                      ? "View Report Image"
                      : "View Report PDF"}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={handleCloseModal}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div
                  className="modal-body d-flex justify-content-center"
                  style={{ height: "500px" }}
                >
                  {isImage(reportUrl) ? (
                    <img
                      src={reportUrl}
                      alt="Report"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  ) : (
                    <iframe
                      src={reportUrl}
                      title="PDF Report"
                      width="100%"
                      height="100%"
                      style={{ border: "none" }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserReport;
