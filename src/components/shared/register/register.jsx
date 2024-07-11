import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: ""
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
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
    <div className="flex justify-center items-center min-h-screen" style={{background:"#1a1a2e"}}>
      <form
        onSubmit={handleRegister}
        className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full transition-transform duration-300 hover:translate-y-[-5px]"
      >
        <h3 className="text-center mb-5 text-gray-800 text-2xl font-bold">Sign Up</h3>

        <div className="mb-4">
          <label className="block font-bold mb-2 text-gray-600">First name</label>
          <input
            type="text"
            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="First name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2 text-gray-600">Last name</label>
          <input
            type="text"
            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2 text-gray-600">Email address</label>
          <input
            type="email"
            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2 text-gray-600">Password</label>
          <input
            type="password"
            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transform hover:translate-y-[-3px] transition-all duration-300"
          >
            Sign Up
          </button>
        </div>
        <p className="text-center mt-4 text-blue-500">
          Already registered <a href="/login" className="underline hover:text-blue-700">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
