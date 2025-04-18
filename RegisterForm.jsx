import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import API from '../utils/API'; 


function RegisterForm() {
  const [form, setFormData] = useState({
    name: '', email: '', password: '', role: 'USER'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/api/auth/register', form); // Update this if your backend path is different
      alert('Registered Successfully!');


      navigate('/login'); // Uncomment if you want to redirect after registration

      
    } catch (err) {
      console.error(err);
      alert('Error Registering: ' + (err.response?.data || err.message));
    }
  };

  return (
    <div className='container' style={{ width: '300px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Name" required />
        <input name="email" onChange={handleChange} placeholder="Email" type="email" required />
        <input name="password" onChange={handleChange} placeholder="Password" type="password" required />
        <select name="role" onChange={handleChange}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button type="submit">Register</button>
        <p>Already have an account? <a href="/login">Login</a></p>
        
      

      </form>
    </div>
  );
}

export default RegisterForm;
