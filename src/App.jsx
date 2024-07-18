import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Compiler from "./pages/compiler";
import Problem from "./pages/problem";
import About from "./pages/about";
import Explore from './pages/explore';
import SignIn from "./components/shared/Login/SignIn";
import Register from "./components/shared/register/register"
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const PrivateRoute = ({ element, ...rest }) => {
    return user ? element : <Navigate to="/login" />;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Aboutproblems" element={<Problem />} />
          <Route path="/compiler/:questionId" element={<Compiler />} />
          <Route path="/About" element={<About />} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/registerr" element={<Register/>} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/problems" element={<Problem />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
