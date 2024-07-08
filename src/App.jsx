import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Compiler from "./pages/compiler"
import Problem from "./pages/problem"
import Registration from "./pages/registration"
<<<<<<< HEAD
import About from "./pages/about"
=======
import Explore from "./pages/explore"
>>>>>>> 16514da18809205c338df0c79fe5c387f79963af
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/problem" element={<Problem />} />
          <Route path="/compiler/:questionId" Component={Compiler} />
<<<<<<< HEAD
          <Route path="/register" element={<Registration />} />
          <Route path="/about" element={<About />} />
=======
          <Route path="/register" element={<Registration/>} />
          <Route path="/explore" element={<Explore/>} />
>>>>>>> 16514da18809205c338df0c79fe5c387f79963af
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
