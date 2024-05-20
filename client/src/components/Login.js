import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/api/login', {username, password});
            debugger
            localStorage.setItem('token', response.data.token);
            navigate('/users');
        } catch (err) {
            // TODO: Show login error in UI
        }
    }

    return (
        <div>
            <h2>Login</h2>
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
                <button type="submit">Log in</button>
            </form>
        </div>    
    );
}

export default Login;