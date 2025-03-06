import React from 'react';
import HomeSlider from './Slider';
import HomeDenim from './HomeDenim';

const HomePage = () => {


  return (
    <>
        <HomeSlider />
      <div className='w-[95%] mx-auto'>
        <HomeDenim />
      </div>

    </>
  )
}

export default HomePage