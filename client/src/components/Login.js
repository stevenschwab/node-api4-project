import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/api/login', {username, password});
            localStorage.setItem('token', response.data.token);
            setError(null)
            navigate('/users');
        } catch (err) {
            setError(err.response.data.message)
        }
    }

    return (
        <div>
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 placeholder="Username"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                />
                <input
                 type="text"
                 placeholder="Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Log In</button>
            </form>
            <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
        </div>    
    );
}

export default Login;