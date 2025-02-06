import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../StyleComponent/LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      toast.error('Please fill in all fields', {
        position: 'top-right', 
        autoClose: 3000,
      });
    } else {
      toast.success('Login successful', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email" className="login-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginForm;
