import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { changePassword, login } from '../../redux/slices/productReduer';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Retrieve user data from Redux state
    const { loading, error, user: userData } = useSelector((state) => state.product);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Function to handle form submission for login
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(changePassword({ email, oldPassword, newPassword })).then((res) => {
            if (res?.payload?.success) {
                toast.success(res.payload.message);
            } else {
                toast.error(res.payload.message);
            }
        });

    };

    // Handle password visibility toggle
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    // If data is loading, show a loader or a message
    if (loading) {
        return <div>Loading...</div>;
    }



    return (
        <div className="bg-gray-900 min-h-screen sm:p-0 md:p-6 text-white">
            <div className="flex flex-wrap gap-6">
                {/* Left Section - Display Profile */}
                <div className="w-full lg:w-1/2 bg-gray-800 p-6 rounded-md">
                    <div className="space-y-8">
                        <div className="bg-gray-700 p-6 rounded-md text-sm shadow-md">
                            <p className="font-semibold text-xl border-b border-gray-600 pb-4 mb-4">
                                Email: <span className="text-base font-light text-gray-300">{userData?.email || "Not Available"}</span>
                            </p>
                            <p className="font-semibold text-xl border-b border-gray-600 pb-2">
                                Password: <span className="text-base font-light text-gray-300">{userData?.password || "Hidden for Security"}</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Change Password */}
                <div className="w-full lg:w-[45%] h-fit bg-gray-800 p-6 rounded-md">
                    <h2 className="text-xl font-semibold mb-5">Change Password</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Email"
                                value={email || userData?.email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">Old Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Enter old password"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">New Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Profile;
