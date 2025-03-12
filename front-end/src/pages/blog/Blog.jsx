import React, { useState, useRef, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import BlogBanner from "../../assets/images/blog-banner.webp";
import Blog1 from '../../assets/images/blog1.jpg'
import Blog2 from '../../assets/images/blog2.jpg'
import Blog3 from '../../assets/images/blog3.jpg'
import Blog4 from '../../assets/images/blog4.jpg'
import Blog5 from '../../assets/images/blog5.jpg'
import { GoFileDirectoryFill } from "react-icons/go";
import { Helmet } from "react-helmet";

const blogs = [
  {
    id: 1,
    title: "The Best Wholesale Skinny Jeans for Women",
    author: " Ravi",
    date: " March 12, 2025",
    image: Blog4,
    description: "If you're looking to stock premium skinny jeans for women, D-Gold Denim is the ultimate wholesale partner. Here's why:",
    points: [
      " Trendy & Comfortable: Our skinny jeans are crafted for a sleek, modern fit without compromising on comfort.",
      " Premium Quality: Made from high-quality denim with stretchability for all-day wear.",
      " Variety of Styles: Available in classic, distressed, and high-waisted designs.",
      " Bulk Availability: We offer competitive wholesale prices with fast global shipping.",
      " Upgrade your collection with our best-selling skinny jeans and give your customers the latest fashion trends!"
    ],
    category: "Skinny Jeans",
  },
  {
    id: 2,
    title: "Top-Selling Slim Fit Jeans for Men – Wholesale Collection",
    author: " Tonny",
    date: " March 10, 2025",
    image: Blog1,
    description: "Looking to expand your store’s men’s denim collection? D-Gold Denim offers the best wholesale slim-fit jeans. Here's why retailers love our products:",
    points: [
      "Perfect Fit: Slim-fit jeans that offer a modern, tailored look for all occasions.",
      "Durable & Stylish: High-quality fabric that balances flexibility and durability.",
      " Wide Range of Options: Available in classic blue, black, and trendy washed styles.",
      "Global Exporter: We ship worldwide, ensuring timely delivery and bulk order discounts.",
      "Stock up on our best-selling men’s slim-fit jeans and stay ahead of fashion trends!"
    ],
    category: "Slim Fit Jeans",
  },
  {
    id: 3,
    title: "Why Choose D-Gold Denim for Wholesale Bootcut Jeans?",
    author: "Chris Lee",
    date: "Jan 5, 2025",
    image: Blog2,
    description: "Bootcut jeans are making a strong comeback in fashion, and D-Gold Denim offers the best wholesale collection. Here’s why retailers love our bootcut jeans:",
    points: [
      " Classic & Comfortable: A perfect balance between vintage and modern style.",
      " Premium Stitching: High-quality craftsmanship ensures durability.",
      "Multiple Washes & Colors: Choose from a variety of shades to match customer preferences.",
      "Bulk Orders & Discounts: Get competitive prices with global shipping.",
      "Stay ahead in the fashion industry with our premium bootcut jeans—shop wholesale today!"
    ],
    category: "Wholesale Bootcut Jeans",
  },
  {
    id: 4,
    title: "Wholesale Stretch Jeans – The Perfect Blend of Comfort & Style",
    author: "James Petter",
    date: "Jan 25, 2025",
    image: Blog3,
    description: "Looking for premium stretch jeans that offer both style and flexibility? D-Gold Denim is your trusted wholesale supplier. Here’s why our stretch jeans are a best-seller:",
    points: [
      "Ultimate Comfort: Made with high-quality elastane for all-day wear.",
      "Perfect Fit: Adapts to different body types while maintaining shape.",
      " Multiple Styles: Available in classic, ripped, and high-waisted designs.",
      "Wholesale Benefits: Affordable bulk pricing with fast global shipping.",
      "Stock up on our best-selling stretch jeans and provide your customers with the comfort they need!"
    ],
    category: "Wholesale Stretch Jeans",
  },
  {
    id: 5,
    title: "Low-Rise Jeans – The Best Wholesale Denim for a Bold Look",
    author: "Sophia Martinez",
    date: "Oct 25, 2024",
    image: Blog5,
    description: "Low-rise jeans are making a huge comeback, and D-Gold Denim offers the perfect collection for wholesalers. Here’s why they are a must-have:",
    points: [
      "Trendy & Youthful: Perfect for creating a relaxed, stylish vibe.",
      " Premium Fabric: High-quality denim ensures durability and comfort.",
      " Wide Range of Designs: Available in skinny, bootcut, and distressed styles.",
      " Global Wholesale Shipping: Competitive pricing with fast delivery worldwide.",
      "Keep up with the latest denim trends—shop our wholesale low-rise jeans today!"
    ],
    category: "Low-Rise Jeans",
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeCategory, setActiveCategory] = useState("All");
  const blogSectionRef = useRef(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (blogSectionRef.current) {
      window.scrollTo({
        top: blogSectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Recent Blog D-Gold Jeans</title>
        <link rel="canonical" href="" />
      </Helmet>
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
              <div ref={blogSectionRef}>
                {filteredBlogs.slice(0, 6).map((blog) => (
                  <div key={blog.id} className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 hover:text-[#27497b] cursor-pointer">
                      {blog.title}
                    </h2>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <p>📅 {blog.date}</p>
                      <span className="mx-2">•</span>
                      <p>✍ {blog.author}</p>
                    </div>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-[25rem] object- mb-4"
                    />
                    <p className="text-gray-700 mb-4">{blog.description}</p>
                    <ul className=" pl-5 text-gray-600 list-none">
                      {blog.points.map((point, index) => (
                        <li key={index} className="mb-2">
                          ✔ {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-4 p-10 border-[1px] border-gray-300 bg-white shadow-2xl h-fit sticky top-16">
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
                  {["All", ...new Set(blogs.map((blog) => blog.category))].map(
                    (category, index) => (
                      <li
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                        className={`text-gray-600 flex hover:text-[#27497b] cursor-pointer ${category === activeCategory ? 'font-bold' : ''}`}
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
