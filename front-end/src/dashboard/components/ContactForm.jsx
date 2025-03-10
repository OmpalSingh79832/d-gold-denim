import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnquiries, deleteEnquiry } from "../../redux/slices/enquirySlice";
import { FaTrash } from "react-icons/fa";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { enquiries, loading, error } = useSelector((state) => state.enquiries);

  useEffect(() => {
    dispatch(fetchEnquiries());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      dispatch(deleteEnquiry(id));
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Contact Form Enquiries</h2>

      {loading && <p className="text-yellow-500">Loading enquiries...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-lg text-white">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Product</th>
              <th className="p-3">Country</th>
              <th className="p-3">Message</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry._id} className="border-t border-gray-700 text-center">
                <td className="p-3">{enquiry.firstName}</td>
                <td className="p-3">{enquiry.lastName}</td>
                <td className="p-3">{enquiry.email}</td>
                <td className="p-3">{enquiry.phone}</td>
                <td className="p-3">{enquiry.product}</td>
                <td className="p-3">{enquiry.country}</td>
                <td className="p-3">{enquiry.message}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(enquiry._id)}
                    className="text-red-500 hover:text-red-700 transition duration-200"
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
