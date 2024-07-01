import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const [user, setUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        const fetchUserProfile = async () => {
            if(token) {
                try {
                    const response = await axios.get("http://localhost:5194/api/auth/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`
                          }
                    })
                    setUser(response.data)
                }
                catch(error) {
                    console.error('Failed to fetch user profile:', error);
                    localStorage.removeItem('token');
                    navigate('/login')
                }
            }
            else {
                navigate('/login')
            }
        }
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <div>
            <h2>User Profile</h2>
            <div>
            <p>
                Email: {user.email}
            </p>
            <p>
                Username: {user.username}
            </p>
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}
export default Profile;