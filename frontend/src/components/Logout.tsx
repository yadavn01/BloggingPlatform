import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Logout: React.FC = () => {
    const navigate = useNavigate();
    const { setToken } = useAuth();

    useEffect(() => {
        localStorage.removeItem('token');
        setToken(null);
        console.log('Token after removal:', localStorage.getItem('token')); 
        navigate('/login');
    }, [navigate, setToken]);

    return null;
};

export default Logout;