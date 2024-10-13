import React from 'react';

const Searchbar = () => {
  return (
    <div className='w-screen flex justify-center'>
        <div className="mt-8 w-full max-w-md">
          <div className='flex gap-2 w-[630px]'>
          <input
            type="text"
            placeholder="Enter your YouTube video link here..."
            className="w-full p-4 rounded-lg bg-gray-900 bg-opacity-10  text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <div className='flex gap-3 justify-center items-center '>
          <input className='bg-gray-900 bg-opacity-10  text-black w-16 h-10 text-center'type='number' placeholder='from'></input>
          <p className='text-3xl font-bold'>:</p>
          <input className='bg-gray-900 bg-opacity-10  text-black w-16 h-10 text-center'type='number' placeholder='to'></input>
          </div>
          </div>
          <button className="w-full mt-4 p-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200">
            Start Editing
          </button>
        </div>
        </div>
      
  );
};

export default Searchbar;
