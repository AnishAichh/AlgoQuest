import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Compiler from "./pages/compiler"
import Problem from "./pages/problem"
import Registration from "./pages/registration"
import Explore from "./pages/explore"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/problem" element={<Problem />} />
          <Route path="/compiler/:questionId" Component={Compiler} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/explore" element={<Explore/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
