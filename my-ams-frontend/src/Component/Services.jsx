import React from 'react'
import '../ComponentStyle/Services.css';
import { FaCheckCircle } from "react-icons/fa";


const Services = () => {
  return (
    <div className='services'>
      <h1 className="text-decoration-underline text-center">Our Services</h1>
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow px-5 py-5">
              <div className="card-body">
                <h2 className="card-title text-primary">Dental Department</h2>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center">
                    <i className="text-primary me-2"><FaCheckCircle /></i>
                    Ac amet in adipiscing in sed sit eget. Aliquam suspendisse viverra varius
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="text-primary me-2"><FaCheckCircle /></i>
                    Ac justo, elementum sed nec consequat odio velit, imperdiet eu risus eget.
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="text-primary me-2"><FaCheckCircle /></i>
                    Nunc in senectus bibendum ut dictum
                  </li>
                </ul>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary">Book a visit</button>
                  <span>or call us: <a href="tel:+923554999788" className="text-primary">+923554999788</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="https://storage.googleapis.com/a1aa/image/kjeqHh3-wGVd6JuAN6mSsOuNeFss_Si80TVHpCZ2QuM.jpg" alt="Dentist working on a patient's teeth" className="img-fluid rounded shadow" />
          </div>

          <div className="col-md-6">
            <img src="https://storage.googleapis.com/a1aa/image/OGqNNNJQNrjILDqF0MnpCQOmfj3j-UcwOqElrwxKwHo.jpg" alt="Doctor checking a patient's blood pressure" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <div className="card shadow px-5 py-5">
              <div className="card-body">
                <h2 className="card-title text-primary">Cardiology</h2>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center">
                    <i className="text-primary me-2"><FaCheckCircle /></i>
                    Ac amet in adipiscing in sed sit eget. Aliquam suspendisse viverra varius
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="text-primary me-2"><FaCheckCircle /></i>
                    Ac justo, elementum sed nec consequat odio velit, imperdiet eu risus eget.
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="text-primary me-2"><FaCheckCircle /></i>
                    Nunc in senectus bibendum ut dictum
                  </li>
                </ul>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary">Book a visit</button>
                  <span>or call us: <a href="tel:+923554999788" className="text-primary">+923554999788</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 py-4">
          <div className="col-md-6">
            <div className="card shadow px-5 py-5">
              <div className="card-body">
                <h2 className="card-title text-primary"> X-Ray</h2>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center">
                    <i className="text-primary me-2"><FaCheckCircle /></i>
                    Ac amet in adipiscing in sed sit eget. Aliquam suspendisse viverra varius
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="text-primary me-2"><FaCheckCircle /></i>
                    Ac justo, elementum sed nec consequat odio velit, imperdiet eu risus eget.
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="text-primary me-2"><FaCheckCircle /></i>
                    Nunc in senectus bibendum ut dictum
                  </li>
                </ul>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary">Book a visit</button>
                  <span>or call us: <a href="tel:+923554999788" className="text-primary">+923554999788</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="https://storage.googleapis.com/a1aa/image/xAuv1HiD7Ft2enZos7TXLXGy-9-Wwyuyjl_NMZZxyfI.jpg" alt="Doctors examining X-ray images" className="img-fluid rounded shadow" />
          </div>

          <div className="col-md-6">
            <img src="https://storage.googleapis.com/a1aa/image/rMCMLjrPKRH97udTh4cnJltwI2OpY80pIUsQNbYn44Y.jpg" alt="A person holding a hearing aid device" className="img-fluid rounded shadow" />

          </div>
          <div className="col-md-6">
            <div className="card shadow px-5 py-5">
              <div className="card-body">
                <h2 className="card-title text-primary">Ear treatment</h2>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center">
                    <i className="text-primary me-2"><FaCheckCircle /></i>
                    Ac amet in adipiscing in sed sit eget. Aliquam suspendisse viverra varius
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="text-primary me-2"><FaCheckCircle /></i>
                    Ac justo, elementum sed nec consequat odio velit, imperdiet eu risus eget.
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="text-primary me-2"><FaCheckCircle /></i>
                    Nunc in senectus bibendum ut dictum
                  </li>
                </ul>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary">Book a visit</button>
                  <span>or call us: <a href="tel:+923554999788" className="text-primary">+923554999788</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
