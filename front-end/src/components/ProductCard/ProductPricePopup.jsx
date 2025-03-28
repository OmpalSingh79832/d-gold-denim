import React, { useRef, useState } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductPricePopup = ({ product, images, isOpen, onClose }) => {
  if (!isOpen) return null;

  const sliderRef = useRef(null);
  const [formData, setFormData] = useState({
    quantity: "",
    country: "",
    email: "",
    message: "",
    images: images[0],
    name: product.name,
  });
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8500/api/productenquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("Enquiry submitted successfully.");
        setTimeout(() => {
          onClose();
        }, 2000);
        setFormData({ quantity: '', country: '', email: '', message: '' });
      } else {
        setSubmissionStatus("Failed to submit enquiry.");
      }
    } catch (error) {
      setSubmissionStatus("An error occurred while submitting the enquiry.");
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="fixed inset-0 sm:mt-[50px] flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-2xl w-full max-w-4xl sm:p-2 sm:mx-2 md:p-8 rounded-lg relative">
        <button className="absolute top-2 sm:right-2 md:right-6 text-xl" onClick={onClose}>✖</button>

        <div className="grid grid-cols-12 sm:gap-0 md:gap-6 mx-4">
          <div className="sm:col-span-12 md:col-span-6">
            <h2 className="sm:text-lg md:text-xl font-semibold">{product.name}</h2>
            <div className='md:block sm:hidden'>
            <div className="mt-4 relative">
              <button className="absolute left-4 mt-[25%] bg-blue-200 p-3 border-[2px] border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition z-10" onClick={() => sliderRef.current.slickPrev()}>
                <FaAngleLeft size={15} />
              </button>
              <button className="absolute right-4 mt-[25%] bg-blue-200 p-3 border-[2px] border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition z-10" onClick={() => sliderRef.current.slickNext()}>
                <FaAngleRight size={15} />
              </button>
            </div>
            <Slider {...settings} ref={sliderRef} >
              {images.map((img, index) => (
                <img key={index} src={img} alt={`Product ${index}`} className="w-full h-56 object-contain" />
              ))}
            </Slider>
            </div>
            <p className="sm:mt-2 md:mt-8 sm:text-sm md:text-base text-gray-700"><strong>Minimum Piece Quantity:</strong> {product.moq} Piece</p>
            <p className="text-gray-700 my-2 sm:text-sm md:text-base sm:hidden md:block"><strong>Preferred Buyer From:</strong> All Over World</p>
            <h2 className="sm:text-sm md:text-base text-gray-700 sm:hidden md:block"><strong>Available Colors:</strong> {product.avcolor}</h2>
          </div>

          <div className="sm:col-span-12 md:col-span-6">
            <h3 className="sm:text-sm md:text-xl sm:my-2 md:mb-4 text-center bg-blue-500 text-white sm:py-1 md:py-2">Get a Quick Quote</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block sm:text-sm md:text-base font-medium">Enter Piece Quantity</label>
                <input required name="quantity" placeholder='Please Enter Quantity' type="number" value={formData.quantity} onChange={handleChange} className="sm:placeholder:text-xs md:placeholder:text-sm w-full sm:p-1 md:p-2 border-[1px] border-gray-500 focus-visible:outline-none rounded-md" />
              </div>
              <div className="my-3">
                <label className="block sm:text-sm md:text-base font-medium">Select Your Country</label>
                <select required name="country" value={formData.country} onChange={handleChange} className="sm:placeholder:text-xs md:placeholder:text-sm w-full sm:p-1 md:p-2 border-[1px] border-gray-500 focus-visible:outline-none rounded-md">
                  <option value="">Select Country</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>Indonesia</option>
                  <option>Brazil</option>
                  <option>Nigeria</option>
                  <option>Bangladesh</option>
                  <option>Russia</option>
                  <option>Mexico</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="my-3">
                <label className="block sm:text-sm md:text-base font-medium">Enter Email ID</label>
                <input required name="email" placeholder='Please Enter Your Email' type="email" value={formData.email} onChange={handleChange} className="sm:placeholder:text-xs md:placeholder:text-sm w-full sm:p-1 md:p-2 border-[1px] border-gray-500 focus-visible:outline-none rounded-md" />
              </div>
              <div className="my-3">
                <label className="block sm:text-sm md:text-base font-medium">Enter Message</label>
                <textarea name="message" placeholder='Type Your Message' value={formData.message} onChange={handleChange} className="sm:placeholder:text-xs md:placeholder:text-sm w-full sm:p-1 md:p-2 border-[1px] border-gray-500 focus-visible:outline-none rounded-md" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white sm:text-sm md:text-base sm:py-1 md:py-2 rounded-md">Send Enquiry</button>
            </form>
            {submissionStatus && <p className="mt-4 text-center text-green-600">{submissionStatus}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPricePopup;
