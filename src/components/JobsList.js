import React from 'react';
import Job from './Job';

const JobsList = ({jobs, addFilter}) => {

  return (
    <>
      {jobs.map(job => {
        return <Job job={job} key={job.id} addFilter={addFilter} />
      })}
    </>
  );
}

export default JobsList;