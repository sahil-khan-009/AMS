import React from 'react'
import '../ComponentStyle/Contactus.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import logo1 from '../assets/logo1.png'





const Contactus = () => {
  return (
    <div className='contactus'>
      {/* <h1 className="text-decoration-underline text-center">Contact Us</h1> */}
    <div className="container py-5 ">
        <div className="row contact-form justify-content-center">
            <div className="col-lg-10 shadow">
                <div className="p-4">
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <p className="text-center">We would love to hear from you! Feel free to reach out.</p>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img src="https://storage.googleapis.com/a1aa/image/R4u1_h13uekYM2Ri_bIzPLLi0THLxdZSEw3tagK0xzA.jpg" className="img-fluid rounded mb-4" alt="Illustration of a person scheduling an appointment"/>
                        </div>
                        <div className="col-md-6">
                            <form className='contact-form'>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="tel" className="form-control" id="phone" name="phone" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">Preferred Date</label>
                                    <input type="date" className="form-control" id="date" name="date" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <footer className="footer text-center text-md-start">
        <div className="container">
            <div className="row">
                <div className="col-md-3 text-center text-md-start mb-3 ms-3">
                    <h4> <img src={logo1} alt="Labops Logo" width="40"/> AMS</h4>
                    <div className="social-icons mt-3">
                        <a href="#"><i><FaXTwitter /></i></a>
                        <a href="#"><i><FaFacebookF /></i></a>
                        <a href="#"><i><IoLogoYoutube /></i></a>
                        <a href="#"><i><BsInstagram /></i></a>
                    </div>
                </div>
                <div className="col-md-2">
                    <h5>Product</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Legal Details</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Contact Info</h5>
                    <p>Lake Town, Kolkata, West Bengal, 700089</p>
                    <p>+91 900 2841 677</p>
                    <p>contact@ams.in</p>
                </div>
            </div>
            <div className="text-center mt-3">
                <p>&copy; 2024 AMS. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Contactus
