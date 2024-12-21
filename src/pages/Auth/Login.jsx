import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Form, Typography } from 'antd';
import { motion } from 'framer-motion'; // For smooth animations
import './Auth.css';

const { Title, Text } = Typography;

function Login() {
  const navigate = useNavigate();

  const handleLogin = (values) => {
    // Handle login logic here
    console.log('Login:', values);
    navigate('/profile');
  };

  return (
    <div className="auth-page">
      <motion.div
        className="auth-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title level={2} className="auth-title">Welcome Back</Title>
        <Text className="auth-subtitle">Login to access your account</Text>

        <Form onFinish={handleLogin} layout="vertical" className="auth-form">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please enter your email!' }]}
            >
              <Input placeholder="Enter your email" className="input-field" />
            </Form.Item>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password placeholder="Enter your password" className="input-field" />
            </Form.Item>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button type="primary" htmlType="submit" className="auth-btn">
              Log in
            </Button>
          </motion.div>
        </Form>

        <div className="auth-footer">
          <Text>Don't have an account? </Text>
          <Link to="/register">Register here</Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
