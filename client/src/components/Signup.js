import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:9000/api/register', { username, password });
            setError(null)
            navigate('/login');
        } catch (err) {
            setError(err.response.data.message)
        }
    }

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p className='error'>{error}</p>}
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
                <button type='submit'>Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
    );
}

export default Signup;