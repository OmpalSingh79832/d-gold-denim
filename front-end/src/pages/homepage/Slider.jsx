import React, { useRef } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Home1 from "../../assets/images/home1.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banner1 from "../../assets/images/home-banner-1.jpg"
import Banner2 from "../../assets/images/home-banner-2.jpg"
import Banner3 from "../../assets/images/home-banner-3.jpg"
import Banner4 from "../../assets/images/home-banner-4.png"

const HomeSlider = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderRef = useRef(null);
  return (
    <>
      <div className="relative md:block sm:hidden">
        <button
          className="absolute left-4 mt-[15%] items-center transform bg-blue-200 p-3 border-[2px] border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition z-10"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaAngleLeft size={23} />
        </button>
        <button
          className="absolute right-4 mt-[15%] items-center transform bg-blue-200 p-3 border-[2px] border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition z-10"
          onClick={() => sliderRef.current.slickNext()}
        >
          <FaAngleRight size={23} />
        </button>
      </div>

      <Slider {...settings} ref={sliderRef} >
        {/* Header with Navigation Buttons */}

        <div className='relative w-full homeslide sm:h-[155px] md:h-[310px] lg:h-[550px]'>
          <img src={Banner1} alt="" className='h-full w-full object-cover' />
        </div>
        <div className="relative w-full homeslide sm:h-[155px] md:h-[310px] lg:h-[550px]">
          <img src={Banner2} alt="" className="h-full w-full object-cover" />
          <div className="absolute top-1/2 sm:left-0 md:left-10 transform -translate-y-1/2 text-gray-700 p-6 text-width sm:w-[90%] md:w-[40%]">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-semibold text-gray-600">
                Limited Offer
              </span>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                -20% Off
              </span>
            </div>
            <h2 className="sm:text-xl home-heading lg:text-6xl font-semibold capitalize leading-tight" style={{ fontFamily: "serif" }}>Having all types of Jeans world of grocery.</h2>
            <p className="md:block sm:hidden home-desc mt-2 sm:text-sm md:text-lg">
              Boost your inventory with jeans designed for modern men—quality and affordability in every pair.
            </p>
            <button className=" sm:mt-4 md:mt-6 bg-blue-600 text-white px-4 sm:py-1 md:py-2 rounded-full hover:bg-blue-700 transition">
              Shop Now →
            </button>
          </div>
        </div>
        <div className="relative w-full homeslide sm:h-[155px] md:h-[310px] lg:h-[550px]">
          <img src={Banner4} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative w-full homeslide sm:h-[155px] md:h-[310px] lg:h-[550px]">
          <img src={Banner3} alt="" className="h-full w-full object-cover" />
          <div className="absolute top-1/2 sm:left-0 md:left-10 transform -translate-y-1/2 text-gray-700 p-6 text-width sm:w-[90%] md:w-[40%]">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-semibold text-gray-600">
                Exclusive Offer
              </span>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                -30% Off
              </span>
            </div>
            <h2 className="sm:text-xl home-heading lg:text-6xl font-semibold capitalize leading-tight" style={{ fontFamily: "serif" }}>Discover the Latest Trends in Grocery Fashion.</h2>
            <p className="md:block sm:hidden home-desc mt-2 sm:text-sm md:text-lg">
              Stay ahead in the fashion game with bulk denim orders that offer both style and durability.
            </p>
            <button className=" sm:mt-4 md:mt-6 bg-blue-600 text-white px-4 sm:py-1 md:py-2 rounded-full hover:bg-blue-700 transition">
              Explore Now →
            </button>
          </div>
        </div>

      </Slider>
    </>

  );
};

export default HomeSlider;
