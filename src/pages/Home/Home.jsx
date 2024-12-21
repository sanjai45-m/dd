import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Input, Row, Col, Form, Carousel } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './Home.css';
import photo1 from '../../assets/photo1.jpeg';
import photo2 from '../../assets/photo2.png';
import photo3 from '../../assets/photo3.png';
function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Find Your Dream Job</h1>
        <p>Search through millions of jobs and find the right match</p>
        <div className="search-box">
          <Form layout="inline" className="search-form">
            <Form.Item>
              <Input
                placeholder="Job title, skills, or company"
                size="large"
                className="search-input"
              />
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Location"
                size="large"
                className="search-input"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                size="large"
                icon={<SearchOutlined />}
                className="search-btn"
              >
                Search
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>

      <section className="banner">
        <Carousel autoplay={true} className="banner-carousel" >
          <div>
         <img src={photo1} alt=""  width={1200} height={350} />
          </div>
          <div>
          <img src={photo2} alt=""  width={1200} height={350}/>          </div>
          <div>
          <img src={photo3} alt="" width={1200} height={350} />          </div>
        </Carousel>
      </section>

      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <Row gutter={[16, 16]} className="job-cards">
          {[1, 2, 3, 4].map((job) => (
            <Col key={job} xs={24} sm={12} lg={8}>
              <Card
                hoverable
                className="job-card"
                title="Software Engineer"
                extra={<Link to={`/jobs/${job}`} className="view-job-btn">View Job</Link>}
              >
                <p className="company">Tech Company Inc.</p>
                <p className="location">New York, USA</p>
                <p className="salary">$80,000 - $120,000</p>
                <p className="description">Join our team of engineers to develop cutting-edge software solutions...</p>
              <button className='apply-btn'>Apply Now</button>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="resources">
        <h2>Online Resources</h2>
        <div className="resources-list">
          <div className="resource">
            <h3>Resume Building Tips</h3>
            <p>Learn how to craft a winning resume that catches the attention of employers.</p>
            <Button type="link" href="#" className="resource-link">Learn More</Button>
          </div>
          <div className="resource">
            <h3>Interview Preparation Guide</h3>
            <p>Prepare for your next big interview with our tips and practice questions.</p>
            <Button type="link" href="#" className="resource-link">Read Guide</Button>
          </div>
          <div className="resource">
            <h3>Salary Negotiation 101</h3>
            <p>Understand how to negotiate your salary and get the compensation you deserve.</p>
            <Button type="link" href="#" className="resource-link">Read Article</Button>
          </div>
        </div>
      </section>

      <section className="profile-link">
        <h3>Manage Your Profile</h3>
        <Button type="primary" size="large" className="profile-btn">
          Go to Profile
        </Button>
      </section>
    </div>
  );
}

export default Home;
