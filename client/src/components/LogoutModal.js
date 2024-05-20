import React from "react";
import './LogoutModal.css';

function LogoutModal({ show, onClose, onLogout }) {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Log out?</h2>
                </div>
                <div className="modal-body">
                    <p>You can always log back in at any time.</p>
                </div>
                <div className="modal-footer">
                    <button onClick={onLogout} className="logout-button">Log out</button>
                    <button onClick={onClose} className="cancel-button">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default LogoutModal;