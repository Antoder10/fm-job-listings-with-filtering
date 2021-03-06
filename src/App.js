import React, {useState, useEffect} from 'react';
import JobsList from './components/JobsList';
import Filters from './components/Filters';
import data from './data.json';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);


  useEffect(() => {
    const filteredJobsArray = jobs.filter(job => {
      return Object.values(job).flat().some(val => filters.includes(val));
    })
    setFilteredJobs(filteredJobsArray);
    }, [filters, jobs])

  const addFilter = tag => {
    if (filters.includes(tag)) return;
    setFilters(prev => [...prev, tag]);
  }

  const removeFilter = tag => {
    setFilters(filters.filter(filter => filter !== tag));
  }

  const clearFilters = () => {
    setFilters([]);
  }

  return (
    <div className="App">
      <header className="bg-blue-500 h-48" >
      </header>
      <section className="container bg-gray-300 pt-12 px-4 pb-2">
        {filters.length > 0 && <Filters filters={filters} clearFilters={clearFilters} removeFilter={removeFilter}/>}
        <JobsList jobs={filters.length > 0 ? filteredJobs : jobs} addFilter={addFilter} />
      </section>
    </div>
  );
}

export default App;
