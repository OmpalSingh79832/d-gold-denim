import React, { useEffect } from 'react';
import Logo from "../../assets/images/logo1.png";
import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { FaPhoneVolume, FaHeadphonesSimple } from "react-icons/fa6";
import { RiMailLine } from "react-icons/ri";
import { LuMail } from "react-icons/lu";
const Footer = () => {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (

    <div className="relative footer-bg">
      <div className="px-4 pt-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[90%] md:px-24 lg:px-8">
        <div className="grid gap-8 mb-4 grid-cols-12">
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
            <Link
              to={"/"}
              aria-label="Go home"
              title="D-Gold Denim Jeans"
              className="inline-flex items-center"
            >
              <img src={Logo} alt="" className='w-[35%] rounded-md' />

            </Link>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-base text-deep-purple-50">
                At the heart of "<strong>D-G Gold Denim Jeans</strong>" is <br /> <strong> RC Creation</strong>, a visionary entrepreneur with a strong passion for <strong>High-quality denim.</strong>
                <br /> We proudly export our jeans <strong>Worldwide</strong>, catering to <strong>Retailers</strong>, <strong>Wholesalers</strong>, and <strong>Fashion Brands.</strong>
              </p>

            </div>
          </div>
          <div className='lg:col-span-2 md:col-span-6 sm:col-span-12'>
            <p className="font-semibold tracking-wide text-xl text-teal-accent-400">Quick Links</p>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Home</Link></li>
              <li><Link to="/about-us" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">About Us</Link></li>
              <li><Link to="/catalogue" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Catalogue</Link></li>
              <li><Link to="/our-partner" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Our Partners</Link></li>
              <li><Link to="/blog" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Our Blog</Link></li>
              <li><Link to="/contact-us" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Contact Us</Link></li>
            </ul>
          </div>
          <div className='lg:col-span-2 md:col-span-6 sm:col-span-12'>
            <p className="font-semibold tracking-wide text-xl text-teal-accent-400">Denim Jeans</p>
            <ul className="mt-2 space-y-2">
              <li><Link to="/catalogue" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"> Men Jeans</Link></li>
              <li><Link to="/catalogue" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"> Women Jeans </Link></li>
              <li><Link to="/catalogue" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"> Girls Jeans </Link></li>
              <li><Link to="/catalogue" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"> Kids Jeans </Link></li>
              <li><Link to="/catalogue" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">  Maternity Jeans</Link></li>
              <li><Link to="/catalogue" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">  Skinny Jeans</Link></li>
            </ul>
          </div>
          <div className='lg:col-span-4 md:col-span-6 sm:col-span-12'>
            <p className="font-semibold tracking-wide text-xl text-teal-accent-400">Head Office Address</p>
            <ul className="mt-2 space-y-2">
              <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 flex items-center"><SlLocationPin className='mr-2 text-white lg:text-3xl md:text-2xl' /> 36 Choudhary chock  Loni toli Mohalla chock Ghaziabad-201102, UP, INDIA</li>
              <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 flex items-center"><FaPhoneVolume className='mr-2 text-white text-lg' />+91 9266-116358</li>
              <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 flex items-center"><FaHeadphonesSimple className='mr-2 text-white text-lg' />+91 11-4227-3742</li>
              <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 flex items-center"><LuMail className='mr-2 text-white text-lg' />info@d-golddenimjeans.com</li>
              <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400 flex items-center"><RiMailLine className='mr-2 text-white text-lg' />rccreation.team@yahoo.com</li>
            </ul>
          </div>

        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-md text-gray-100">
            © Copyright 2025 D-Gold Denim Jeans. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer