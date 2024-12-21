import React, { useState } from 'react';
import { Input, Button, Form, Space } from 'antd';
import { motion } from 'framer-motion';
import './AuthForm.css';

function AuthForm({ type, onSubmit }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    ...(type === 'register' && { name: '' })
  });

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="auth-form-container"
    >
      <Form
        name="auth-form"
        onFinish={handleSubmit}
        layout="vertical"
        className="auth-form"
      >
        {type === 'register' && (
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: 'Please input your full name!' }]}
          >
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </Form.Item>
        )}

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Button
              type="primary"
              htmlType="submit"
              className="submit-btn"
              block
            >
              {type === 'login' ? 'Login' : 'Register'}
            </Button>
          </Space>
        </Form.Item>
      </Form>

     
    </motion.div>
  );
}

export default AuthForm;
