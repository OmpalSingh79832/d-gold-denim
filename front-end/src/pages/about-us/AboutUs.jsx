import React from 'react';
import AboutBanner from "../../assets/images/aboutbanner.jpg";
import Img11 from "../../assets/images/what-we-do1.jpg";
import Img12 from "../../assets/images/what-we-do2.jpg";
import Img13 from "../../assets/images/what-we-do3.jpg";
import { SiWikimediafoundation } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { LiaCertificateSolid } from "react-icons/lia";
import Logo1 from "../../assets/images/footerlogo.png";
import { Link } from 'react-router-dom';
import ClientReview from '../homepage/ClientReview';

const AboutUs = () => {
    return (
        <>

            <div className="w-full h-fit">
                <img
                    src={AboutBanner}
                    alt="About Banner"
                    className="lg:w-[100%] h-[20em] sm:h-[20em] lg:h-[25em]"
                />
            </div>

            {/* ABOUT Section */}
            <div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20 bg-gray-50 dark:bg-gray-900">
                <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
                    {/*  */}
                    <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
                        <div className="relative">
                            {/* Side Img 1 */}
                            <img className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src={Img11} alt="Side Image" />
                            {/* Side Img 2 */}
                            <img className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src={Img12} alt="Side Image 2" />
                            {/* Side Img 3 */}
                            <img className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full" src={Img13} alt="Side Image 3" />
                            {/* Main Img */}
                            <img className="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-green-500" src={AboutBanner} alt="About us" />
                        </div>
                        {/*  */}
                        <div className="lg:w-[60%] p-4 w-full h-full shadow-xl shadow-green-300/40 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
                            <div className="w-fit mx-auto">
                                <h1 className="text-3xl text-center text-gray-900 capitalize">
                                    About<span className="text-[#27497b] font-bold"> us</span>
                                </h1>
                                <div className="border-b-2 border-black w-[80%] mx-auto mt-4"></div>
                            </div>
                            <p className="md:text-3xl text-2xl text-center text-gray-800 dark:text-gray-200 font-bold my-5">We are D-G Gold Denim Jeans
                            </p>
                            <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-300">
                                D-G Gold Denim Jeans Pvt. Ltd. is a leading manufacturer of Jeans which has grown its business in Jeans Wholesale and Jeans Export to retail sale of Jeans. The Company was founded under the registered trademark D-G GOLD which produces its apparel collection for Men , Women & Kids.

                                We entered into Jeans manufacturing and Jeans wholesale market in the year 2018, and during this span of time we have achieved lots of success in making a reputed brand image in the market. Our superior quality work process has rapidly made us authentic and in demand of all range of consumers. Within such hilarious past D-G Gold Denim Jeans has succeeded in bringing the new fashion in the market.
                            </p>
                            {/* button */}
                            <button className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md lg:text-xl text-lg text-white">Read More</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Founder Section */}
            <div className="relative overflow-hidden bg-gray-900 space-y-24">
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                                        <SiWikimediafoundation className='text-white text-2xl' />
                                    </span>
                                </div>
                                <div className="w-fit mt-6">
                                    <h1 className="text-3xl text-white capitalize">
                                        Founder And CEO Of <span className="text-[#3385ff] font-bold">D-Gold Denim Jeans</span>
                                    </h1>
                                    <div className="border-b-2 border-white w-[80%] mt-4"></div>
                                    <p className="mt-4 text-lg text-gray-300 text-justify">
                                        At the heart of "D-G Gold Denim Jeans" is RC Creation, a visionary entrepreneur with a passion for high-quality denim. With years of experience in the fashion and wholesale industry, RC Creation has built a brand synonymous with style, comfort, and durability.
                                        Driven by innovation and customer satisfaction, RC Creation ensures every piece of denim reflects exceptional craftsmanship. Under their leadership, "D-G Gold Denim Jeans" continues to set new standards in the wholesale jeans market, offering trendsetting designs that cater to diverse tastes.
                                        Join us on our journey as we redefine denim for the modern world.
                                    </p>
                                    <div className="mt-6">
                                        <Link className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-base leading-7 text-white shadow-sm ring-1 ring-white hover:bg-blue-700 hover:ring-blue-700" to={"https://bonehornmart.com/"} target='_blank'>
                                            View RC Creation
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0 flex items-center justify-center">
                            <div className="pl-6 lg:pl-0 lg:relative lg:h-auto">
                                <img
                                    loading="lazy"
                                    className="w-full max-w-md rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:max-h-[80vh] lg:w-auto lg:max-w-none sm:mb-4 bg-white"
                                    src={Logo1}
                                    alt="Rc Creation Logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Services */}
            <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
                <div className="w-fit mx-auto">
                    <h1 className="text-3xl text-center text-gray-900 capitalize">
                        Our <span className="text-[#27497b] font-bold">Services</span>
                    </h1>
                    <div className="border-b-2 border-black w-[80%] mx-auto my-4"></div>
                </div>
                <p className="mb-12 text-lg text-gray-500 mx-auto">Here is a few of the awesome Services we provide.</p>

                <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
  <div className="relative h-full">
    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
    <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
      <h3 className="my-2 text-lg font-bold text-gray-800">Branded Jeans</h3>
      <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
      <p className="text-gray-600">
        Branded jeans are high-quality denim products crafted with premium materials, combining stylish designs and exceptional durability for a superior fit and comfort.
      </p>
    </div>
  </div>
  <div className="relative h-full">
    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
    <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
      <h3 className="my-2 text-lg font-bold text-gray-800">Branded Shirts</h3>
      <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
      <p className="text-gray-600">
        Shirts are versatile garments designed for comfort and style, available in various fabrics, patterns, and fits to suit every occasion and preference.
      </p>
    </div>
  </div>

  </div>
  <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16">
  <div className="relative h-full">
    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
    <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
      <h3 className="my-2 text-lg font-bold text-gray-800">Denim Jackets</h3>
      <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
      <p className="text-gray-600">
        Denim jackets are timeless outerwear pieces made from durable denim fabric, offering a perfect blend of style, comfort, and practicality for all seasons.
      </p>
    </div>
  </div>

  <div className="relative h-full">
    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
    <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
      <h3 className="my-2 text-lg font-bold text-gray-800">Ladies' Jeans</h3>
      <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
      <p className="text-gray-600">
        Ladies' jeans are stylish and comfortable denim wear, designed in various cuts and fits to flatter every body type and suit diverse fashion preferences.
      </p>
    </div>
  </div>

  <div className="relative h-full">
    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
    <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
      <h3 className="my-2 text-lg font-bold text-gray-800">Shorts & Skirts</h3>
      <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
      <p className="text-gray-600">
        Shorts and skirts are trendy and comfortable wardrobe staples, available in various styles and fabrics to suit casual and chic looks.
      </p>
    </div>
  </div>
</div>

            </div>

            {/* Why Choose Us */}
            <section className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                        <div className="w-fit mx-auto">
                            <h1 className="text-3xl text-center text-white capitalize">
                                Why  <span className="text-[#3987fc] font-bold">Choose Us?</span>
                            </h1>
                            <div className="border-b-2 border-white w-[80%] mx-auto my-4"></div>
                        </div>
                        <p className="mb-4">Our provided jeans have earned immense popularity in all age groups due to their exclusive designs and trendiness. Due to their attractive designs, elegant looks, eye soothing colors, exquisite patterns and comfortable fitting they are suitable to wear for all occasions like weddings, family functions, corporate meetings, conferences, parties and even for daily purposes. </p>
                    </div>
                    <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                        <div className="relative">
                            <div className="absolute -inset-1">
                                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                                </div>
                            </div>
                            <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                                <div className="p-9">
                                    <MdSupportAgent className='text-black text-4xl' />
                                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Great Supports Team</h3>
                                    <p className="mt-6 text-base text-gray-600">We at D-Gold Jeans provides full support to all our esteemed clients for the proper handling of jeans.</p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-white shadow-md rounded-xl">
                            <div className="p-9">
                                <GrUserExpert className='text-black text-4xl' />
                                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Good Experienced</h3>
                                <p className="mt-6 text-base text-gray-600">With the span of time we have gain a lot of experience in Jeans manufacturing and unveiling latest designs.</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-1">
                                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                                </div>
                            </div>
                            <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                                <div className="p-9">
                                    <LiaCertificateSolid className='text-black text-4xl' />
                                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Certified Company</h3>
                                    <p className="mt-6 text-base text-gray-600">We are ISO 9001:2015 certified company in manufacturing jeans. We deliver high quality work i n all our designs. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testomonials Section */}
            <ClientReview />

        </>
    )
}

export default AboutUs