// import React, { useState } from 'react';
// import { loginUser } from '../services/api';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await loginUser({ email, password });
//       const { token, user } = response.data;

//       // Store token and userId
//       localStorage.setItem('token', token);
//       localStorage.setItem('userId', user.id);

//       if (user.role === 'admin') {
//         navigate('/admin');
//       } else {
//         navigate('/employee');
//       }
//     } catch (err) {
//       alert('Login failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; 
import { Link } from 'react-router-dom';
import Register from './Register.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { email, password });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message || 'An error occurred');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                <Link><Register/></Link>
            </form>
            {message && <p className="login-message">{message}</p>}
        </div>
    );
};

export default Login;
