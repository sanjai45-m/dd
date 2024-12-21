import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import './Auth.css';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (formData) => {
    // Handle registration logic here
    console.log('Register:', formData);
    navigate('/profile');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Create Account</h1>
        <p className="auth-subtitle">Join our professional network</p>
        
        <AuthForm type="register" onSubmit={handleRegister} />
        
        <p className="auth-footer">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;