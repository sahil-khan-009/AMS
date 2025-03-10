import React from "react";
import "../../Admin/ComponentStyles/Adminnav.css";
import { FaUserAlt } from "react-icons/fa";

const Adminnav = ({ adminName = "Admin" }) => {
  return (
    <nav className="navbar col-lg-10 navbar-light bg-white shadow fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">AMS</span>
        <div className="d-flex align-items-center text-dark">
          <FaUserAlt className="me-2" />
          <span>{adminName}</span>
        </div>
      </div>
    </nav>
  );
};

export default Adminnav;
