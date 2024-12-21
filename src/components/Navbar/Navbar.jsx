import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Navbar.css';

function Navbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          JobPortal
        </Link>
        <div className="nav-links">
          <Link to="/jobs">Jobs</Link>
          <Link to="/services">Services</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login" className="login-btn">Login</Link>
        </div>
        <div className="menu-icon" onClick={showDrawer}>
          <MenuOutlined style={{ fontSize: '28px', color: '#333' }} />
        </div>
      </div>
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        width={250}
   
      >
        <Menu
          mode="vertical"
          onClick={onClose}
          style={{ borderRight: 0 }}
        >
          <Menu.Item key="1">
            <Link to="/jobs">Jobs</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/services">Services</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/login" className="login-btn">Login</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
}

export default Navbar;
