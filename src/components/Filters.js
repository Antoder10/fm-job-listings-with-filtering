import React from 'react';

const Filters = ({filters, clearFilters, removeFilter}) => {

  return (
    <div className="flex flex-wrap justify-center bg-white mb-8 p-4">
      {filters.map((filter, index) => {
        return <span onClick={() => removeFilter(filter)} className="cursor-pointer mb-4 bg-blue-300 font-bold py-1 px-2 mr-2 sm:py-0.5" key={index}>❌ {filter}</span>
      })}
      <span onClick={clearFilters} className="font-bold cursor-pointer ml-auto">Clear</span>
    </div>
  );
}

export default Filters;