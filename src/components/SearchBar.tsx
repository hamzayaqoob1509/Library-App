import React from 'react';
import { ArrowRightCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  return (
    <div className="relative mt-6 mb-6">
      <div className="flex items-center">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        </div>
        
        <input
          type="text"
          placeholder="Type to search..."
          className="pl-10 flex-grow p-3 border border-gray-300 rounded-md text-base"
        />
        
        <button className="flex ml-4 py-3 px-6 bg-gray-600 text-white rounded-md hover:bg-gray-500 absolute right-0 top-[-160px]
">
          <ArrowRightCircleIcon className="w-6 h-6 text-white mr-2" />
          Request
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
