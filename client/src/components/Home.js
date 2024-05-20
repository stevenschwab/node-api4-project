import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../assets/user-logo.png";

function Home() {
    return (
    <div className="home-container">
      <div className="home-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="home-content">
        <h1>Happening now</h1>
        <h2>Join today.</h2>
        <div className="sign-up-options">
          <Link to="/register" className="create-account">Create account</Link>
        </div>
        <div className="terms">
          <p>
            By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.
          </p>
        </div>
        <div className="login-link">
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </div>
    </div>
    );
}

export default Home;