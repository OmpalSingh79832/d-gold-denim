import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import MenImg1 from "../../assets/products/p1.1.webp";
import KidsImg1 from "../../assets/products/p2.1.webp";
import WomenImg1 from "../../assets/products/p3.1.webp";
import woImg1 from "../../assets/products//p4.1.webp";
import Img11 from "../../assets/images/what-we-do1.jpg";
import Img12 from "../../assets/images/what-we-do2.jpg";
import Img13 from "../../assets/images/what-we-do3.jpg";
import Choose3 from "../../assets/images/delivery-bike.png";
import Choose2 from "../../assets/images/best-price.png";
import Choose1 from "../../assets/images/best-seller.png";
import Img1 from '../../assets/images/4.png';
import Img2 from '../../assets/images/5.png';
import Img3 from '../../assets/images/6.png';
import Img4 from '../../assets/images/7.jpg';
import Img5 from '../../assets/images/8.png';
import Img6 from '../../assets/images/indiamart.jpg';
import Img7 from '../../assets/images/logo2.png';
import ClientReview from './ClientReview';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularProducts, getTopProducts } from '../../redux/slices/productReduer';
import Slider from "react-slick";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import PopularProducts from './PopularProducts';

const HomeDenim = () => {
  const { topproducts, popuarproducts } = useSelector((state) => state.product)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopProducts())
    dispatch(getPopularProducts())
  }, [dispatch]);

  const popular = Array.isArray(popuarproducts) ? popuarproducts : popuarproducts.products || [];
  const top = Array.isArray(topproducts) ? topproducts : topproducts.products || [];


  console.log(popular, 'popular')

  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Adjust speed (3 seconds)
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
        },
    },
    ],
  };

  const items = [
    {
      id: 1,
      title: "Jeans Manufacturing",
      description: "We are a reputed jeans manufacturer in India for quality jeans manufacturing.",
      image: Img11,
    },
    {
      id: 2,
      title: "Jeans Wholesale",
      description: "We are the largest wholesaler in India with maximum coverage across India and worldwide.",
      image: Img12,
    },
    {
      id: 3,
      title: "Jeans Exports",
      description: "We export our jeans worldwide with our quality-driven services and manufacturing.",
      image: Img13,
    },
  ];
  return (
    <>
      {/* Top Products */}
      <div className="relative text-center py-6">
        <div className="w-fit mx-auto">
          <h1 className="sm:text-xl md:text-3xl text-center text-gray-900">Our <span className="text-[#27497b] font-bold">Top Products</span>
          </h1>
          <div className="border-b-2 border-black w-[80%] mx-auto mt-4"></div>
        </div>
        {/* Header with Navigation Buttons */}
        <div className="flex justify-end items-center mx-auto px-4">
          <div className="flex gap-3">
            <button
              className="bg-gray-800 text-white p-2 hover:bg-gray-600 transition md:block sm:hidden"
              onClick={() => sliderRef.current.slickPrev()}
            >
              < FaCircleChevronLeft size={30} />
            </button>
            <button
              className="bg-gray-800 text-white p-2 hover:bg-gray-600 transition md:block sm:hidden"
              onClick={() => sliderRef.current.slickNext()}
            >
              <FaCircleChevronRight size={30} />
            </button>
          </div>
        </div>

        <div className="md:py-4 sm:py-10">
          <Slider ref={sliderRef} {...sliderSettings}>
            {top.slice(0, 20).map((item, index) => (
              <div key={index} className="px-2">
                <Link to={`/product-details/${item._id}`} className="group">
                  <img
                    src={item?.images[0]}
                    alt="Product"
                    className="aspect-square w-full rounded-lg bg-gray-200 group-hover:opacity-75 xl:aspect-[7/8]"
                  />
                  <h3 className="mt-4 sm:text-sm md:text-lg font-bold">{item.name}</h3>
                  <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                    Get More →
                  </button>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* About Us Component */}
      < div className="shadow-2xl sm:py-4 md:py-20 px-5 lg:px-20" >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16">
          {/* Text Section */}
          <div className="lg:col-span-7">
            <div className="w-fit mb-4">
              <h1 className="sm:text-xl md:text-3xl text-gray-900">
                About D-Gold <span className="text-[#27497b] font-bold"> Denim Jeans India</span>
              </h1>
              <div className="border-b-2 border-black w-[80%] mt-4"></div>
            </div>

            <p className="text-gray-700 sm:text-sm md:text-lg leading-relaxed mb-6 text-justify" style={{ fontFamily: "poppins" }}>
              Since <strong>2005, D-Gold Clothing Company</strong> has been a name synonymous with <strong>quality, innovation, and craftsmanship</strong> in the world of denim. Founded by <strong>Mr. Rashid Malik</strong>, our company has established itself as a <strong>leading manufacturer, wholesaler, and global exporter</strong> of premium <strong>fashion jeans</strong>. With a strong commitment to excellence, we serve businesses worldwide, delivering <strong>high-quality denim</strong> that blends <strong>style, comfort, and durability</strong>.
            </p>
            <h3 className='text-xl font-bold'>Global Reach -</h3>
            <p className="text-gray-700 sm:text-sm md:text-lg leading-relaxed mb-6 text-justify">
              We proudly <strong>export our premium denim worldwide</strong>, catering to wholesalers, retailers, and fashion brands across <strong>Europe, the USA, the Middle East, Asia, and beyond</strong>. Whether you are a <strong>boutique owner, a retail chain, or an online fashion store</strong>, we provide <strong>custom manufacturing, private labeling, and bulk</strong> orders to meet your business needs.
            </p>
            <Link to={"/about-us"}>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-full  hover:bg-blue-700 transition">
                More About Us →
              </button></Link>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-full z-10">
              <img
                src={MenImg1}
                alt="Denim Models"
                className=" sm:h-[300px] sm:w-[100%] md:h-[400px] md:w-full lg:w-[500px] lg:h-[500px] rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose US */}
      <div className='sm:pt-10 md:py-10'>
        <div className="w-fit mx-auto">
          <h1 className="sm:text-xl md:text-3xl text-center text-gray-900">
            Why  <span className="text-[#27497b] font-bold">Choose US?</span>
          </h1>
          <div className="border-b-2 border-black w-[80%] mx-auto mt-4"></div>
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center bg-white mt-10 mx-auto">
          <card class="border-indigo-400 border border-dashed hover:border-double rounded py-7 px-5">
            <div class="grid grid-cols-6 gap-3">
              <div class="col-span-2">
                <img src={Choose1} alt='best quality' />
              </div>
              <div class="col-span-4">
                <p class="text-gray-700 font-bold "> Premium Quality Products</p>
                <p class="text-gray-500 mt-4 sm:text-sm md:text-base">We use high-grade denim fabric and advanced stitching techniques to ensure durability, comfort, and a perfect fit for every pair of jeans.</p>
              </div>
            </div>
          </card>
          <card class="border-indigo-400 border border-dashed hover:border-double rounded py-7 px-5">
            <div class="grid grid-cols-6 gap-3">
              <div class="col-span-4">
                <p class="text-gray-700 font-bold">Competitive Wholesale Pricing</p>
                <p class="text-gray-500 mt-4 sm:text-sm md:text-base">As a manufacturer and direct supplier, we offer affordable bulk pricing without compromising on quality, making it ideal for retailers and wholesalers.</p>
              </div>
              <div class="col-span-2">
                <img src={Choose2} alt='best price' />
              </div>
            </div>
          </card>
          <card class="border-indigo-400 border border-dashed hover:border-double rounded py-7 px-5">
            <div class="grid grid-cols-6 gap-3">
              <div class="col-span-2">
                <img src={Choose3} alt='delevery icon' />
              </div>

              <div class="col-span-4">
                <p class="text-gray-700 font-bold"> On-Time Delivery</p>
                <p class="text-gray-500 mt-4 sm:text-sm md:text-base">With a strong supply chain and efficient logistics, we export worldwide and ensure timely deliveries to keep your business running smoothly.</p>
              </div>
            </div>
          </card>
        </div>
      </div>

      {/* What We Do  */}
      < div className="py-10" >
        <div className="w-fit mx-auto">
          <h1 className="sm:text-xl md:text-3xl text-center text-gray-900">
            What  <span className="text-[#27497b] font-bold">We Do?</span>
          </h1>
          <div className="border-b-2 border-black w-[80%] mx-auto my-6"></div>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-l shadow-2xl "
            >
              {/* Image with Hover Effect */}
              <div className="relative w-full h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                />
              </div>
              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Every part */}
      < div className='mt-6' >
        <div className='explore-every-part bg-cover bg-center'>
          <div className="item-center w-[100%] mx-auto sm:px-2 lg:px-20 xl:px-36 py-10">
            <div className='grid grid-cols-12 gap-6 lg:gap-20'>
              {/* Left Column */}
              <div className='col-span-12 lg:col-span-6'></div>

              {/* Right Column */}
              <div className='col-span-12 lg:col-span-6 sm:bg-white sm:p-4 lg:bg-transparent lg:p-0'>
                <h4 className='text-[#27497b] text-2xl md:text-3xl lg:text-4xl uppercase leading-[1.2] font-bold'>
                  Our Denim Collection
                </h4>
                <ul className='text-gray-700 sm:text-sm md:text-[16px]'>
                  <li className='mt-4'><strong>✔ Skinny Jeans –</strong> A sleek and modern fit for a contemporary look.</li>
                  <li className='py-1'><strong>✔ Bootcut Jeans –</strong> A timeless classic with a stylish flare.</li>
                  <li className='py-1'><strong>✔ Stretch Jeans –</strong> Flexible and comfortable for everyday wear.</li>
                  <li className='py-1'><strong>✔ Straight Leg Jeans –</strong> A clean and structured fit for versatility.</li>
                  <li className='py-1'><strong>✔ High-Waisted Jeans –</strong> A flattering and retro-inspired silhouette.</li>
                  <li className='py-1'><strong>✔ Ripped & Distressed Jeans –</strong> Edgy and bold fashion statements.</li>
                  <li className='py-1'><strong>✔ Slim Fit Jeans –</strong> Perfectly tailored for a sharp and trendy appeal.</li>
                </ul>
                <Link to={"/catalogue"}>
                  <button className="mt-6 lg:mt-10 bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-blue-700 transition">
                    Get Start →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Top Products */}
      <PopularProducts />

      {/* Trusted Partners */}
      <div className='py-10 bg-gray-200'>
        <div className="mt-10 w-fit mx-auto">
          <h1 className="sm:text-xl md:text-3xl text-center text-gray-900">
            Our Trusted <span className="text-[#27497b] font-bold">Partners</span>
          </h1>
          <div className="border-b-2 border-black w-[80%] mx-auto mt-4"></div>
        </div>
        <div class="relative flex overflow-x-hidden">
          <div class="py-12 animate-marquee whitespace-nowrap flex">
            <div class="tex mx-4"><img src={Img1} className="w-full h-fit rounded-md" alt="" /></div>
            <div class="tex mx-4"><img src={Img2} className="w-full h-fit rounded-md" alt="" /></div>
            <div class="tex mx-4"><img src={Img3} className="w-full h-fit rounded-md" alt="" /></div>
            <div class="tex mx-4"><img src={Img4} className="w-full h-fit rounded-md" alt="" /></div>
            <div class="tex mx-4"><img src={Img5} className="w-full h-fit rounded-md" alt="" /></div>
            <div class="tex mx-4"><img src={Img6} className="w-full h-fit rounded-md" alt="" /></div>
          </div>
          <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
            <div class="tex mx-4"><img src={Img1} className="w-full h-fit rounded-md" alt="" /></div>
            <div class="tex mx-4"><img src={Img2} className="w-full h-fit rounded-md" alt="" /></div>
            <div class="tex mx-4"><img src={Img3} className="w-full h-fit rounded-md" alt="" /></div>
            <div class="tex mx-4"><img src={Img4} className="w-full h-fit rounded-md" alt="" /></div>
            <div class="tex mx-4"><img src={Img5} className="w-full h-fit rounded-md" alt="" /></div>
            <div class="tex mx-4"><img src={Img6} className="w-full h-fit rounded-md" alt="" /></div>
          </div>
        </div>
      </div>
      
      {/* Testomonials Section */}
      < ClientReview />


    </>
  )
}

export default HomeDenim