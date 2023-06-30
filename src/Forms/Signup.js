import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
    mobile: "",
  });
  const Navigate = useNavigate();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignUp = async () => {
    if (data.email === "") {
      return alert("Email is required");
    }
    if (data.password === "") {
      return alert("Password is required");
    }
    if (data.name === "") {
      return alert("Name is required");
    }
    if (data.phone === "") {
      return alert("phone is required");
    }
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://tame-tan-cockroach-boot.cyclic.app/user/signup",
        data
      );
      console.log(res.data);
      setIsSuccessModalOpen(true);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full border-2 border-b-slate-500">
            <h1 className="mb-8 text-3xl text-center text-blue-950">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="name"
              value={data.name}
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              value={data.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="mobile"
              value={data.mobile}
              placeholder="Mobile_Number"
              onChange={handleChange}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              value={data.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-900 text-white hover:bg-indigo-500 focus:outline-none my-1  disabled"
              onClick={handleSignUp}
            >
              {isLoading ? "loading" : "Create Account"}
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className=" border-gray-800 text-gray-950 border-b no-underline"
                href="/"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className=" border-gray-800 text-gray-950 border-b no-underline"
                href="/"
              >
                Privacy Policy.
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className=" no-underline border-b border-blue-500 text-blue-600"
              href="/login"
            >
              Log in
            </a>.
          </div>
        </div>
      </div>

      {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black max-w-sm">
            <h2 className="text-xl font-semibold mb-4">
              Account Created Successfully
            </h2>
            <p>Your account has been created successfully!</p>
            <button
              className="mt-6 bg-green-900 text-white rounded py-2 px-4 hover:bg-green-700 focus:outline-none"
              onClick={() => {
                setIsSuccessModalOpen(false);
                Navigate("/login");
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

export default Signup;
