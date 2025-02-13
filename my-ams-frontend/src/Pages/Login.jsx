// import React from 'react';
import '../PagesStyles/Login.css';
import { Link,useNavigate } from "react-router-dom";
// import axios from 'axios'
import { useState } from "react"
import apiService from '../Api-folder/Api';


const Login = () => { // Correctly define the component here
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
      e.preventDefault();
      try{
        const result = await apiService.login(email, password);
        console.log("loginResult-------",result);

        sessionStorage.setItem("token", result.data.token);
        if(result.data.token){
          navigate('/UserDashboard');
        }

      }catch(err){
        console.log("Login failded: this is catch error----------",err);

      }
      
  };

  return (
      <div className="login-container">
          <div className="login-box">
              <div className="left-panel">
                  <form onSubmit={loginUser}>
                      <h2>Sign In</h2>

                      <label htmlFor="username">Useremail</label>
                      <input type="email" id="username" placeholder="Enter your username" onChange={(e) => Setemail(e.target.value)} />

                      <label htmlFor="password">Password</label>
                      <input type="password" id="password" placeholder="Enter your password" onChange={(e) => Setpassword(e.target.value)} />

                      <button className='btn-Signin' type="submit">Sign In</button>
                  </form>

                  <div className="remember-me">
                      <a href="#">Forget Password?</a>
                  </div>
              </div>

              <div className="right-panel">
                  <h2>Welcome to login!</h2>
                  <p>Don't have an account?</p>
                  <Link to="/register"><button>Sign Up</button></Link> {/* Use Link component */}
              </div>
          </div>
      </div>
  );
}

export default Login;