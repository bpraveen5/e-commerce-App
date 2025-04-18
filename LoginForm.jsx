import React, { useState } from 'react';
import API from '../utils/API';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Add your CSS styles here
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTimes } from 'react-icons/fa'; // FontAwesome close icon



function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/api/auth/login', form); // Ensure this matches your backend
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
      res.data.role === 'ADMIN' ? navigate('/admin') : navigate('/user');
    } catch (err) {
      console.error(err);
      alert('Login failed: ' + (err.response?.data || err.message));
    }
  };

  return (
    <div className="login-form-container">
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
        required
      />
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <a href="/">Register</a></p>
    </div>
  );
}

export default LoginForm;
