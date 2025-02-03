import React from 'react'
import '../ComponentStyle/Footer.css';
const Footer = () => {
  return (
    <div>
      <footer className="footer mt-5">
        <div className="container">
            <div className="row">
               
                <div className="col-md-4">
                    <h5>Appointment Management</h5>
                    <p>Making your appointments easier with a seamless booking experience.</p>
                </div>
                
                <div className="col-md-4">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Book Appointment</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>Contact Us</h5>
                    <p>Email: support@appointmentsystem.com</p>
                    <p>Phone: +123 456 7890</p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom mt-4">
                <p>&copy; 2024 Appointment Management System | All Rights Reserved</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
