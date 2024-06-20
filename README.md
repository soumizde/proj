```
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
