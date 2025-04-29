import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import login from "./assets/login.jpg"; // ✅ Ensure this file exists

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", { email, password });
      alert(res.data.message);
      localStorage.setItem("token", res.data.token); // ✅ Save token in local storage
      navigate("/dashboard"); // ✅ Redirect after login success
    } catch (err) {
      alert("Login failed! Check your credentials.");
    }
  };

  return (
    <div className="login-container">
      {/* ✅ Background Image */}
      <img src={login} alt="Login Background" className="login-image" />

      {/* ✅ Login Form */}
      <div className="login-form">
        <h2 className="is">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="vsa" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
