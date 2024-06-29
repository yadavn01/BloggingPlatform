import { useState } from "react";
import { login } from "../authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login({email,password})
            const userToken = response.data.token
            localStorage.setItem('token',userToken)
            setMessage("Login Successfull")
            navigate('/profile')
        }
        catch(error)
        {
            setMessage("Login Unsuccessfull, try again!")
            console.log(error);
            
        }
    }
    
    return (
        <div>
            <h2> Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
            {/* {token && (
                <div>
                    <h3>Token</h3>
                    <p>{token}</p>
                </div>
            )} */}
        </div>
    )
}

export default Login;