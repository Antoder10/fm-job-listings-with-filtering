import React from 'react';

const Job = ({job, addFilter}) => {
  const {
    company,
    logo,
    isNew,
    role,
    level,
    postedAt,
    contract,
    location,
    position,
    tools,
    languages,
    featured
  } = job;

  const tags = [...tools, ...languages, level, role];

  return (
    <div className={`flex flex-col bg-white rounded-md shadow-md mb-12 ${featured && 'border-gray-700 border-l-4'} px-4 py-2 sm:flex-row sm:py-4 sm:items-center`}>
      <img src={logo} alt={company} className="w-16 h-16 -mt-8 mb-2 sm:w-20 sm:h-20 sm:mt-0 sm:mr-4" />
      <div className="sm:flex sm:flex-col">
        <div className="flex flex-row items-center mb-2">
          <h5 className="font-bold text-blue-300 mr-4">{company}</h5>
          {isNew && <span className="rounded-xl uppercase py-0.5 bg-blue-300 font-bold px-2 mr-2">new!</span>}
          {featured && <span className="rounded-xl py-0.5 text-white uppercase bg-gray-700 font-bold px-2 mr-2">featured</span>}
        </div>
        <h3 className="font-bold mb-2">{position}</h3>
        <p className="mb-4">{postedAt} • {contract} • {location}</p>
      </div>
      <div className="flex flex-wrap border-t-2 border-blue-300 pt-4 sm:ml-auto sm:border-none">
        {tags.map((tag, index) => {
          return <span className="cursor-pointer bg-blue-300 font-bold py-1 px-2 mr-2 mb-4 sm:py-0.5" key={index} onClick={() => addFilter(tag)}>{tag}</span>
        })}
      </div>
    </div>
  );
}

export default Job;