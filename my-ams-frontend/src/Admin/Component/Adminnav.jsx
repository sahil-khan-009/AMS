import React from "react";
import "../../Admin/ComponentStyles/Adminnav.css";
import { FaUserAlt } from "react-icons/fa";


const Adminnav = () => {
  return (
    <div className="d-flex justify-content-end">
      <div className="w-75">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top" style={{marginLeft:"15.5em"}}>
          <div className="container-fluid">
            <span className="navbar-brand fw-bold">AMS</span>
            <div className="ms-auto d-flex align-items-center text-dark">
              <FaUserAlt className="me-2" />
              <span>Sahil Khan</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Adminnav;
