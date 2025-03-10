import React, { useState } from 'react';
import ContactBanner from "../../assets/images/contactbanner.jpg";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaLinkedinIn, FaUserLock } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { CiFlag1 } from "react-icons/ci";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        product: '',
        country: '',
        message: ''
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          phone: e.target.phone.value,
          email: e.target.email.value,
          product: e.target.product.value,
          country: e.target.country.value,
          message: e.target.message.value,
        };
      
        try {
          const response = await fetch("http://localhost:8500/api/contact/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
      
          const data = await response.json();
          if (data.message === "Enquiry submitted successfully") {
            toast.success("Enquiry submitted successfully!", {
                position: "top-right",
                autoClose: 3000, // Closes in 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
              });
          } else {
            toast.error("Failed to send enquiry.");
          }
        } catch (error) {
          toast.error("Error sending enquiry.");
        }
      };
      
    

    return (
        <>
        <ToastContainer />
            <div className="w-full h-fit">
                <img
                    src={ContactBanner}
                    alt="Contact Banner"
                    className="w-[100%] h-[20em] sm:h-[20em] lg:h-[25em]"
                />
            </div>

            <div className="max-w-5xl max-lg:max-w-3xl mx-auto bg-white my-10 font-[sans-serif]">
                <div className="text-center px-6">
                    <div className="w-fit mx-auto">
                        <h1 className="text-3xl text-center text-black capitalize">
                            Get In <span className="text-[#3987fc] font-bold">Touch</span>
                        </h1>
                        <div className="border-b-2 border-black w-[80%] mx-auto my-4"></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">Please don't hesitate to contact us with any inquiries or messages</p>
                </div>
                <div className="grid lg:grid-cols-3 items-start gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-12">
                    <div className="bg-[#011c2b] rounded-lg p-6 h-full max-lg:order-1">
                        <h2 className="text-xl text-white">Contact Information</h2>
                        <p className="text-sm text-gray-300 mt-4">If you have any questions simply use the following contact details. For Manufacturing and Export related enquiries:</p>
                        <ul className="mt-16 space-y-8">
                            <li className="flex items-center">
                                <CiMail className='text-xl text-white' />
                                <p className="text-sm text-gray-300 ml-4">
                                    rccreation.team@yahoo.com
                                </p>
                            </li>
                            <li className="flex items-center">
                                <FaPhoneAlt className='text-md text-white' />
                                <p className="text-sm text-gray-300 ml-4">
                                    +91 9266-116358, +91 11-4227-3742
                                </p>
                            </li>
                            <li className="flex items-center">
                                <FaLocationDot className='text-xl text-white' />
                                <p className="text-sm text-gray-300 ml-4">
                                    Ghaziabad-201102, UP, INDIA
                                </p>
                            </li>
                        </ul>
                        <ul className="flex flex-wrap gap-4 mt-16">
                            <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <p>
                                    <FaFacebook className='text-white text-2xl cursor-pointer' />
                                </p>
                            </li>
                            <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <p>
                                    <FaLinkedinIn className='text-white text-xl cursor-pointer' />
                                </p>
                            </li>
                            <li className="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <p>
                                    <FaInstagram className='text-white text-xl cursor-pointer' />
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 lg:col-span-2">
                        <form onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="relative flex items-center">
                                    <input 
                                        type="text" 
                                        name="firstName" 
                                        required
                                        placeholder="First Name" 
                                        className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                                        value={formData.firstName} 
                                        onChange={handleChange}
                                    />
                                    <FaUserLock />
                                </div>
                                <div className="relative flex items-center">
                                    <input 
                                        type="text" 
                                        name="lastName"
                                        required 
                                        placeholder="Last Name" 
                                        className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                                        value={formData.lastName} 
                                        onChange={handleChange}
                                    />
                                    <FaUserLock />
                                </div>
                                <div className="relative flex items-center">
                                    <input 
                                        type="number" 
                                        name="phone" 
                                        required
                                        placeholder="Phone No." 
                                        className="px-2 py-3 bg-white text-black w-full text-sm border-b border-gray-300 focus:border-blue-500 outline-none"
                                        value={formData.phone} 
                                        onChange={handleChange}
                                    />
                                    <FaPhoneAlt />
                                </div>
                                <div className="relative flex items-center">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        required
                                        placeholder="Email" 
                                        className="px-2 py-3 bg-white text-black w-full text-sm border-b border-gray-300 focus:border-blue-500 outline-none"
                                        value={formData.email} 
                                        onChange={handleChange}
                                    />
                                    <CiMail />
                                </div>

                                <div className="relative flex items-center">
                                    <input 
                                        type="text" 
                                        name="product" 
                                        required
                                        placeholder="Products you looking" 
                                        className="px-2 py-3 bg-white text-black w-full text-sm border-b border-gray-300 focus:border-blue-500 outline-none"
                                        value={formData.product} 
                                        onChange={handleChange}
                                    />
                                    <MdProductionQuantityLimits />
                                </div>
                                <div className="relative flex items-center">
                                    <input 
                                        type="text" 
                                        name="country" 
                                        required
                                        placeholder="Your country" 
                                        className="px-2 py-3 bg-white text-black w-full text-sm border-b border-gray-300 focus:border-blue-500 outline-none"
                                        value={formData.country} 
                                        onChange={handleChange}
                                    />
                                    <CiFlag1 />
                                </div>

                                <div className="relative flex items-center sm:col-span-2">
                                    <textarea 
                                        name="message" 
                                        placeholder="Write Message" 
                                        required
                                        className="px-2 pt-3 bg-white text-black w-full text-sm border-b border-gray-300 focus:border-blue-500 outline-none"
                                        value={formData.message} 
                                        onChange={handleChange}
                                    />
                                    <CiMail />
                                </div>
                            </div>
                            <button type="submit" className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide text-white bg-blue-600 hover:bg-blue-700">
                                <LuSend className='mr-2' />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
