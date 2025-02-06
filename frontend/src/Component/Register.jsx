import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import '../StyleComponent/Register.css'; // Import custom CSS

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill in all fields', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      return;
    }

    toast.success('Registration Successful', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });

 
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">Register</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <label htmlFor="username" className="register-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            className="register-input"
            value={formData.username}
            onChange={handleChange}
          />

          <label htmlFor="email" className="register-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            className="register-input"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="password" className="register-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            className="register-input"
            value={formData.password}
            onChange={handleChange}
          />

          <label htmlFor="confirmPassword" className="register-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            className="register-input"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
