import React, { useRef, useState } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductPricePopup = ({ product, images, isOpen, onClose }) => {
  if (!isOpen) return null;

  const sliderRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    quantity: "",
    country: "",
    email: "",
    message: "",
    images: images[0],
    name: product.name,
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch('http://localhost:8500/api/productenquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Enquiry submitted successfully');
        setFormData({ quantity: '', country: '', email: '', message: '' });
      } else {
        alert('Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the enquiry');
    }
  };

  // Slider settings
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-2xl w-full max-w-4xl p-8 rounded-lg relative">
        {/* Close Button */}
        <button className="absolute top-2 right-6 text-xl" onClick={onClose}>
          ✖
        </button>

        <div className="grid grid-cols-12 gap-6 mx-4">
          {/* Left Side - Product Info */}
          <div className="col-span-6">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <div className="mt-4">
              <div className="relative md:block sm:hidden">
                <button
                  className="absolute left-4 mt-[25%] bg-blue-200 p-3 border-[2px] border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition z-10"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <FaAngleLeft size={15} />
                </button>
                <button
                  className="absolute right-4 mt-[25%] bg-blue-200 p-3 border-[2px] border-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition z-10"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <FaAngleRight size={15} />
                </button>
              </div>
              <Slider {...settings} ref={sliderRef}>
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Product ${index}`}
                    className="w-full h-56 object-contain"
                  />
                ))}
              </Slider>
            </div>
            <p className="mt-8 text-gray-700"> <strong>Minimum Piece Quantity :</strong> {product.moq} Piece </p>
            <p className="text-gray-700 my-2"><strong>Preferred Buyer From:</strong> All Over World</p>
            <h2 className="text-base text-gray-700"><strong>Available Colors:</strong> {product.avcolor}</h2>
          </div>

          {/* Right Side - Form */}
          <div className="col-span-6">
            <h3 className="text-xl mb-4 text-center bg-blue-500 text-white py-2">Get a Quick Quote</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-base font-medium">Enter Piece Quantity</label>
                <input
                  required
                  name="quantity"
                  placeholder='Please Enter Quantity'
                  type="number"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="placeholder:text-sm w-full p-2 border-[1px] border-gray-500 focus-visible:outline-none rounded-md"
                />
              </div>

              <div className="my-3">
                <label className="block text-base font-medium">Select Your Country</label>
                <select
                  required
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="placeholder:text-sm w-full p-2 border-[1px] border-gray-500 focus-visible:outline-none rounded-md"
                >
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
                <label className="block text-sm font-medium">Enter Email ID</label>
                <input
                  required
                  name="email"
                  placeholder='Please Enter Your Email'
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="placeholder:text-sm w-full p-2 border-[1px] border-gray-500 focus-visible:outline-none rounded-md"
                />
              </div>
              <div className="my-3">
                <label className="block text-sm font-medium">Enter Message</label>
                <textarea
                  name="message"
                  placeholder='Type Your Message'
                  value={formData.message}
                  onChange={handleChange}
                  className="placeholder:text-sm w-full p-2 border-[1px] border-gray-500 focus-visible:outline-none rounded-md"
                />
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPricePopup;
