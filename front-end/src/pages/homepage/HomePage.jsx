import React, { useEffect } from 'react';
import HomeSlider from './Slider';
import HomeDenim from './HomeDenim';

const HomePage = () => {
   useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

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