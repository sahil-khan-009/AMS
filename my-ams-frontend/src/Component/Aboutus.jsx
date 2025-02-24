import React from 'react'
import '../ComponentStyle/Aboutus.css';
import image1 from '../assets/image1.jpg';


const Aboutus = () => {
  return (
    <div className='aboutus'>
      <h1 className="text-decoration-underline text-center mt-5">About Us</h1>
      <div className="container about-section">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>About Us</h2>
            <p>Welcome to our Appointment Management System. We are dedicated to providing the best service to manage your appointments efficiently and effectively.
              Our system is designed to help you schedule, manage, and track your appointments with ease. Whether you are a small business or a large enterprise, our solution is tailored to meet your needs.
              Our team is composed of experienced professionals who are passionate about delivering high-quality solutions to our clients. We believe in continuous improvement and are always looking for ways to enhance our system to better serve you.We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice.</p>
            <div className="feature-box">
              <span className="icon">&#10047;</span> <strong>20+ years of excellence</strong>
            </div>
            <div className="feature-box">
              <span className="icon">&#10047;</span> <strong>Professional Experts</strong>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <div className="info-box" style={{ top: '10px', left: '20px', background: '#eef' }}><strong>24hr Emergency</strong><br />Emergency available all day and night</div>
            <img src={image1} className="img-fluid rounded w-60 h-60 " style={{ marginLeft: '50px' }} alt="Doctors Consultation" />
            <div className="info-box" style={{ bottom: '10px', right: '20px', background: '#fee' }}><strong>Free Consultation</strong><br />Consultation with the best</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
