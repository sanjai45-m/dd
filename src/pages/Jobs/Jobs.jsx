import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Jobs.css';

function Jobs() {
  const [filters, setFilters] = useState({
    experience: '',
    location: '',
    salary: '',
  });

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco',
      salary: '$120,000 - $150,000',
      experience: '5+ years',
    },
    // Add more job listings here
  ];

  return (
    <div className="jobs-page">
      <aside className="filters">
        <h3>Filters</h3>
        <div className="filter-section">
          <label>Experience</label>
          <select 
            value={filters.experience}
            onChange={(e) => setFilters({...filters, experience: e.target.value})}
          >
            <option value="">Any</option>
            <option value="0-2">0-2 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5+">5+ years</option>
          </select>
        </div>
        {/* Add more filters */}
      </aside>

      <main className="jobs-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-item">
            <h2>{job.title}</h2>
            <p className="company">{job.company}</p>
            <p className="location">{job.location}</p>
            <p className="salary">{job.salary}</p>
            <p className="experience">Experience: {job.experience}</p>
            <Link to={`/jobs/${job.id}`} className="apply-btn">View Details</Link>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Jobs;