import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiService } from "../Api-folder/Api";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../Component/Navbar'
import { useAppointment } from "../context/AppointmentContext";
const Register = () => {
  const [name, SetName] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [message, SetMessage] = useState("");

const { navBarConfig, SetNavBarConfig} =useAppointment();

  const navigate = useNavigate();



useEffect(()=>{
  SetNavBarConfig(false);
},[])

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const result = await apiService.register(name, email, password);
      console.log("registerResult-------", result);
      SetMessage(result.data.message);
      if (result.data.message === "User created successfully") {
        navigate("/UserDashboard");
      }
    } catch (err) {
      console.log("This is catch error------", err);
      if (err.response.data === "You already have an account. Please login.") {
        toast.success(`You  already have an account : Please Login`, {
          position: "top-center",
        });
      }
    }
  };

  return (

    
    <form onSubmit={registerUser}>

      <div className="login-container">

        <div>

          <Navbar/>
        </div>
        <div className="login-box">
          <div className="left-panel">
            <h2>Sign Up</h2>
            {message && (
              <div
                className={`alert ${
                  message === "User created successfully"
                    ? "alert-primary"
                    : "alert-warning"
                }`}
                role="alert"
              >
                {message}
              </div>
            )}

            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              onChange={(e) => SetName(e.target.value)}
              onKeyPress={(e) => {
                const regex = /^[a-zA-Z\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]*$/; // Allow only letters and spaces
                if (!regex.test(e.key)) {
                  e.preventDefault(); // Prevent invalid characters from being typed
                }
              }}
            />

            <label htmlFor="useremail">Useremail</label>
            <input
              type="email"
              id="useremail"
              placeholder="Enter your useremail"
              onChange={(e) => Setemail(e.target.value.toLowerCase())}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => Setpassword(e.target.value)}
              maxLength={8}
            />

            <button type="submit" className="btn-Signin">
              Sign Up
            </button>
          </div>

          <div className="right-panel">
            <h2>Welcome!</h2>
            <h2>Create your account</h2>
            <p>Already have an account?</p>
            <Link to="/Login">
              <button>Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;

// import React from "react";
// import "../PagesStyles/Signup.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";
// function Signup() {
//   const [name, SetName] = useState("");
//   const [email, Setemail] = useState("");
//   const [password, Setpassword] = useState("");
//   const [message, SetMessage] = useState("");

//   const registerUser = async (e) => {
//     e.preventDefault();
//     try {
//       await axios
//         .post(
//           "http://localhost:4000/api/auth/register",
//           {
//             userName: name, // Map frontend state variables to backend fields
//             userEmail: email,
//             userPassword: password,
//           },
//           { withCredentials: true }
//         )
//         .then((result) => {
//           console.log("result", result);
//           if (result && result.data) {
//             const message = result.data;
//             SetMessage(message);
//             console.log("user message------", message);
//           }
//         });
//     } catch (err) {
//       console.log(
//         "Error during registration",
//         err.response?.data || err.message
//       );
//       SetMessage(err.response?.data || err.message);
//       console.log(message);
//     }
//   };

//   return (
//     <>
//       <div className="background-container">
//         <div className="signup-container">
//           {message && (
//             <div
//               className={`alert ${
//                 message === "User created successfully"
//                   ? "alert-primary"
//                   : "alert-warning"
//               }`}
//               role="alert"
//             >
//               {message}
//             </div>
//           )}

//           <h3>User SignUp</h3>
//           <form onSubmit={registerUser}>
//             <div className="form-group">
//               <label className="form-label">User Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter User Name"
//                 required
//                 onChange={(e) => SetName(e.target.value)}
//                 onKeyPress={(e) => {
//                   const regex = /^[a-zA-Z\s]$/; // Allow only letters and spaces
//                   if (!regex.test(e.key)) {
//                     e.preventDefault(); // Prevent invalid characters from being typed
//                   }
//                 }}
//               />
//             </div>
//             <div className="form-group">
//               <label className="form-label">User Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter User Email"
//                 required
//                 onChange={(e) => Setemail(e.target.value.toLowerCase())}
//               />
//             </div>
//             <div className="form-group">
//               <label className="form-label">User Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Enter User Password"
//                 required
//                 onChange={(e) => Setpassword(e.target.value)}
//                 maxLength={8}
//               />
//             </div>
//             <button type="submit" className="btn-submit">
//               Register
//             </button>
//           </form>
//           <p className="footer-text">
//             Already have an account? <Link to="/login">Login</Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Signup;

// try {
//   await axios
//     .post(
//       "https://backend-node-5tca.onrender.com/api/auth/register",
//       {
//         userName: name, // Map frontend state variables to backend fields
//         userEmail: email,
//         userPassword: password,
//       },
//       { withCredentials: true }
//     )
//     .then((result) => {
//       console.log("result", result);
//       if (result && result.data) {
//         const message = result.data;
//         SetMessage(message);
//         console.log("user message------", message);
//       }
//     });
// } catch (err) {
//   console.log(
//     "Error during registration",
//     err.response?.data || err.message
//   );
//   SetMessage(err.response?.data || err.message);
//   console.log(message);
// }
