```
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
