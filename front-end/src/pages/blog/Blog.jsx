import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Blog1 from "../../assets/images/what-we-do1.jpg";
import BlogBanner from "../../assets/images/blog-banner.webp";
import { GoFileDirectoryFill } from "react-icons/go";

const blogs = [
  {
    id: 1,
    title: "Premium Wholesale Denim Jeans for Women",
    author: "Ravi",
    date: "Jan 15, 2025",
    image: Blog1,
    description: "If you’re looking to stock high-quality denim jeans for women, Denim Vistara is the ultimate wholesale partner. Here’s why:",
    points: [
      "Artificial Intelligence is revolutionizing industries.",
      "Quantum Computing is the next frontier.",
      "Green Technology is paving the way for sustainable living.",
    ],
    category: "Boy Jeans",
  },
  {
    id: 2,
    title: "Healthy Living Tips",
    author: "Jane Smith",
    date: "Jan 10, 2025",
    image: Blog1,
    description: "Simple strategies for a healthier, happier lifestyle.",
    points: [
      "Daily exercise improves mental and physical health.",
      "Balanced diets enhance energy and immunity.",
      "Stress management is key to long-term wellness.",
    ],
    category: "Buy Jeans",
  },
  {
    id: 3,
    title: "Mastering JavaScript",
    author: "Chris Lee",
    date: "Jan 5, 2025",
    image: Blog1,
    description: "Essential techniques to become a JavaScript pro.",
    points: [
      "Understand closures and asynchronous programming.",
      "Leverage ES6+ features for cleaner code.",
      "Explore popular frameworks like React and Vue.",
    ],
    category: "Clothing Exporter",
  },
];

const Blog = () => {
  return (
    <>
      <div className="w-full h-fit">
        <img
          src={BlogBanner}
          alt="Blog Banner"
          className="lg:w-[100%] h-[20em] sm:h-[20em] lg:h-[25em]"
        />
      </div>
      <div className="bg-gray-100">
        <div className="w-[90%] mx-auto px-4 py-8">
          <div className="w-fit mx-auto mb-10">
            <h1 className="text-3xl text-center text-gray-900 capitalize">
              Our <span className="text-[#27497b] font-bold">Recent Blog</span>
            </h1>
            <div className="border-b-2 border-black w-[80%] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="col-span-8 p-10 border-[1px] border-gray-300 bg-white shadow-2xl">
              {blogs.slice(0, 3).map((blog) => (
                <div key={blog.id} className="mb-8">
                  <h2 className="text-2xl font-bold mb-2 hover:text-[#27497b] cursor-pointer">
                    {blog.title}
                  </h2>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <p>{blog.date}</p>
                    <span className="mx-2">•</span>
                    <p>{blog.author}</p>
                  </div>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[20em] object-cover mb-4"
                  />
                  <p className="text-gray-700 mb-4">{blog.description}</p>
                  <ul className="list-disc pl-5 text-gray-600">
                    {blog.points.map((point, index) => (
                      <li key={index} className="mb-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="col-span-4 p-10 border-[1px] border-gray-300 bg-white shadow-2xl h-fit sticky top-0">
              {/* Small Intro */}
              <div className="uppercase font-bold text-md mb-10">
                <p className="text-gray-700">We are Socialize</p>
                <div className="flex space-x-4 mt-4 text-blue-500">
                  <FaFacebook size={24} className="cursor-pointer" />
                  <FaTwitter size={24} className="cursor-pointer" />
                  <FaInstagram size={24} className="cursor-pointer" />
                  <FaLinkedin size={24} className="cursor-pointer" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h2 className="text-md uppercase font-semibold mb-4">
                  Recent Post
                </h2>
                <ul className="space-y-2">
                  {Array.from(new Set(blogs.map((blog) => blog.category))).map(
                    (category, index) => (
                      <li
                        key={index}
                        className="text-gray-600 flex hover:text-[#27497b] cursor-pointer"
                      >
                        <GoFileDirectoryFill className="mr-2 mt-1" /> {category}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
