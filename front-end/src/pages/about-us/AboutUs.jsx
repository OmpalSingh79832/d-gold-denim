import React from 'react';
import AboutBanner from "../../assets/images/abot11.jpg";
import Img11 from "../../assets/images/what-we-do1.jpg";
import Img12 from "../../assets/images/what-we-do2.jpg";
import Img13 from "../../assets/images/what-we-do3.jpg";
import { SiWikimediafoundation } from "react-icons/si";
import { MdSupportAgent } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { LiaCertificateSolid } from "react-icons/lia";
import Logo1 from "../../assets/images/footerlogo.png";
import Logo12 from "../../assets/images/logo1.png";
import { Link } from 'react-router-dom';
import ClientReview from '../homepage/ClientReview';
import MenImg1 from "../../assets/images/manufacturer.jpg";


const AboutUs = () => {
    return (
        <>

            <div className="w-full homeslide sm:h-[155px] md:h-[310px] lg:h-[500px]">
                <img
                    src={AboutBanner}
                    alt="About Banner"
                    className="w-full h-full"
                />
            </div>

            {/* ABOUT Section */}
            <div className="w-full lg:h-screen h-full m-auto flex items-center justify-cetner sm:py-4 md:py-20 bg-gray-50 dark:bg-gray-900">
                <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
                    {/*  */}
                    <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
                        <div className="relative">
                            {/* Side Img 1 */}
                            <img className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem] rounded-full" src={Img11} alt="Side Image" />
                            {/* Side Img 2 */}
                            <img className="absolute z-20 lg:top-[12rem] sm:top-[7rem] top-[5rem] sm:-left-[2rem] lg:left-[-5rem] lg:w-[8rem] lg:h-[8rem] sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem] rounded-full" src={Img12} alt="Side Image 2" />
                            {/* Side Img 3 */}
                            <img className="absolute z-20 lg:top-[23rem] sm:top-[14rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem] rounded-full" src={Img13} alt="Side Image 3" />
                            {/* Main Img */}
                            <img className="rounded-full relative right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[16rem] sm:h-[16rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-green-500" src={Logo12} alt="About us" />
                        </div>
                        {/*  */}
                        <div className="md:w-[100%] lg:w-[65%] sm:py-16 p-4 w-full h-full shadow-xl shadow-green-300/40 flex flex-col justify-center items-center sm:px-0 md:px-6 rounded-xl">
                            <div className="w-fit mx-auto">
                                <h1 className="sm:text-xl md:text-3xl text-center text-gray-900 capitalize">
                                    About<span className="text-[#27497b] font-bold"> us</span>
                                </h1>
                                <div className="border-b-2 border-black sm:w-full md:w-[80%] mx-auto mt-4"></div>
                            </div>
                            <p className="md:text-3xl sm:text-xl text-center text-gray-800 dark:text-gray-200 font-bold sm:my-2 md:my-5">We are D-G Gold Denim Jeans
                            </p>
                            <p className="md:text-xl sm:text-sm text-base mt-2 sm:text-start md:text-justify sm:px-2 dark:text-gray-300">
                                <strong>D-G Gold Denim Jeans</strong> Pvt. Ltd. is a leading manufacturer of Jeans which has grown its business in Jeans <strong>Wholesale and Jeans Export to retail sale</strong> of Jeans. The Company was founded under the registered trademark <strong>D-G GOLD</strong> which produces its apparel collection for <strong>Men , Women & Kids</strong>. <br />

                                We entered into Jeans <strong>manufacturing and Jeans wholesale</strong> market in the <strong>year 2005</strong>, and during this span of time we have achieved lots of success in making a <strong>reputed brand image</strong> in the market. Our superior quality work process has rapidly made us authentic and in demand of all range of consumers. Within such hilarious past <strong>D-G Gold Denim Jeans</strong> has succeeded in bringing the new fashion in the market. <br />

                                <strong> D-Gold Denim Jeans</strong> India was <strong>founded in 2005</strong> with a vision to redefine denim fashion. <strong>With over 19 years of expertise</strong>, we have become a trusted <strong>manufacturer, wholesaler, and global exporter</strong> of premium-quality jeans.
                            </p>
                            {/* button */}

                        </div>
                    </div>
                </div>
            </div>

            {/* Our Founder Section */}
            <div className="relative overflow-hidden bg-gray-900 space-y-24 sm:py-4 md:py-0">
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
                                    <h1 className="sm:text-xl md:text-3xl text-white capitalize">
                                        Founder And CEO Of <span className="text-[#3385ff] font-bold">D-Gold Denim Jeans</span>
                                    </h1>
                                    <div className="border-b-2 border-white w-[80%] mt-4"></div>
                                    <p className="mt-4 sm:text-sm md:text-lg text-gray-300 sm:text-start md:text-justify">
                                        At the heart of "D-G Gold Denim Jeans" is RC Creation, a visionary entrepreneur with a passion for high-quality denim. With years of experience in the fashion and wholesale industry, RC Creation has built a brand synonymous with style, comfort, and durability.
                                        Driven by innovation and customer satisfaction, RC Creation ensures every piece of denim reflects exceptional craftsmanship. Under their leadership, "D-G Gold Denim Jeans" continues to set new standards in the wholesale jeans market, offering trendsetting designs that cater to diverse tastes.
                                        Join us on our journey as we redefine denim for the modern world.
                                    </p>
                                    <div className="mt-6">
                                        <Link className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-base leading-7 text-white shadow-sm  hover:bg-blue-700 hover:ring-blue-700" to={"https://bonehornmart.com/"} target='_blank'>
                                            View RC Creation
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0 flex items-center justify-center">
                            <div className="sm:pl-0 lg:pl-0 lg:relative lg:h-auto">
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

            {/* Our Mission Vision Value */}
            <section className="bg-gray-200 py-20">
                <div className="container mx-auto px-4 ">
                    <div className="text-center w-fit mx-auto">
                        <h1 className="sm:text-xl md:text-3xl text-black capitalize ">Our <span className="text-[#3385ff] font-bold">Mission, Vision & Values</span>
                        </h1>
                        <div className="border-b-2 border-black w-[80%] mx-auto mt-4"></div>

                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-4 mt-12">
                        <div className="w-full px-4 mb-8">
                            <div className="rounded-md bg-white shadow-md p-8">
                                <div className="text-4xl font-bold text-purple-600 mb-4">01</div>
                                <h3 className="sm:text-xl md:text-2xl font-bold mb-4">Mission</h3>
                                <p className="text-gray-600 mb-4 sm:text-sm md:text-base">To provide high-quality, stylish, and durable denim jeans at competitive prices, ensuring customer satisfaction and long-term business relationships.</p>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-8">
                            <div className="rounded-md bg-white shadow-md p-8">
                                <div className="text-4xl font-bold text-purple-600 mb-4">02</div>
                                <h3 className="sm:text-xl md:text-2xl font-bold mb-4">Vision</h3>
                                <p className="text-gray-600 mb-4 sm:text-sm md:text-base">To be recognized as a global leader in denim manufacturing, expanding our reach and setting new standards in fashion, comfort, and sustainability.</p>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-8">
                            <div className="rounded-md bg-white shadow-md p-8">
                                <div className="text-4xl font-bold text-purple-600 mb-4">03</div>
                                <h3 className="sm:text-xl md:text-2xl font-bold mb-4">Values</h3>
                                <p className="text-gray-600 mb-4 sm:text-sm md:text-base">We uphold our core values of quality excellence, customer commitment, innovation, integrity, and sustainability, ensuring that every product.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer? */}
            <div className="sm:w-[100%] md:w-[85%] relative flex flex-col justify-between h-full sm:px-4 md:px-10 mx-auto xl:px-0 mt-5">
                <div className="w-fit mx-auto">
                    <h1 className="sm:text-xl md:text-3xl text-center text-gray-900 capitalize">
                        What  <span className="text-[#27497b] font-bold"> We Offer?</span>
                    </h1>
                    <div className="border-b-2 border-black w-[80%] mx-auto my-4"></div>
                </div>
                <p className="mb-12 sm:text-sm md:text-lg text-gray-500 mx-auto">We specialize in all types of jeans, including</p>

                <div className="w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="relative h-full">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                            <h3 className="my-2 text-lg font-bold text-gray-800">Skinny Jeans</h3>
                            <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                            <p className="text-gray-600 sm:text-sm md:text-base">
                                Skinny jeans are designed to hug the body and provide a sleek, modern silhouette, making them perfect for casual or semi-formal occasions.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                            <h3 className="my-2 text-lg font-bold text-gray-800"> Bootcut Jeans</h3>
                            <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                            <p className="text-gray-600 sm:text-sm md:text-base">
                                Bootcut jeans feature a slightly flared hem from the knee down, offering a comfortable fit that balances style and functionality, perfect for pairing with boots..
                            </p>
                        </div>
                    </div>

                </div>
                <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12">
                    <div className="relative h-full">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                            <h3 className="my-2 text-lg font-bold text-gray-800">Slim Fit Jeans</h3>
                            <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                            <p className="text-gray-600 sm:text-sm md:text-base">
                                Slim fit jeans offer a tailored look that’s snug through the hips and thighs, giving a sharp, fashion-forward appearance suitable for both day and night.
                            </p>
                        </div>
                    </div>

                    <div className="relative h-full">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                            <h3 className="my-2 text-lg font-bold text-gray-800"> Stretch Jeans</h3>
                            <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                            <p className="text-gray-600 sm:text-sm md:text-base">
                                Stretch jeans are crafted with added elastane for enhanced comfort and flexibility, providing a snug fit while allowing for full movement and all-day wear.
                            </p>
                        </div>
                    </div>

                    <div className="relative h-full">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                            <h3 className="my-2 text-lg font-bold text-gray-800">High-Waisted Jeans</h3>
                            <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                            <p className="text-gray-600 sm:text-sm md:text-base">
                                High-waisted jeans sit above the natural waistline, creating a flattering and elongated silhouette, ideal for those seeking a vintage-inspired or trendy look.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-12">
                    <div className="relative h-full">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-black rounded-lg">
                            <h3 className="my-2 text-lg font-bold text-gray-800">Ripped & Distressed Jeans</h3>
                            <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                            <p className="text-gray-600 sm:text-sm md:text-base">
                                Ripped and distressed jeans add an edgy touch to your wardrobe with intentional tears and worn effects, offering a bold, casual look for modern fashion enthusiasts.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-500 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-red-500 rounded-lg">
                            <h3 className="my-2 text-lg font-bold text-gray-800"> Low-Rise Jeans</h3>
                            <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                            <p className="text-gray-600 sm:text-sm md:text-base">
                                Low-rise jeans sit just below the waist, offering a youthful and relaxed fit, perfect for creating a laid-back yet stylish vibe.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-blue-500 rounded-lg">
                            <h3 className="my-2 text-lg font-bold text-gray-800">Men’s Track Pants</h3>
                            <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                            <p className="text-gray-600 sm:text-sm md:text-base">
                                Men’s track pants are designed for comfort and performance, made from breathable fabrics with a relaxed fit that ensures flexibility during workouts or casual wear.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                            <h3 className="my-2 text-lg font-bold text-gray-800">Men’s Jogger Pants</h3>
                            <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                            <p className="text-gray-600 sm:text-sm md:text-base">
                                Men’s jogger pants feature a tapered fit with an elastic waistband and cuffs, providing a sporty yet stylish that’s perfect for both active and casual outfits.
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
                            <h1 className="sm:text-xl md:text-3xl text-center text-white capitalize">
                                Why  <span className="text-[#3987fc] font-bold">Choose Us?</span>
                            </h1>
                            <div className="border-b-2 border-white w-[80%] mx-auto my-4"></div>
                        </div>
                        <p className="sm:mb-0 md:mb-4 sm:text-sm md:text-base">Our provided jeans have earned immense popularity in all age groups due to their exclusive designs and trendiness. Due to their attractive designs, elegant looks, eye soothing colors, exquisite patterns and comfortable fitting they are suitable to wear for all occasions like weddings, family functions, corporate meetings, conferences, parties and even for daily purposes. </p>
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
                                    <h3 className="md:mt-6 sm:text-xl md:text-2xl font-bold text-gray-900 sm:mt-0">Great Supports Team</h3>
                                    <p className="sm:mt-0 md:mt-6 text-base text-gray-600">We at D-Gold Jeans provides full support to all our esteemed clients for the proper handling of jeans.</p>
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

            {/*  Manufacturing & Infrastructure */}
                  < div className="shadow-2xl sm:py-4 md:py-20 px-5 lg:px-20" >
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16">
                      {/* Text Section */}
                      <div className="lg:col-span-7">
                        <div className="w-fit mb-4">
                          <h1 className="sm:text-xl md:text-3xl text-gray-900">
                            Our <span className="text-[#27497b] font-bold">  Manufacturing & Infrastructure</span>
                          </h1>
                          <div className="border-b-2 border-black w-[80%] mt-4"></div>
                        </div>
            
                        <p className="text-gray-700 sm:text-sm md:text-lg leading-relaxed mb-6 sm:text-start md:text-justify">
                        At D-Gold Denim Jeans, we operate a state-of-the-art production unit in Delhi, equipped with advanced machinery and skilled artisans. Our strict quality control process ensures that every pair of jeans meets international standards.
                        </p>
                        <ul className='text-gray-900 sm:text-sm md:text-lg leading-relaxed mb-6'>
                            <li className='py-1'><strong>💠 Production Facility:</strong> High-capacity manufacturing for bulk orders.</li>
                            <li className='py-1'><strong>💠 Quality Control:</strong> Every product undergoes thorough checks.</li>
                            <li className='py-1'><strong>💠 Warehousing & Logistics:</strong> Secure storage and timely delivery worldwide.</li>
                           
                        </ul>
                        <h3 className='text-xl font-bold'>Global Presence / Export Markets</h3>
                       <p className='text-gray-900 sm:text-sm md:text-lg leading-relaxed my-2'>We proudly export our jeans worldwide, catering to retailers, wholesalers, and fashion brands in:</p>
                       <strong className='text-gray-900 sm:text-sm md:text-lg leading-relaxed my-2'>🌎 USA, Europe, Middle East, Asia, Africa, and All Over World!</strong>
                       <p className='text-gray-900 sm:text-sm md:text-lg leading-relaxed my-2'>Our strong distribution network allows us to deliver premium denim globally with reliability and efficiency.</p>
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

            {/* Testomonials Section */}
            <ClientReview />

        </>
    )
}

export default AboutUs