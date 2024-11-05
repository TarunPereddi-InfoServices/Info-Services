import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/UI_layout/Layout'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Contact from './pages/ContactUs/Contact'
import CapabilityPage from './pages/Layouts/CapabilityPage'
import TechnologyPage from './pages/Layouts/TechnologyPage'
import IndustryPages from './pages/Layouts/IndustryPages'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/capability/:capability" element={<CapabilityPage />} />
          <Route path="/technology/:technology" element={<TechnologyPage />} />
          <Route path="/industry/:industry" element={<IndustryPages />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App