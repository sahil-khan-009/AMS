import React from "react";
import "../../Admin/ComponentStyles/Adminnav.css";
import { FaUserAlt } from "react-icons/fa";


const Adminnav = () => {
  return (
    <div className="d-flex">
      <div className=" me-auto p-0 m-0">
        <nav className="navbar col-lg-10 navbar-light bg-white shadow fixed-top ms-auto">
          <div className="container-fluid">
            <span className="navbar-brand fw-bold">AMS</span>
            <div className=" d-flex align-items-center text-dark">
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
