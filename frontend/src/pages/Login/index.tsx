import type React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/auth/login', { email, password });
      // Store JWT and user information in local storage
      localStorage.setItem('token', response.data.jwtToken);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('name', response.data.name);
      localStorage.setItem('isAdmin', response.data.isAdmin.toString()); // Ensure isAdmin is stored as a string
      // Redirect to home page
      navigate('/home');
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (err: any) {
      // Handle errors
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p className="toggle-link">
          <span style={{ color: 'black', fontFamily: 'sans-serif' }}>Don’t have an account? </span>
          <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
