import React, { useState, useEffect } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from './firebase.js'; 
import { useNavigate } from 'react-router-dom';
import SignUp from './components/auth/SignUp.jsx';
import Modal from './Modal.js';

const HomeScreen = () => {
    const navigate = useNavigate();
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const openSignUpModal = () => {
        setShowSignUpModal(true);
      };
      const closeSignUpModal = () => {
        setShowSignUpModal(false);
      };

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
            <h1>Admin Account</h1>

            <button onClick={openSignUpModal}> Add Student</button>

            {showSignUpModal && (
            <Modal onClose={closeSignUpModal}>
              <SignUp />
            </Modal>
          )}
        </div>
        
    );
};

export default HomeScreen;
