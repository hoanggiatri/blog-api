import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

function Login() {
  const [creds, setCreds] = useState({});
  const navigate = useNavigate();

  function handleLogin() {
    if (creds.username === 'admin' && creds.password === '123') {
      navigate('/stats');
    }
  }

  return (
    <div className="login-container">
      <input type="text" placeholder="Username" onChange={(e) => setCreds({ ...creds, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setCreds({ ...creds, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;