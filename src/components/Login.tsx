import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { loginInfo } from '../data/loginInfo'; 

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
   
    const foundUser = loginInfo.find(
      (user) => user.email === email && user.password === password
    );
  
    if (foundUser) {
     
      localStorage.setItem('username', foundUser.username);
      
      setError(''); 
      navigate('/dashboard'); 
    } else {
      setError('Invalid email or password');
    }
  };
  

  return (
    <div className="Login">
      <div className='LoginBox'>
        <div className='LoginHeader'>
          Login
        </div>
        <div className='inputs'>
          <input
            className='email'
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='password'
            placeholder='Enter Your Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            {error}
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "end", padding: "20px" }}>
          <button className='submitBtn' onClick={handleLogin}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
