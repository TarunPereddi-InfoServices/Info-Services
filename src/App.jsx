import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Contact from './pages/ContactUs/Contact'
import DataAnalytics from './pages/DataEngineeringPage/DataAnalytics';
import GenerativeAI from './pages/GenerativeAI/GenerativeAI';
import CognitiveAI from './pages/CognitiveAI/CognitiveAI';
import BussinessIntelligance from './pages/BussinessIntelligance/BussinessIntelligance';
import XOps from './pages/XOps/XOps';
import CloudNative from './pages/CloudNative/CloudNative';
import Salesforce from './pages/Salesforce/Salesforce';
import QualityEngineering from './pages/QualityEngineering/QualityEngineering';
import MobilityServices from './pages/MobilityServices/MobilityServices';
import TechnicalWriting from './pages/TechnicalWriting/TechnicalWriting';
import SAP from './pages/SAP/SAP';



import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sAP" element={<SAP />} />
          <Route path="/technicalWriting" element={<TechnicalWriting />} />
          <Route path="/mobilityServices" element={<MobilityServices />} />
          <Route path="/qualityEngineering" element={<QualityEngineering />} />
          <Route path="/salesforce" element={<Salesforce />} />
          <Route path="/cloudNative" element={<CloudNative />} />
          <Route path="/xOps" element={<XOps />} />
          <Route path="/bussinessIntelligance" element={<BussinessIntelligance />} />
          <Route path="/cognitiveAI" element={<CognitiveAI />} />
          <Route path="/generativeAI" element={<GenerativeAI />} />
          <Route path="/dataEngineering" element={<DataAnalytics />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          {/* Routes */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App