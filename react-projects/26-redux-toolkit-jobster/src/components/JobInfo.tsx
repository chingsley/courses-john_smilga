import React from 'react';
import { JobInfoWrapper } from '../assets/wrappers';

const JobInfo: React.FC<{ icon: React.ReactNode, text: string; }> = ({ icon, text }) => {

  return (
    <JobInfoWrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </JobInfoWrapper>
  );
};

export default JobInfo;