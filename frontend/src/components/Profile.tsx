import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import Logout from './Logout';

const Profile = () => {
    const [user, setUser] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchUserProfile = async () => {
            if (token) {
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
                catch (error) {
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
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <div>
                    <Typography variant="h4" component="h1" gutterBottom>
                        User Profile
                    </Typography>
                    {user && (
                        <div>
                            <p>Email: {user.email}</p>
                            <p>User Id: {user.id}</p>
                        </div>
                    )}
                    <Button type="button" component={RouterLink} to="/create-blogposts">
                        Create Blog
                    </Button>
                    <div>
                        <Button type="button" onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                </div>
            </Box>
        </Container>
    );
}

export default Profile;
