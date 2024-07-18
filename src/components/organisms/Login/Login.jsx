import {signInWithEmailAndPassword} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/About";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen " style={{background:"#1a1a2e" }}>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full transition-transform duration-300 hover:translate-y-[-5px]"
      >
        <h3 className="text-center mb-5 text-gray-800 text-2xl font-bold">Login</h3>

        <div className="mb-4">
          <label className="block font-bold mb-2 text-gray-600">Email address</label>
          <input
            type="email"
            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2 text-gray-600">Password</label>
          <input
            type="password"
            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transform hover:translate-y-[-3px] transition-all duration-300"
          >
            Submit
          </button>
        </div>
        <p className="text-center mt-4 text-blue-500">
          New user <a href="/registerr" className="underline hover:text-blue-700">Register Here</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
