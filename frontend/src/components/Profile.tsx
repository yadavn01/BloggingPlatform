import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Profile = () => {
    const [user, setUser] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        const fetchUserProfile = async () => {
            if(token) {
                console.log('Token:', token);
                try {
                    console.log('Making API request...');
                    const response = await axios.get('http://localhost:5194/api/auth/profile', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    console.log('Profile fetched successfully:', response.data);
                    setUser(response.data);
                }
                catch(error) {
                    console.error('Failed to fetch user profile:', error);
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } else {
                navigate('/login');
            }
        }
        fetchUserProfile();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <div>
            <h2>User Profile</h2>
            {user && (
                <div>
                    <p>Email: {user.email}</p>
                    <p>User Id: {user.id}</p>
                </div>
            )}
            <div>
                <Button variant="outlined" color="inherit" onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    );
}

export default Profile;
