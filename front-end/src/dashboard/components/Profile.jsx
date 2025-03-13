import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { changePassword } from "../../redux/slices/productReduer";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Profile = () => {
    const dispatch = useDispatch();

    // Retrieve user data from Redux state
    const { loading, user: userData } = useSelector((state) => state.product);

    // Change Password State
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Registration State
    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    // Handle Change Password
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

    // Handle Register
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8500/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: registerName,
                    email: registerEmail,
                    password: registerPassword,
                }),
            });

            const data = await response.json();
            if (data.success) {
                toast.success(data.message);
                setRegisterName("");
                setRegisterEmail("");
                setRegisterPassword("");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error("Error registering user:", error);
            toast.error("Failed to register user.");
        }
    };

    // Toggle Password Visibility
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <div className="bg-gray-900 min-h-screen sm:p-0 md:p-6 text-white">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {/* Register Section */}
            <div className=" bg-gray-800 p-6 rounded-md">
                <h2 className="text-xl font-semibold mb-5">Register New User</h2>
                <form className="space-y-4" onSubmit={handleRegister}>
                    <div>
                        <label className="block font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter name"
                            value={registerName}
                            onChange={(e) => setRegisterName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter email"
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter password"
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                        Register
                    </button>
                </form>
            </div>

             {/* Right Section - Change Password */}
             <div className="bg-gray-800 p-6 rounded-md">
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
                                <button type="button" onClick={togglePasswordVisibility} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
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
                                <button type="button" onClick={togglePasswordVisibility} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
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
