import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { login } from '../redux/slices/productReduer';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    // State to store email and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Select loading, error, and login state from Redux store
    const { loading, error, login: userData } = useSelector((state) => state.product);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Dispatch the login action with form data
        dispatch(login({ email, password }));
    };

    // Side effect for handling error toast
    React.useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (userData) {
            toast.success("Login successful!");
            navigate("/dashboard");
        }
    }, [error, userData]);

    return (
        <div className="py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div
                    className="hidden lg:block lg:w-1/2 bg-cover"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")',
                    }}
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <a
                        href="#"
                        className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
                    >
                        <div className="px-4 py-3">
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                            Sign in with Google
                        </h1>
                    </a>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4" />
                        <a href="#" className="text-xs text-center text-gray-500 uppercase">
                            or login with email
                        </a>
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
                                onChange={(e) => setEmail(e.target.value)} // Update email state
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>

                            </div>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update password state
                            />
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                                disabled={loading} // Disable button while loading
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </div>
                    </form>

                </div>
            </div>

            {/* Toast Notification Container */}
            <ToastContainer />
        </div>
    );
};

export default Login;
