import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { login } from '../redux/slices/productReduer';
import { useNavigate } from 'react-router-dom';
import LoginImg from "../assets/images/loginimg.jpg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { loading, error, login: userData } = useSelector((state) => state.product);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(login({ email, password })).unwrap();
            
            setTimeout(() => {
                toast.success("Login successful!");
            }, 500);
            
            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);

        } catch (err) {
            toast.error(err.message || "Login failed.");
        }
    };

    return (
        <div className="py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div
                    className="hidden lg:block lg:w-1/2 bg-cover"
                    style={{
                        backgroundImage: `url(${LoginImg})`,
                    }}
                    role="img"
                    aria-label="Login background image"
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">D-Gold Denim Jeans</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <p className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                            Only For Admin Login Credentially
                        </h1>
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4" />
                        <p className="text-xs text-center text-gray-500 uppercase">
                             login with email & password
                        </p>
                        <span className="border-b w-1/5 lg:w-1/4" />
                    </div>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mt-4 relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 mt-6 right-3 flex items-center text-gray-600"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                            </button>
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-900"
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
