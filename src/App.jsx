import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Compiler from "./pages/compiler"
import Problem from "./pages/problem"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/problem" element={<Problem />} />
          <Route path="/compiler/:questionId" Component={Compiler} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
