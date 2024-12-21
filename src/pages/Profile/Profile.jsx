import React, { useState } from "react";
import { Button, Input, Tabs, Card, Row, Col, Typography, Form } from "antd";
import "antd/dist/reset.css"; // Import Ant Design styles
import "./Profile.css";

const { TabPane } = Tabs;
const { Title, Text } = Typography;

function Profile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    experience: [],
    education: [],
    skills: [],
  });

  const [form] = Form.useForm();

  const addExperience = () => {
    setProfile({
      ...profile,
      experience: [
        ...profile.experience,
        { company: "", role: "", duration: "" },
      ],
    });
  };

  const addEducation = () => {
    setProfile({
      ...profile,
      education: [...profile.education, { degree: "", institution: "", year: "" }],
    });
  };

  const addSkill = () => {
    setProfile({ ...profile, skills: [...profile.skills, ""] });
  };

  const handleInputChange = (index, field, value, type) => {
    const updatedItems = [...profile[type]];
    updatedItems[index][field] = value;
    setProfile({ ...profile, [type]: updatedItems });
  };

  const saveProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile saved successfully!");
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <Title level={2}>Welcome, {profile.name}!</Title>
        <Text type="secondary">Manage and showcase your professional journey.</Text>
      </header>

      <main className="profile-content">
        <Tabs defaultActiveKey="basic" className="profile-tabs">
          <TabPane tab="Basic Details" key="basic">
            <Card title="Basic Details" className="fade-in">
              <Form
                layout="vertical"
                form={form}
                initialValues={{
                  name: profile.name,
                  email: profile.email,
                  phone: profile.phone,
                }}
                onValuesChange={(changedValues) =>
                  setProfile({ ...profile, ...changedValues })
                }
              >
                <Form.Item label="Full Name" name="name">
                  <Input placeholder="Enter your full name" />
                </Form.Item>
                <Form.Item label="Email" name="email">
                  <Input type="email" placeholder="Enter your email" />
                </Form.Item>
                <Form.Item label="Phone" name="phone">
                  <Input type="tel" placeholder="Enter your phone number" />
                </Form.Item>
              </Form>
            </Card>
          </TabPane>

          <TabPane tab="Experience" key="experience">
            <Card
              title="Work Experience"
              extra={<Button onClick={addExperience}>+ Add Experience</Button>}
            >
              <Row gutter={[16, 16]}>
                {profile.experience.map((exp, index) => (
                  <Col span={12} key={index}>
                    <Card bordered>
                      <Form
                        layout="vertical"
                        initialValues={exp}
                        onValuesChange={(changedValues) =>
                          handleInputChange(
                            index,
                            Object.keys(changedValues)[0],
                            Object.values(changedValues)[0],
                            "experience"
                          )
                        }
                      >
                        <Form.Item label="Company" name="company">
                          <Input placeholder="Enter company name" />
                        </Form.Item>
                        <Form.Item label="Role" name="role">
                          <Input placeholder="Enter your role" />
                        </Form.Item>
                        <Form.Item label="Duration" name="duration">
                          <Input placeholder="Enter duration (e.g., Jan 2020 - Dec 2021)" />
                        </Form.Item>
                      </Form>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
            <div>
              <Title level={4}>Saved Experience:</Title>
              {profile.experience.map((exp, index) => (
                <Card key={index}>
                  <p><strong>Company:</strong> {exp.company}</p>
                  <p><strong>Role:</strong> {exp.role}</p>
                  <p><strong>Duration:</strong> {exp.duration}</p>
                </Card>
              ))}
            </div>
          </TabPane>

          <TabPane tab="Education" key="education">
            <Card
              title="Education"
              extra={<Button onClick={addEducation}>+ Add Education</Button>}
            >
              <Row gutter={[16, 16]}>
                {profile.education.map((edu, index) => (
                  <Col span={12} key={index}>
                    <Card bordered>
                      <Form
                        layout="vertical"
                        initialValues={edu}
                        onValuesChange={(changedValues) =>
                          handleInputChange(
                            index,
                            Object.keys(changedValues)[0],
                            Object.values(changedValues)[0],
                            "education"
                          )
                        }
                      >
                        <Form.Item label="Degree" name="degree">
                          <Input placeholder="Enter degree (e.g., B.Sc, MBA)" />
                        </Form.Item>
                        <Form.Item label="Institution" name="institution">
                          <Input placeholder="Enter institution name" />
                        </Form.Item>
                        <Form.Item label="Year" name="year">
                          <Input placeholder="Enter year of completion" />
                        </Form.Item>
                      </Form>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
            <div>
              <Title level={4}>Saved Education:</Title>
              {profile.education.map((edu, index) => (
                <Card key={index}>
                  <p><strong>Degree:</strong> {edu.degree}</p>
                  <p><strong>Institution:</strong> {edu.institution}</p>
                  <p><strong>Year:</strong> {edu.year}</p>
                </Card>
              ))}
            </div>
          </TabPane>

          <TabPane tab="Skills" key="skills">
            <Card
              title="Skills"
              extra={<Button onClick={addSkill}>+ Add Skill</Button>}
            >
              <Row gutter={[16, 16]}>
                {profile.skills.map((skill, index) => (
                  <Col span={6} key={index}>
                    <Card>
                      <Input
                        placeholder="Enter skill"
                        value={skill}
                        onChange={(e) => {
                          const updatedSkills = [...profile.skills];
                          updatedSkills[index] = e.target.value;
                          setProfile({ ...profile, skills: updatedSkills });
                        }}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
            <div>
              <Title level={4}>Saved Skills:</Title>
              {profile.skills.map((skill, index) => (
                <Text key={index} type="secondary">
                  {skill}
                </Text>
              ))}
            </div>
          </TabPane>
        </Tabs>
        <Button type="primary" block onClick={saveProfile}>
          Save All Changes
        </Button>
      </main>
    </div>
  );
}

export default Profile;
