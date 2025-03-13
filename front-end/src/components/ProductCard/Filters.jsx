import React, { useState, useEffect, useMemo } from "react";
import { FaPlus, FaMinus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/slices/productReduer";
import { Helmet } from "react-helmet";

const Filters = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const productsFromApi = Array.isArray(productState.products)
    ? productState.products
    : productState.products.menu || [];

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const categories = useMemo(() => {
    return Array.from(new Set(productsFromApi.map((product) => product.category)));
  }, [productsFromApi]);

  const colors = useMemo(() => {
    return Array.from(new Set(productsFromApi.map((product) => product.colors)));
  }, [productsFromApi]);

  const toggleSelection = (setSelected, value, selectedArray) => {
    setSelected(
      selectedArray.includes(value)
        ? selectedArray.filter((item) => item !== value)
        : [...selectedArray, value]
    );
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    let filtered = productsFromApi;

    if (selectedCategories.length) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedColors.length) {
      filtered = filtered.filter((product) =>
        selectedColors.includes(product.colors)
      );
    }

    setFilteredProducts(filtered.length ? filtered : productsFromApi);
  }, [selectedCategories, selectedColors, productsFromApi]);

  // Logic for paginated products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Pagination handlers
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Generate the page numbers to display
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Top Products D-Gold Jeans</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div className="grid grid-cols-12 w-full max-w-[1500px] mx-auto mt-2">
        {/* Filters Panel */}
        <div className="sm:col-span-12 md:col-span-6 lg:col-span-3 p-4 border-r">
          <div className="sticky top-0">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Choose Category
            </h2>
            {/* Category Filter */}
            <div className="border p-3 mb-2 cursor-pointer">
              <div
                className="flex justify-between items-center"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                <span>CATEGORIES</span>
                {isCategoryOpen ? <FaMinus /> : <FaPlus />}
              </div>
              {isCategoryOpen && (
                <div className="mt-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2 text-sm mb-1">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() =>
                          toggleSelection(setSelectedCategories, category, selectedCategories)
                        }
                      />
                      {category}
                    </label>
                  ))}
                </div>
              )}
            </div>
            {/* Colors Filter */}
            <div className="border p-3 mb-2 cursor-pointer">
              <div
                className="flex justify-between items-center"
                onClick={() => setIsColorOpen(!isColorOpen)}
              >
                <span>COLOR</span>
                {isColorOpen ? <FaMinus /> : <FaPlus />}
              </div>
              {isColorOpen && (
                <div className="mt-2 gap-2">
                  {colors.map((color) => (
                    <label key={color} className="flex items-center gap-2 text-sm mb-1">
                      <div
                        className="w-5 h-5 rounded-full border"
                        style={{ backgroundColor: color }}
                      ></div>
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() =>
                          toggleSelection(setSelectedColors, color, selectedColors)
                        }
                      />
                      {color}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Products Display */}
        <div className="sm:col-span-12 md:col-span-6 lg:col-span-9 sm:p-2 md:p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Products</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 sm:px-0 md:px-4 for-md-screen">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <div
                  key={product._id}
                  className="border sm:rounded-none md:rounded shadow-sm text-center overflow-hidden"
                >
                  <Link to={`/product-details/${product._id}`}>
                    <div className="w-full overflow-hidden group">
                      {/* Image Container */}
                      <div className="relative w-full">
                        {/* Default Image */}
                        <img
                          loading="lazy"
                          src={product.images[2]}
                          alt={product?.name}
                          className="w-full object-cover object-top aspect-[59/70] transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                        />
                        {/* Hover Image */}
                        <img
                          loading="lazy"
                          src={product?.hoverimage}
                          alt={product?.name}
                          className="absolute top-0 left-0 w-full object-cover object-top aspect-[59/70] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                    {/* Product Name */}
                    <div className="sm:bg-white md:bg-[#efe7e2] py-2 h-16">
                      <span className="text-gray-900 sm:text-sm">
                        {product?.name}
                      </span>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center col-span-3 text-gray-500">
                No products found.
              </p>
            )}
          </div>

          {/* Pagination Controls */}
          <div className="md:flex sm:flex-wrap justify-stretch items-center mt-8  border-t-2 pt-4">
            {/* Page Number */}
            <div className="text-gray-700 md:block sm:hidden">
              Page {currentPage} of {totalPages}
            </div>

            <div className="flex items-center justify-center text-center gap-2">
              <button
                onClick={prevPage}
                className="text-blue-500 py-2 sm:px-2 md:px-10 flex items-center gap-2 text-base font-semibold uppercase"
                disabled={currentPage === 1}
              >

                Previous
              </button>

              {/* Page Numbers */}
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`py-2 px-4 w-10 h-10 rounded-full ${currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={nextPage}
                className=" text-blue-500 py-2 sm:px-2 md:px-10 flex items-center gap-2 text-base font-semibold uppercase"
                disabled={currentPage === totalPages}
              >
                Next

              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
