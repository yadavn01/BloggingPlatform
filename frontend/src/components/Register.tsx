import { useState } from "react";
import { register } from '../authService';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

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
        catch (error) {
            console.log(error);
            setMessage("Registration not complete, try again!")
        }

}
    return (
        <div>
            <h2> Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
                <button type="button" onClick={handleClear}> Clear</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;