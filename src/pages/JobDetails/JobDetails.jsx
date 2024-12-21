import { useParams } from 'react-router-dom';
import './JobDetails.css';

function JobDetails() {
  const { id } = useParams();

  // Mock job data (in a real app, this would come from an API)
  const job = {
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'San Francisco',
    salary: '$120,000 - $150,000',
    experience: '5+ years',
    description: 'We are looking for a Senior Software Engineer to join our team...',
    requirements: [
      'Bachelor s degree in Computer Science or related field',
      '5+ years of experience in software development',
      'Strong knowledge of JavaScript and React',
      'Experience with cloud platforms (AWS/Azure/GCP)',
    ],
    responsibilities: [
      'Design and implement new features',
      'Write clean, maintainable code',
      'Collaborate with cross-functional teams',
      'Mentor junior developers'
    ]
  };

  return (
    <div className="job-details-page">
      <div className="job-header">
        <h1>{job.title}</h1>
        <p className="company">{job.company}</p>
        <div className="job-meta">
          <span>{job.location}</span>
          <span>{job.salary}</span>
          <span>{job.experience}</span>
        </div>
      </div>

      <div className="job-content">
        <section className="job-section">
          <h2>Job Description</h2>
          <p>{job.description}</p>
        </section>

        <section className="job-section">
          <h2>Requirements</h2>
          <ul>
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </section>

        <section className="job-section">
          <h2>Responsibilities</h2>
          <ul>
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </section>

        <div className="apply-section">
          <button className="apply-btn">Apply Now</button>
          <button className="save-job-btn">Save Job</button>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;