import { useState } from "react";
import { register } from '../authService';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const[status, setStatus] = useState('');
    const navigate = useNavigate();

    const redirectLogin = () => {
        navigate('/login');
    }

    const handleClear = () => {
        setEmail('');
        setPassword('');
        setMessage('');
    }


    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register({ email, password });
            setMessage("Registration Successfull")
            navigate('/login')
        }
        catch (error:any) {
            if (error.response && error.response.data && error.response.data.title) {
                setStatus(error.response.data.title);
            } else {
                setStatus('Login failed. Please try again.');
            }
            console.log(error);
            setMessage("Registration not complete, try again!")
        }

}
    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <div>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Register
                    </Typography>
                    <form onSubmit={handleRegister}>
                        <div>
                            <label>Email: </label>
                            <TextField type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                margin="normal"
                                required />
                        </div>
                        <div>
                            <label>Password: </label>
                            <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth
                                margin="normal"
                                required />
                        </div>
                        <Button type="submit">Register</Button>
                        <Button type="button" onClick={handleClear}> Clear</Button>
                        <p>Already have an account?</p>
                        <Button type="button" onClick={redirectLogin}>Login</Button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </Box>
        </Container>
    );
}

export default Register;