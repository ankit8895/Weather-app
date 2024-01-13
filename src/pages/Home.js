import React from 'react';

const Home = () => {
  return (
    <div className='mb-20 overflow-hidden sm:mb-32 md:mb-40'>
      <div className='relative'>
        <div className='px-4 sm:px-6 md:px-8'>
          <div className='relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32'>
            <h1 className='text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
              Daily Weather Forecast Update News
            </h1>
            <p className='mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto'>
              Get the latest weather forecast for today with up-to-date
              information on temperature, precipitation, and more.
            </p>
            <div className='mt-6 sm:mt-10 flex justify-center space-x-6 text-sm'>
              <button className='bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto'>
                Get Started
              </button>
              <input
                type='text'
                className='hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
