import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoutModal from './LogoutModal';

function Users() {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:9000/api/users', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(response.data);
            } catch (error) {
                // TODO: Set error in UI
            }
        }

        fetchUsers();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setShowModal(false);
        navigate('/login');
    };

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div>
            <h2>Users</h2>
            <button onClick={openModal}>Log Out</button>
            <ul>
                {users.map((user, index) => {
                    const { username } = user;
                    return <li key={index}>{username}</li>
                })}
            </ul>
            <LogoutModal show={showModal} onClose={closeModal} onLogout={handleLogout} />
        </div>
    );
}

export default Users;