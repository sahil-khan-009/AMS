import React from 'react'
import '../PagesStyles/Home.css';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import CoverImage from "/src/assets/laptop1.png";
import CoverImage4 from "/src/assets/app.jpg";
import CoverImage1 from "/src/assets/Doctor_Appointment.png";
import CoverImage2 from "/src/assets/Doctor_Appointment1.png";
import CoverImage3 from "/src/assets/Doctor_Appointment3.png";


const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="hero-section">
        <div className="container">
          <h1>Welcome to Appointment Management System</h1>
          <p>The Appointment Management System is a web application that allows users to schedule, manage,
            and view appointments. It provides an easy-to-use interface for clients to book and keep track
            of appointments.

          </p>
          <a href="/" className="btn btn-primary btn-lg mt-3">Explore About</a>
        </div>
      </section>
      <div className='bg bg-white'>
        <section className="main text-center">
          <div className="container">
            <h2 className="content-title display-5 mt-4">What is Appointment Management System</h2>
          </div>
        </section>
        <div className="container content-section">
          <div className="row ">

            <div className="col-lg-7">
              <p>
                A doctor appointment booking system is an online platform that automates scheduling,reminders,
                and cancellations. It lets patients book or reschedule appointments 24/7,reducing wait times
                and easing the workload for healthcare staff.Patients can book appointments directly online,
                choosing available time slots with their preferred doctor.Automated notifications sent to
                patients via text or email to remind them about upcoming appointments.Patients can easily cancel
                or reschedule appointments online, with the system updating availability accordingly.
              </p>
              <h4>Features of Online Library Management System</h4>
              <ul className="content-features">
                <li>Patient self-scheduling</li>
                <li>Appointment reminders</li>
                <li>Cancellation management</li>
                <li>Calendar integration</li>
                <li>Manage all information online</li>
                <li>Easy to maintain records</li>
                <li>Patient information access</li>
              </ul>
            </div>

            <div className="col-lg-5">
              <img
                src={CoverImage4}
                alt="Library Image"
                className="img-fluid rounded"
              />
            </div>

          </div>
        </div>
      </div>

      <section className='middle-section py-5'>
        <div className='container text-center'>
          <h2 className='text-center mb-4'>Advanced booking features to help you put your business on autopilot</h2>
          <p>With Appointy’s online booking software say goodbye to your pen-paper appointment book, save time, reduce no shows, and increase staff productivity</p>
          <div>
            <img
              src={CoverImage}
              alt="Appointment image"
              className='fluid d-block mx-auto'
            />
          </div>
        </div>
      </section>


      <section className="last-section py-2">
        <div className="container">
          <h2 className="text-center mb-4">Featured AMS</h2>
          <div className="row g-4">

            <div className="col-md-4">
              <div className="card">
                <img
                  src={CoverImage2}
                  className="card-img-top"
                  alt="Book Cover"
                />
                <div className="card-body">
                  <h5 className="card-title">Book Your Appointment</h5>
                  <p className="card-text">Schedule your appointment easily with our online booking system.</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src={CoverImage1}
                  className="card-img-top"
                  alt="Book Cover"
                />
                <div className="card-body">
                  <h5 className="card-title">Book Your Appointment</h5>
                  <p className="card-text">Schedule your appointment easily with our online booking system.</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src={CoverImage3}
                  className="card-img-top"
                  alt="Book Cover"
                />
                <div className="card-body">
                  <h5 className="card-title">Book Your Appointment</h5>
                  <p className="card-text">Schedule your appointment easily with our online booking system.</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home