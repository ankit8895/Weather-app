import React from 'react';

const Header = () => {
  return (
    <div className='overflow-hidden'>
      <header className='relative'>
        <div className='px-4 sm:px-6 md:px-8'>
          <div className='relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6'>
            <div className='text-slate-900 w-auto h-5'>WeatherForcast</div>
            <div className='flex items-center'>
              <div className=''></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
