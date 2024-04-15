import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from './firebase.js'; 
import { useNavigate } from 'react-router-dom';

const Student = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        auth.signOut().then(() => {
            navigate('/');
        }).catch(error => {
            console.error("Sign out error:", error);
        });
    };

    return (
        <div className='app'>
            <button className="sign-out-btn" onClick={handleClick}>
                <LogoutIcon />
            </button>
            <h1>Student Account</h1>
        </div>
    );
};

export default Student;
