import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/AddProduct";
import Profile from "./components/Profile";
import { FaBars, FaTimes } from "react-icons/fa";
import AllProducts from "./components/AllProducts";
import { ToastContainer } from "react-toastify";
import PopularP from "./components/PopularP";
import TopProducts from "./components/TopProducts";
import ContactForm from "./components/ContactForm";
import ProductEnquiry from "./components/ProductEnquiry";


const Index = () => {
  const [activePage, setActivePage] = useState("allproducts");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const userDetails = {
    name: "D-Gold Denim Jeans",
    email: "info@d-golddenimjeans.com",
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleSetActivePage = (page, product = null) => {
    setActivePage(page);
    setSelectedProduct(product); // Save the selected product for editing
  };
  

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const renderPage = () => {
    switch (activePage) {
      case "addproduct":
        return <Dashboard setActivePage={handleSetActivePage} selectedProduct={selectedProduct} />;
      case "allproduct":
        return <AllProducts setActivePage={handleSetActivePage} />;
      case "popularproduct":
        return <PopularP />;
      case "topproduct":
        return <TopProducts />;
      case "productenquiry":
        return <ProductEnquiry />;
      case "contactform":
        return <ContactForm />;
      case "profile":
        return <Profile selectedProduct={selectedProduct} />;
      default:
        return <Profile selectedProduct={selectedProduct} />;
    }
  };
  

  return (

    <>
      <ToastContainer />
      <div className="flex overflow-x-auto">
        {/* Sidebar */}
        <div ref={sidebarRef}>
          <Sidebar setActivePage={handleSetActivePage} isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>

        {/* Main Content */}
        <div className="flex-grow p-6 bg-gray-900">
          {/* Top Bar */}
          <div className="bg-gray-800 text-white p-4 rounded-md flex justify-between items-center mb-6">
            {/* Sidebar Toggle Button (Visible on Small Screens) */}
            <button
              className="text-white text-2xl p-2 bg-gray-700 rounded-full focus:outline-none lg:hidden"
              onClick={toggleSidebar}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* User Details */}
            <div className="">
                <h2 className="text-xl font-bold mt-2 ">{userDetails.name}</h2>
                <p className="text-xs">{userDetails.email}</p>
            </div>
          </div>

          {/* Page Content */}
          {renderPage()}
        </div>
      </div>
    </>
  );
};

export default Index;


