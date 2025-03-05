import React from 'react';
import ContactBanner from "../../assets/images/contactbanner.jpg";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaLinkedinIn, FaUserLock } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";


const ContactUs = () => {
    return (
        <>

            <div className="w-full h-fit">
                <img
                    src={ContactBanner}
                    alt="Contact Banner"
                    className="lg:w-[100%] h-[20em] sm:h-[20em] lg:h-[25em]"
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
                        <form>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="relative flex items-center">
                                    <input type="text" placeholder="First Name" className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none" />
                                    <FaUserLock />
                                </div>
                                <div className="relative flex items-center">
                                    <input type="text" placeholder="Last Name" className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none" />
                                    <FaUserLock />
                                </div>
                                <div className="relative flex items-center">
                                    <input type="number" placeholder="Phone No." className="px-2 py-3 bg-white text-black w-full text-sm  border-b border-gray-300 focus:border-blue-500 outline-none" />
                                    <FaPhoneAlt />
                                </div>
                                <div className="relative flex items-center">
                                    <input type="email" placeholder="Email" className="px-2 py-3 bg-white text-black w-full text-sm  border-b border-gray-300 focus:border-blue-500 outline-none" />
                                    <CiMail />
                                </div>
                                <div className="relative flex items-center sm:col-span-2">
                                    <textarea placeholder="Write Message" className="px-2 pt-3 bg-white text-black w-full text-sm  border-b border-gray-300 focus:border-blue-500 outline-none" defaultValue={""} />
                                    <CiMail />
                                </div>
                                <div className="col-span-full">
                                    <h6 className="text-sm text-gray-800">Select Subject</h6>
                                    <div className="flex max-lg:flex-col gap-6 mt-4">
                                        <div className="flex items-center">
                                            <input id="radio1" type="radio" name="value1" className="hidden peer" defaultChecked />
                                            <label htmlFor="radio1" className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                                                <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full" />
                                            </label>
                                            <p className="text-sm text-gray-500 ml-4">General Inquiry</p>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="radio2" type="radio" name="value1" className="hidden peer" />
                                            <label htmlFor="radio2" className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                                                <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full" />
                                            </label>
                                            <p className="text-sm text-gray-500 ml-4">Technical Support</p>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="radio3" type="radio" name="value1" className="hidden peer" />
                                            <label htmlFor="radio3" className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                                                <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full" />
                                            </label>
                                            <p className="text-sm text-gray-500 ml-4">Website Feedback</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide text-white bg-blue-600 hover:bg-blue-700">
                                <LuSend className='mr-2' />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ContactUs