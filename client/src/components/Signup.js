import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/register', { username, password });
            navigate('/login');
        } catch (err) {
            // TODO: set error message in UI below sign up form
        }
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                 type='text'
                 placeholder='Username'
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                />
                <input
                 type='text'
                 placeholder='Password'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <button type='submit'>Sign Up</button>
        </div>
    );
}

export default Signup;