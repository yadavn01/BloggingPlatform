import { useState } from "react";
import { login } from "../authService";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useAuth } from '../AuthContext';

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const redirectRegister = () => {
        navigate('/register');
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login({email,password})
            const userToken = response.data.token
            localStorage.setItem('token',userToken)
            setToken(userToken);
            navigate('/profile')
        }
        catch(error)
        {
            console.log(error);    
        }
    }
    
    const handleClear = () => {
        setEmail('');
        setPassword('');
    }
    
    return (
        <Container maxWidth="sm">
             <Box sx={{ mt: 4 }}> 
        <div>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label>Email: </label>
                            <TextField type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
                                fullWidth
                                margin="normal"
                                required />
                        </div>
                        <div>
                            <label>Password: </label>
                            <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
                                fullWidth
                                margin="normal"
                                required />
                        </div>
                        <Button type="submit">Login</Button>
                        <Button type="button" onClick={handleClear}> Clear</Button>
                        <p>Don't have an account?</p>
                        <Button type="button" onClick={redirectRegister}>Register</Button>
                    </form>
            {/* {token && (
                <div>
                    <h3>Token</h3>
                    <p>{token}</p>
                </div>
            )} */}
        </div>
        </Box>
        </Container>
    )
}

export default Login;