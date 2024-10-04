import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/SVG/InfoServices-Logo.svg'
import LinkedIn from '../../assets/images/SVG/Social-Icons/linkedin.svg'
import Youtube from '../../assets/images/SVG/Social-Icons/youtube.svg'
import Twitter from '../../assets/images/SVG/Social-Icons/twitter.svg'
import Instagram from '../../assets/images/SVG/Social-Icons/instagram.svg'

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-t-[40px]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-10">
          <img src={Logo} alt="INFO SERVICES Logo" className="h-16 mb-8" />
          <div className="flex space-x-8">
            {['linkedin', 'youtube', 'twitter', 'instagram'].map((social) => (
              <a key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer" aria-label={`${social} link`}>
                <img src={social === 'linkedin' ? LinkedIn : social === 'youtube' ? Youtube : social === 'twitter' ? Twitter : Instagram} alt={`${social} icon`} className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#121212] py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">&copy; 2024 Copyright by Infoservices. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            <Link to="/privacy-policy" className="hover:underline mb-2 md:mb-0">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:underline mb-2 md:mb-0">Terms of Use</Link>
            <Link to="/careers" className="hover:underline mb-2 md:mb-0">Careers</Link>
            <Link to="/legal" className="hover:underline">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer