import React, { useEffect, useState } from 'react';
import { FaTrash } from "react-icons/fa";

const ProductEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await fetch("http://localhost:8500/api/productenquiries");
        const data = await response.json();
        setEnquiries(data);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      }
    };

    fetchEnquiries(); // Initial fetch

    const interval = setInterval(fetchEnquiries, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);


  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      try {
        const response = await fetch(`http://localhost:8500/api/productenquiries/${id}`, {
          method: "DELETE",
        });
  
        if (response.ok) {
          // Remove the deleted enquiry from the state
          setEnquiries(enquiries.filter((enquiry) => enquiry._id !== id));
          alert("Enquiry deleted successfully");
        } else {
          alert("Failed to delete enquiry");
        }
      } catch (error) {
        console.error("Error deleting enquiry:", error);
        alert("Error deleting enquiry.");
      }
    }
  };
  

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:8500/api/productenquiries/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setEnquiries((prevEnquiries) =>
          prevEnquiries.map((enquiry) =>
            enquiry._id === id ? { ...enquiry, status: newStatus } : enquiry
          )
        );
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Error updating status");
    }
  };


  return (
    <div>
      <h2 className="text-2xl mb-4 text-white">Product Enquiries</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-lg text-white">
          <thead className='bg-gray-800'>
            <tr>
              <th className=" p-2">Product Image</th>
              <th className=" p-2">Product Name</th>
              <th className=" p-2">Quantity</th>
              <th className=" p-2">Country</th>
              <th className=" p-2">Email</th>
              <th className=" p-2">Message</th>
              <th className=" p-2">Action</th>


            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry._id} className='border-t border-gray-700'>
                <td className=" p-2">
                  <img src={enquiry.images} alt={enquiry.images} className="w-16 h-12 object-contain" />
                </td>
                <td className=" p-2">{enquiry.name}</td>
                <td className=" p-2">{enquiry.quantity}</td>
                <td className=" p-2">{enquiry.country}</td>
                <td className=" p-2">{enquiry.email}</td>
                <td className=" p-2">{enquiry.message}</td>
                <td className=" p-2">
                  <button
                    onClick={() => handleDelete(enquiry._id)}
                    className="text-red-500 hover:text-red-700 transition duration-200 mr-4"
                  >
                    <FaTrash size={18} />
                  </button>
                  <select
                    value={enquiry.status || "Pending"}
                    onChange={(e) => handleStatusChange(enquiry._id, e.target.value)}
                    className="bg-gray-700 text-white p-1 rounded"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Fulfilled">Fulfilled</option>
                  </select>
                </td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductEnquiry;
