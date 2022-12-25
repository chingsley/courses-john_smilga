import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'http://localhost:4500/api/react-tabs-project';

interface Job {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedTab, setSelectedTab] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <Tab
          jobs={jobs}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
        <JobExperience {...jobs[selectedTab]} />
      </div>
      <button type='button' className='btn'>
        more info
      </button>
    </section>
  );
}

interface TabProps {
  jobs: Job[];
  setSelectedTab: (value: number) => void;
  selectedTab: number;
}
const Tab: React.FC<TabProps> = ({
  jobs,
  setSelectedTab,
  selectedTab,
}) => {
  return (
    <div className='btn-container'>
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setSelectedTab(index)}
            className={`job-btn ${index === selectedTab && 'active-btn'}`}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

interface JobExperienceProps {
  title: string;
  company: string;
  dates: string;
  duties: string[];
}
const JobExperience: React.FC<JobExperienceProps> = (props) => {
  const { title, company, dates, duties } = props;
  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className='job-date'>{dates}</p>
      {duties.map((duty, index) => {
        return (
          <div key={index} className='job-desc'>
            <FaAngleDoubleRight></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        );
      })}
    </article>
  );
};

export default App;
