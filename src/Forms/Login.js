import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "demo@gmail.com",
    password: "demo123",
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  



  



  const handleChange = e => {
    setData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async() => {
    if (data.email === "") {
      return alert("Email is required");
    }
    if (data.password === "") {
      return alert("Password is required");
    }
      setIsLoading(true);
      try {
        const res = await axios.post(
          "https://tame-tan-cockroach-boot.cyclic.app/user/login",
          data
        );
        console.log(res.data);
        setIsSuccessModalOpen(true);
        setIsLoading(false);
        localStorage.setItem("user",JSON.stringify(res.data.data))
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col bg-white shadow-md px-2 rounded-md w-full border-2 border-b-slate-500 max-w-sm">
          <div className="font-medium self-center text-xl sm:text-2xl uppercase text-blue-800">
            Login To Your Account
          </div>
          <button className="relative mt-6 border rounded-md py-2 text-sm text-green-800 bg-gray-100 hover:bg-gray-200">
            <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
              <i className="fab fa-facebook-f" />
            </span>
            <span>Login with Facebook</span>
          </button>
          <div className="relative mt-10 h-px bg-gray-300">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-400 uppercase">
                Or Login With Email
              </span>
            </div>
          </div>
          <div className="mt-10">
            <div>
              <div className="flex flex-col mb-6">
                <label
                  for="email"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="E-Mail Address"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  for="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center mb-6 -mt-4">
                <div className="flex ml-auto">
                  <a
                    href="/"
                    className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"
                  >
                    Forgot Your Password?
                  </a>
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-green-900 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                  onClick={handleLogin}>
                  {isLoading ? "loading" : "Login"}
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <a
              href="/"
              target="_blank"
              className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
            >
              <span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </span>
              <span className="ml-2">You don't have an account?</span>
            </a>
          </div>
        </div>
      </div>
      {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black max-w-sm">
            <h2 className="text-xl font-semibold mb-4">
              You have logged in Successfully
            </h2>
            <p>user logged successfully!</p>
            <button
              className="mt-6 bg-green-900 text-white rounded py-2 px-4 hover:bg-green-700 focus:outline-none"
              onClick={() => {
                setIsSuccessModalOpen(false);
                Navigate("/");
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
