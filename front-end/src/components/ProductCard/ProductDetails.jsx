import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/slices/productReduer";
import PopularProducts from "../../pages/homepage/PopularProducts";
import ProductPricePopup from "./ProductPricePopup";
import { Helmet } from "react-helmet";

const ProductPage = () => {
  const { singleproduct } = useSelector((state) => state.product);
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleThumbnails, setVisibleThumbnails] = useState(6); // Start with default value 6
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();

  const id = params.productId;

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const oneproduct = singleproduct.menu;

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    if (oneproduct) {
      const productImages = oneproduct.images || [];
      setMainImage(productImages[0]);
      setThumbnails(productImages);
    } else {
      setError("Product not found.");
    }

    setIsLoading(false);
  }, [oneproduct]);

  useEffect(() => {
    const updateVisibleThumbnails = () => {
      if (window.innerWidth <= 640) {
        setVisibleThumbnails(4); // 4 thumbnails for small screens (sm)
      } else if (window.innerWidth <= 768) {
        setVisibleThumbnails(6); // 6 thumbnails for medium screens (md)
      } else {
        setVisibleThumbnails(6); // Default for large screens
      }
    };

    updateVisibleThumbnails(); // Call on component mount
    window.addEventListener("resize", updateVisibleThumbnails); // Update on resize

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", updateVisibleThumbnails);
    };
  }, []);

  const nextThumbnails = () => {
    if (startIndex + visibleThumbnails < thumbnails.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevThumbnails = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 50;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!oneproduct) {
    return <div>Product data not available.</div>;
  }
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const colorHexMap = {
    "Dark Blue": "#00008B",
    "Light Blue": "#ADD8E6",
    "Classic Blue": "#4169E1",
    "Black": "#000000",
    "Charcoal Gray": "#36454F",
    "Stone Wash Blue": "#5A7D9A",
    "Indigo": "#4B0082",
    "Ash Gray": "#B2BEB5",
    "White": "#FFFFFF",
    "Navy Blue": "#000080",
  };
  return (
    <>

      <div className="bg-white">
        <div className="w-[100%] mx-auto sm:px-3 md:px-4 sm:py-2 md:py-8">
          <h2 className="sm:text-xl sm:block md:hidden md:text-3xl font-semibold text-gray-900 mb-3">
            {oneproduct.name}
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Product Images */}
            <div className="w-full md:w-[40%] flex-col-reverse md:flex-row px-4 mb-8 relative flex gap-4">
              {/* Thumbnails */}
              <div className="flex flex-row md:flex-col items-center">
                <button
                  onClick={prevThumbnails}
                  disabled={startIndex === 0}
                  className="text-4xl disabled:opacity-80 transform rotate-[270deg] md:rotate-0"
                >
                  <FaAngleUp />
                </button>

                <div className="flex flex-row md:flex-col gap-2 justify-center items-center">
                  {thumbnails
                    .slice(startIndex, startIndex + visibleThumbnails)
                    .map((thumbnail, index) => (
                      <img
                        key={index + startIndex}
                        src={thumbnail}
                        loading="lazy"
                        alt={`Thumbnail ${index + startIndex + 1}`}
                        className="md:w-14 md:h-16 sm:w-14 sm:h-16 object-cover rounded-md cursor-pointer opacity-100 hover:opacity-100 transition duration-300"
                        onMouseEnter={() => setMainImage(thumbnail)}
                      />
                    ))}
                </div>

                <button
                  onClick={nextThumbnails}
                  disabled={startIndex + visibleThumbnails >= thumbnails.length}
                  className="text-4xl disabled:opacity-80 transform rotate-[270deg] md:rotate-0"
                >
                  <FaAngleDown />
                </button>
              </div>

              {/* Main Image */}
              <div className="relative w-full overflow-hidden bg-gray-100 flex justify-center items-center"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
                style={{
                  aspectRatio: '3/4', // Standard product image ratio
                  maxHeight: "600px"// Prevent images from being too tall
                }}>
                <img
                  src={mainImage}
                  loading="lazy"
                  alt="Product"
                  className="w-full h-full "
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-[60%] sm:px-2 md:px-6">
              <div className="sm:p-0 md:p-6 bg-white">
                <h2 className="sm:text-xl sm:hidden md:block md:text-3xl font-semibold text-gray-900 mb-3">
                  {oneproduct.name}
                </h2>
                <p className="text-gray-700 sm:text-sm md:text-lg">
                  {oneproduct.moq} Piece (MOQ)
                </p>
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>{oneproduct.name}</title>
                  <link rel="canonical" href="" />
                </Helmet>
                {/* Quantity & Price Section */}
                <div className="md:flex sm:flex-row items-center md:my-5 sm:my-0 gap-4 ">
                  <input
                    type="number"
                    placeholder="Enter Quantity"
                    className="sm:w-full md:w-44 px-3 py-2 md:my-0 sm:my-4 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <p className="px-3 py-2 bg-gray-100 md:my-0 sm:mb-4 text-gray-800 rounded-lg border border-gray-300">
                    In Piece
                  </p>
                  <button
                    className="bg-[#1E2747] text-white px-5 py-2 rounded-lg sm:text-sm md:text-lg font-medium shadow-md hover:bg-[#2571B9] transition-all"
                    onClick={() => setIsPopupOpen(true)}
                  >

                    Get Best Price
                  </button>
                  {/* Price Popup Component */}
                  <ProductPricePopup
                    product={oneproduct}
                    images={thumbnails}
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                  />
                </div>

                {/* Product Details Table */}
                <table className="w-full sm:text-sm md:text-lg text-left text-gray-700">
                  <tbody>

                    <tr className="border-b">
                      <td className="py-3 font-semibold text-gray-800">
                        Color:
                      </td>
                      <td className="flex items-center gap-4 py-4">
                        <div
                          className="w-9 h-9 rounded-full border border-gray-800"
                        
                          style={{ backgroundColor: colorHexMap[oneproduct.colors] || oneproduct.colors }}
                          title={oneproduct.colors}
                        ></div>
                        <p className="px-2 py-1">{oneproduct.colors}</p>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-semibold  text-gray-800">
                        Size :
                      </td>
                      <td className="flex items-center gap-4 py-4">
                        {oneproduct.size.map((item) => (
                          <p className="border border-gray-400 px-2 py-1">{item}</p>
                        ))}
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="py-3 font-semibold  text-gray-800">
                        Type :
                      </td>
                      <td>{oneproduct.fabricType}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-semibold  text-gray-800">
                        Material :
                      </td>
                      <td>{oneproduct.material}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-semibold  text-gray-800">
                        Preferred Buyer From :
                      </td>
                      <td>All Over World</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-semibold  text-gray-800">
                        Business Type :
                      </td>
                      <td>
                        {" "}
                        Manufacturer, Exporter, Supplier, Retailer, Trader
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* More Details Link */}
                <button
                  onClick={() => scrollToSection('section1')}
                  className="text-blue-500 sm:text-sm md:text-lg font-medium hover:text-blue-700 transition-all"
                >
                  Click to view more Details
                </button>

                {/* Action Buttons */}
                <div className="sm:my-0 md:my-6 flex gap-4 items-center md:justify-start sm:justify-center">
                  <Link to={"/contact-us"}>
                    <button
                      className="bg-gray-100 sm:px-2 md:px-5 sm:py-2 md:py-3 md:my-0 sm:my-4 sm:text-sm md:text-lg font-medium rounded-lg text-gray-900 border border-gray-300 hover:bg-gray-200 transition-all"

                    >
                      Contact Now
                    </button>
                  </Link>
                  <button className="bg-[#1E2747] text-white h-fit sm:text-sm md:text-lg sm:px-2 md:px-5 sm:py-2 md:py-3 rounded-lg font-medium shadow-md hover:bg-[#2571B9] transition-all"
                    onClick={() => setIsPopupOpen(true)}
                  >
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
          {isHovering && (
            <div className="fixed top-12 right-[-19em] w-[80%] h-screen overflow-hidden lg:block sm:hidden bg-white border border-gray-300 shadow-lg rounded-lg">
              <img
                src={mainImage}
                loading="lazy"
                alt="Zoomed"
                className="absolute"
                style={{
                  width: "500%",
                  height: "200%",
                  transform: `translate(-${zoomPosition.x}%, -${zoomPosition.y}%)`,
                }}
              />
            </div>
          )}


        </div>
      </div>

      <div id="section1" className="w-full   sm:py-0 md:pb-8 sm:px-0 md:px-4">
        <div className="w-full max-w-7xl mx-auto bg-white  sm:px-1  lg:px-8 ">
          {/* Header Section */}
          <h2 className="sm:text-xl md:text-4xl font-bold text-blue-900 text-center mb-6">
            Product Details
          </h2>

          {/* Product Information Table */}
          <div className="overflow-hidden rounded-lg border border-blue-300 shadow-md overflow-x-auto w-full">
            <table className="w-full sm:text-sm md:text-lg border-collapse">
              <tbody>
                <tr className="border-b border-blue-200 bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-800">
                    Application
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    {oneproduct.application}
                  </td>
                </tr>
                <tr className="border-b border-blue-200 bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-800">Available Colors</td>
                  <td className="px-6 py-3 text-gray-700">
                    {oneproduct.avcolor}
                  </td>
                </tr>
                <tr className="border-b border-blue-200 bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-800">
                    Gender
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    {oneproduct.gender}
                  </td>
                </tr>
                <tr className="border-b border-blue-200 bg-white">
                  <td className="px-6 py-3 font-medium text-gray-800">
                    Season
                  </td>
                  <td className="px-6 py-3 text-gray-700 ">
                    {oneproduct.season}
                  </td>
                </tr>
                <tr className="border-b border-blue-200 bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-800">
                    Features
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    {oneproduct.feature}
                  </td>
                </tr>
                <tr className="border-b border-blue-200 bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-800">
                    Pattern
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    {oneproduct.pattern}
                  </td>
                </tr>
                <tr className="border-b border-blue-200 bg-white">
                  <td className="px-6 py-3 font-medium text-gray-800">
                    Occasion
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    {oneproduct.occasion}
                  </td>
                </tr>
                <tr className="border-b border-blue-200 bg-white">
                  <td className="px-6 py-3 font-medium text-gray-800">
                    Country of Origin
                  </td>
                  <td className="px-6 py-3 text-gray-700">India</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-4 flex justify-center">
            <button className="bg-[#1E2747] text-white sm:text-sm md:text-lg  sm:px-4 md:px-8 sm:py-2 md:py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#2571B9]"
              onClick={() => setIsPopupOpen(true)}
            >
              Yes! I am Interested
            </button>
          </div>
        </div>
      </div>

      <PopularProducts />
    </>
  );
};

export default ProductPage;
