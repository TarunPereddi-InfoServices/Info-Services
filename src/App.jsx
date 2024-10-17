import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Contact from './pages/ContactUs/Contact'
import DataEngineering from './pages/DataEngineeringPage/DataEngineering'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dataEngineering" element={<DataEngineering />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          {/* Routes */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App