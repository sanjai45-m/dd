import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Resume Writing',
      description: 'Get a professionally written resume that stands out',
      price: '$49',
      features: ['ATS-friendly format', 'Industry-specific keywords', '2 revisions']
    },
    {
      id: 2,
      title: 'Career Counseling',
      description: 'One-on-one guidance from industry experts',
      price: '$99',
      features: ['45-minute session', 'Career roadmap', 'Follow-up support']
    },
    {
      id: 3,
      title: 'Interview Preparation',
      description: 'Mock interviews and feedback sessions',
      price: '$79',
      features: ['Industry-specific questions', 'Behavioral interview prep', 'Performance feedback']
    }
  ];

  return (
    <div className="services-page">
      <h1>Professional Services</h1>
      <p className="services-intro">Boost your career with our premium services</p>
      
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h2>{service.title}</h2>
            <p className="description">{service.description}</p>
            <p className="price">{service.price}</p>
            <ul className="features">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="buy-btn">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;