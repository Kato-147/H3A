import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './page/Home'

const routes = (
  <Router>
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />

      <Route exact path="/home" element={<Home />} />
    </Routes>
  </Router>
)


function App() {
  
  return (
    <div>
    {routes}
    </div>
  )
}

export default App
