// import React from 'react';
import '../PagesStyles/Login.css';
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react"

const Login = () => {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {

    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          // Map frontend state variables to backend fields
          userEmail: email,
          userPassword: password,
        },
        { withCredentials: true }
      ).then((result)=>{
        console.log("loginResult-------",result);
      })
      navigate('/UserDashboard');
    } catch (err) {
        console.log("this is catch error",err);
    }
  };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="left-panel">
                <form onSubmit={loginUser}>
                    <h2>Sign In</h2>

                    <label htmlFor="username">Useremail</label>
                    <input  type="email" id="username" placeholder="Enter your username"  onChange={(e) => Setemail(e.target.value)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password"  onChange={(e) => Setpassword(e.target.value)}/>

                    <button className='btn-Signin'  type="submit">Sign In</button>
                    </form>

                    <div className="remember-me">
                      
                        <a href="#">Forget Password?</a>
                    </div>
                </div>

                <div className="right-panel">
                    <h2>Welcome to login!</h2>
                    <p>Don't have an account?</p>
                    <Link to="/register"><button >Sign Up</button></Link>
                   
                </div>
            </div>
        </div>
    );
}

export default Login;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../PagesStyles/Login.css";
// import axios from "axios";

// function Login() {
//   const [email, Setemail] = useState("");
//   const [password, Setpassword] = useState("");
//   const navigate = useNavigate();

//   const loginUser = async (e) => {

//     e.preventDefault();
//     try {
//       await axios.post(
//         "http://localhost:4000/api/auth/login",
//         {
//           // Map frontend state variables to backend fields
//           userEmail: email,
//           userPassword: password,
//         },
//         { withCredentials: true }
//       ).then((result)=>{
//         console.log("loginResult-------",result);
//       })
//       navigate('/Userdashboard');
//     } catch (err) {
//         console.log("this is catch error",err);
//     }
//   };

//   return (
//     <div>
//       <div className="background-container">
//         <div className="signin-container">
//           <h3>User Login</h3>
//           <form onSubmit={loginUser}>
//             <div className="form-group">
//               <label className="form-label">User Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter User Email"
//                 required
//                 onChange={(e) => Setemail(e.target.value)}
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
//               />
//             </div>
//             <button type="submit" className="btn-submit">
//               Login
//             </button>
//           </form>
//           <p className="footer-text">
//             Create an account? <Link to="/signup">SignUp</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
