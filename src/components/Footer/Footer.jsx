import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Job Seekers</h3>
          <ul>
            <li>Search Jobs</li>
            <li>Create Resume</li>
            <li>Job Alerts</li>
            <li>Career Advice</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Employers</h3>
          <ul>
            <li>Post Jobs</li>
            <li>Search Resumes</li>
            <li>Hiring Solutions</li>
            <li>Advertise</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>About JobPortal</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 JobPortal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;