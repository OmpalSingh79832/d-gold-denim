import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { addProduct, getProducts } from '../../redux/slices/productReduer';

export default function UploadProduct({ selectedProduct }) {

  const [formData, setFormData] = useState({
    category: "",
    name: "",
    moq: "",
    fabricType: "",
    material: "",
    application: "",
    colors: "",
    avcolor:"",
    gender: "",
    season: "",
    feature: "",
    pattern: "",
    occasion: "",
    uploadCategory: "",
    images: [],
    hoverimage: null,
    size: [],
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) {
      toast.error("Please select at least one image.");
      return;
    }

    const uploadedImages = await Promise.all(files.map(file => uploadImage(file)));
    setFormData((prev) => ({ ...prev, images: uploadedImages.filter(url => url) })); // Filter out null values
  };

  const handleHoverImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      toast.error("Please select an image.");
      return;
    }

    const uploadedImage = await uploadImage(file);
    setFormData((prev) => ({ ...prev, hoverimage: uploadedImage }));
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=5ef0a43860ad0dd2d1373e957d0e1311`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data && data.data && data.data.url) {
        return data.data.url; // Return the URL of the uploaded image
      } else {
        console.error("Invalid ImgBB response:", data);
        toast.error("Failed to upload image to ImgBB.");
        return null;
      }
    } catch (error) {
      console.error("Error uploading image to ImgBB:", error);
      toast.error("Failed to upload image to ImgBB.");
      return null;
    }
  };

  const handleSizeChange = (size) => {
    setFormData((prev) => ({
      ...prev,
      size: prev.size.includes(size)
        ? prev.size.filter((s) => s !== size)
        : [...prev.size, size]
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData));



    toast.success("Product added successfully!", {
      position: "top-right",
      autoClose: 3000, // Closes in 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
    dispatch(getProducts())
  };

  useEffect(() => {
    if (selectedProduct) {
      setFormData(selectedProduct);
    }
  }, [selectedProduct]);
  return (

    <>
      <ToastContainer />
      {/* Show Existing Product Images */}
{formData.images.length > 0 && (
  <div className="col-span-2">
    <h3 className="text-base font-medium text-gray-700 mb-2">Current Images:</h3>
    <div className="flex gap-2">
      {formData.images.map((img, index) => (
        <img key={index} src={img} alt={`Product ${index}`} className="w-20 h-20 rounded-md object-cover" />
      ))}
    </div>
  </div>
)}

{/* Show Hover Image */}
{formData.hoverimage && (
  <div className="col-span-2">
    <h3 className="text-base font-medium text-gray-700 mb-2">Current Hover Image:</h3>
    <img src={formData.hoverimage} alt="Hover" className="w-20 h-20 rounded-md object-cover" />
  </div>
)}

      <div className="max-w-full mx-auto p-8 rounded-2xl shadow-2xl bg-white">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">  {selectedProduct ? "Edit Product Details" : "Add Product Details"}</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          {/* Category */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">Select Category</label>
            <select name="category" value={formData.category} onChange={handleChange} required className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300">
              <option value="">Select Category</option>
              <option value="Funky Jeans">Funky Jeans</option>
              <option value="Plain Jeans">Plain Jeans</option>
              <option value="Funky Heavy Damaging Jeans">Funky Heavy Damaging Jeans</option>
              <option value="Basic Scratch Laser Damage Jeans">Basic Scratch Laser Damage Jeans</option>
              <option value="Heavy Scratch Laser Damage Jeans">Heavy Scratch Laser Damage Jeans</option>

            </select>
          </div>

          {/* Product Name */}
          <div className="flex flex-col">
            <label className="text-base font-medium text-gray-700">Product Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Product Name" required className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300" />
          </div>

          {/* Additional Dropdowns */}
          {[
            { name: "moq", label: "Minimum Quantity Order", options: ["50", "100", "150", "200", "250", "300"] },
            { name: "fabricType", label: "Fabric Type", options: ["Men Casual Jeans", "Normal Damaged Casual Jeans", "Normal Basic Casual Jeans", "Heavy Damaged Casual Jeans", "Normal Scratch Casual Jeans"] },
            { name: "material", label: "Material", options: ["Slub Three by One Flat Finish Denim","Imported Cotton Fabric, Power Lycra", "Metty Fabric Power Lycra", "Cotton by Cotton Power Lycra", "Cotton by Cotton Marcarise Fabric Power Lycra", "Stretchable Denim", "Cotton by Cotton, Z Black Fabric"] },
            { name: "application", label: "Application", options: ["Running, Gym, Fashion, Multi-Use", "Casual, Party, Multi Use", "Casual, Sports, Multi Use", "Casual, Clubwear, Multi Use"] },
            { name: "gender", label: "Gender", options: ["Male", "Female"] },
            { name: "season", label: "Season", options: ["Summer, Autumn, Spring, Winter, All Seasons", "Summer, Autumn, Spring", "Winter, Autumn, Spring", "Summer, Autumn, Spring"] },
            { name: "colors", label: "Colors", options: ["Blue", "Black", "Gray", "White"] },
            { name: "feature", label: "Feature", options: ["Comfortable, Stretchable, Easy Washable", "Trendy, Comfortable, Stylish", "Multiple Pockets, Durable, Comfortable", "Soft, Easily Washable, Breathable"] },
            { name: "uploadCategory", label: "Category to Upload", options: ["Recently Product", "Popular Product", "Top Products"] },
          ].map(({ name, label, options }) => (
            <div key={name} className="flex flex-col">
              <label className="text-base font-medium text-gray-700">{label}</label>
              <select name={name} value={formData[name]} onChange={handleChange} required className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300">
                <option value="">Select {label}</option>
                {options.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}

          {/* Text Inputs */}
          {["avcolor", "pattern", "occasion"].map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-base font-medium text-gray-700 capitalize">{field}</label>
              <input type="text" name={field} value={formData[field]} onChange={handleChange} placeholder={`Enter ${field}`} required className=" placeholder:capitalize p-3 border rounded-lg focus:ring-2 focus:ring-blue-300" />
            </div>
          ))}
          {/*  */}

          <div className="col-span-2">
            <label className="text-base font-medium text-gray-700 block mb-2">Size</label>
            <div className="flex gap-4 flex-wrap">
              {['28', '30', '32', '34', '36', '38'].map((size) => (
                <label key={size} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.size.includes(size)}
                    onChange={() => handleSizeChange(size)}
                    className="w-4 h-4"
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>

          {/* Upload Additional Images */}
          <label className="col-span-2 font-semibold">Upload Additional Images:
            <input type="file" multiple accept="image/*" onChange={handleImageChange}  required={selectedProduct ? false : true} disabled={selectedProduct ? true : false} className="mt-2 p-3 border rounded-xl w-full" />
          </label>

          {/* Upload Hover Image */}
          <label className="col-span-2 font-semibold">Upload Hover Image:
            <input type="file" accept="image/*" onChange={handleHoverImageChange}  required={selectedProduct ? false : true} disabled={selectedProduct ? true : false} className="mt-2 p-3 border rounded-xl w-full" />
          </label>

          {/* Submit Button */}
          <button type="submit" className="col-span-2 py-3 mt-4 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all">
          {selectedProduct ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>
    </>
  );
}