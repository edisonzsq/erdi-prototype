import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('economist@adb.org');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate('/workspace');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login to Workspace</h1>
        <p className="login-desc">Enter your credentials to access your personal workspace and AI-assisted analysis.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@adb.org"
            required
          />
          <button type="submit" className="btn btn-primary btn-block">
            Sign in
          </button>
        </form>
        <p className="login-note">This is a prototype. Any email will sign you in and redirect to your workspace.</p>
        <Link to="/" className="back-home">← Back to Home</Link>
      </div>
    </div>
  );
}
