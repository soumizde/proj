```

.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.image-container {
  margin-bottom: 20px;
}

.home-image {
  width: 150px;
  height: 150px;
}

.login-button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}


import React from 'react';
import './Home.css';
import { ReactComponent as HomeSVG } from './home.svg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <HomeSVG className="home-image" />
      </div>
      <button className="login-button">Login</button>
    </div>
  );
};

export default Home;

import React from 'react';
import './LoginPage.css'; // Optional, if you want to add custom styles

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="svg-container" dangerouslySetInnerHTML={{ __html: svgContent }} />
      <button className="login-button">Login</button>
    </div>
  );
};

// SVG content as a JavaScript string
const svgContent = `
<svg width="1808" height="552" viewBox="0 0 1808 552" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M93.4614 386.469C133.186 339.807 172.91 316.475 212.636 316.475C272.222 316.475 305.956 353.517 349.604 332.73C393.252 311.943 653.84 166.352 809.198 211.359C970.281 258.025 1141.15 229.213 1321.8 124.923L1706.68 200.772C1510.89 320.849 1377.25 391.462 1305.78 412.611C1067.29 483.179 855.829 453.477 762.319 400.448C638.146 330.029 418.592 452.433 343.441 429.138C268.29 405.843 254.76 38
</svg>
`;

export default LoginPage;



// src/InfoIcon.js
import React from 'react';
import './InfoIcon.css';

const InfoIcon = ({ message }) => {
  return (
    <div className="info-icon-container">
      <span className="info-icon">i</span>
      <span className="info-tooltip">{message}</span>
    </div>
  );
};

export default InfoIcon;


/* src/InfoIcon.css */
.info-icon-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-left: 5px;
}

.info-icon {
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 14px;
  text-align: center;
  width: 20px;
  height: 20px;
  display: inline-block;
  line-height: 20px; /* Vertically center the text */
}

.info-tooltip {
  visibility: hidden;
  width: 160px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position the tooltip above the icon */
  left: 50%;
  margin-left: -80px; /* Center the tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

.info-tooltip::after {
  content: "";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent; /* Arrow pointing down */
}

.info-icon-container:hover .info-tooltip {
  visibility: visible;
  opacity: 1;
}




.tooltip-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}

.tooltip-container .tooltip-text {
  visibility: hidden;
  width: 200px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Adjust this value according to your design */
  left: 50%;
  margin-left: -100px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip-container:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}





/* Login.css */
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
}

.login-form {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

.login-form h1 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #333;
}

.login-form label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
}

.login-form select,
.login-form input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login-form button {
    width: 100%;
    padding: 0.5rem;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
}

.login-form button:hover {
    background-color: #0056b3;
}





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Mock API call or password check
        if (password === 'password123') { // Replace with actual API call logic
            localStorage.setItem('authenticated', 'true');
            navigate('/');
        } else {
            alert('Invalid password');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>
                        Select Role:
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="">Select...</option>
                            <option value="Financial Advisor">Financial Advisor</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;



import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import CustomerNavigation from "./pages/CustomerNavigation";
import ProductAnalytics from "./pages/ProductAnalytics";
import NoPage from "./pages/NoPage";
import Login from './components/Login';

function App() {
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';

  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated ? (
          <Route path="*" element={<Login />} />
        ) : (
          <Route path="/" element={<Navbar />}>
            <Route index element={<Dashboard />} />
            <Route path="customer-navigation" element={<CustomerNavigation />} />
            <Route path="product-analytics" element={<ProductAnalytics />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;



```
