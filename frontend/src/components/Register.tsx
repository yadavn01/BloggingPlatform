import { useState } from "react";
import { register } from '../authService';

const Register = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[message, setMessage] = useState('');

const handleRegister = async (e: React.FormEvent)  => {
e.preventDefault();
try {
    await register({email,password});
    setMessage("Registration Successfull")
}
catch(error) {
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
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;