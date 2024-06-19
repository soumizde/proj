```
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Mock API call
        if (password === 'password123') { // Replace with actual API call logic
            // Store authenticated status, e.g., in local storage or a context
            localStorage.setItem('authenticated', 'true');
            navigate('/home'); // Redirect to the homepage
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
```
