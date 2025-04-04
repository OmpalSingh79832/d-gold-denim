import React from "react";
import Slider from "react-slick";
import { IoStarSharp } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Leslie Carter ",
    role: "USA",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    review: "We've been sourcing jeans from this manufacturer for over two years now, and the quality is consistently top-notch. The stitching, fabric, and fit are exactly what our customers demand. Plus, their bulk pricing and timely delivery make them our go-to supplier!"
  },
  {
    name: "Sophia Martinez",
    role: "Spain",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    review: "Excellent service and premium denim quality! The company ensures smooth logistics and hassle-free exports. Our customers love the durability of these jeans, making it a profitable investment for our business."
  },
  {
    name: "Ahmed Khan",
    role: "UAE",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    review: "The best denim supplier we've worked with! Their attention to detail and ability to customize designs according to our requirements have helped us grow our fashion brand. Highly recommend for any wholesale buyers looking for reliability and quality"
  },
  {
    name: "Lisa Wong",
    role: "Australia",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    review: "Great communication, competitive prices, and superior craftsmanship! We’ve placed multiple bulk orders, and each time, the jeans exceed our expectations. Perfect for retailers looking to stock high-quality denim."
  },
  {
    name: "Ricardo Silva",
    role: "Brazil",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    review: "As a wholesaler, I need suppliers I can trust, and this company delivers on every front – consistency, affordability, and excellent customer service. Their jeans are stylish, durable, and always in demand in our market."
  }
];

const ClientReview = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="py-12 bg-gray-50 sm:pt-4 lg:py-20 overflow-x-hidden">
      <div className="px-4 mx-auto w-[100%] sm:px-0 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="sm:text-xl md:text-3xl text-gray-900 capitalize">
              Our happy clients <span className="text-[#27497b] font-bold">say about us</span>
            </h1>
            <div className="border-b-2 border-black w-[80%] mx-auto mt-4"></div>
          </div>

          {/* Background Gradient */}
          <div className="relative sm:mt-0 md:mt-10 w-full">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
                }}
              />
            </div>

            {/* Slick Slider */}
            <Slider {...settings} className="relative mx-auto w-full ">
              {reviews.map((review, index) => (
                <div key={index} className="p-4">
                  <div className="flex flex-col shadow-lg bg-white p-6 lg:py-8 lg:px-7 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {Array(5).fill().map((_, i) => (
                          <IoStarSharp key={i} className="text-yellow-500 text-xl ml-1" />
                        ))}
                      </div>
                      <blockquote className="flex-1 mt-4">
                        <p className="md:text-lg sm:text-sm leading-relaxed text-gray-900">{review.review}</p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-6">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-14 h-14"
                        src={review.image}
                        alt={review.name}
                      />
                      <div className="ml-4">
                        <p className="sm:text-sm md:text-base font-bold text-gray-900">{review.name}</p>
                        <p className="mt-0.5 md:text-sm sm:text-xs text-gray-600">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
