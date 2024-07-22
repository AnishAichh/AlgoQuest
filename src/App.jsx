import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {Compiler} from "./pages";
import {Problem} from "./pages";
import {About} from "./pages";
import {Explore} from './pages';
import {SignIn} from "./pages";
import {Registration} from "./pages";
import { auth } from "./services";

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
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/registerr" element={<Registration />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/problems" element={<Problem />} />
          <Route path="/compiler/problems" element={<Problem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
