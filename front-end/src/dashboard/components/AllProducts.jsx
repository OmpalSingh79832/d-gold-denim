import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { deleteroductById, getProducts } from '../../redux/slices/productReduer';

const AllProducts = ({ setActivePage }) => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const data = Array.isArray(products) ? products : products.menu || [];

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteroductById(id))
        .unwrap()
        .then(() => {
          dispatch(getProducts()); // Re-fetch updated product list
          alert("Product deleted successfully!");
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
          alert("Failed to delete product.");
        });
    }
  };
  

 

  return (
    <div className="bg-white shadow rounded-2xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 pt-6">
        All Product Details
      </h1>
      <div className='h-[60vh] overflow-y-auto'>
        <div className="flex items-center p-2 border-b font-semibold text-lg text-gray-700 ">
          <div className="w-20">Image</div>
          <div className="flex-1">Product Name</div>
          <div className="flex-1">Category</div>
          <div className="flex-1">Color</div>
          <div className="flex-1">Gender</div>
          <div className="w-24 text-center">Actions</div>
        </div>

        {data.map((product) => (
          <div key={product.id} className="flex items-center p-1 border-b text-base text-gray-600 ">
            <div className="w-20">
              <img src={product?.hoverimage} alt={product.name} className="h-14 w-14 object-cover rounded" />
            </div>
            <div className="flex-1 text-xs">{product.name}</div>
            <div className="flex-1 text-xs">{product.category}</div>
            <div className="flex-1">{product.colors}</div>
            <div className="flex-1">{product.gender}</div>
            <div className="w-24 flex justify-center gap-4">
              <button
                onClick={() => setActivePage("addproduct", product)} // Pass selected product
                className="text-blue-500 hover:text-blue-700"
              >
                <FaEdit size={16} />
              </button>
              <button
                onClick={() => deleteProduct(product._id)}
                className="text-red-500 hover:text-red-700">
                <FaTrash size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
