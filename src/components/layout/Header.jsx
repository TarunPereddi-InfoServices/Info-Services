import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ChevronLeft } from 'lucide-react'
import Logo from '../../assets/images/SVG/InfoServices-Logo.svg'
import dropdownConfig from './dropdownConfig.json'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { scrollY } = useScroll()
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeCategory, setActiveCategory] = useState('Capabilities')
  const [isHovering, setIsHovering] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileActiveMenu, setMobileActiveMenu] = useState('main')
  const headerRef = useRef(null)
  const location = useLocation()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest
    setIsAtTop(currentScrollY <= 0)
    if (currentScrollY > lastScrollY) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
    setLastScrollY(currentScrollY)
  })

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown && !isHovering) {
      resetDropdown()
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const resetDropdown = () => {
    setActiveDropdown(null)
    setActiveCategory('Capabilities')
    setIsHovering(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        resetDropdown()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    resetDropdown()
    setIsMobileMenuOpen(false)
    setMobileActiveMenu('main')
  }, [location])

  const renderDropdownContent = () => {
    if (activeDropdown === 'whatWeDo') {
      const categories = dropdownConfig.whatWeDo.categories
      return (
        <div className="fixed inset-0 top-[72px] bg-gradient-to-r from-[#684FB2] via-[#9023AE] to-[#405F9E] overflow-auto hidden md:block">
          <div className="container mx-auto px-4 py-8 flex">
            <div className="w-1/4 pr-4">
              {Object.keys(categories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`block w-full text-left py-4 px-6 text-3xl font-light text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 ${
                    activeCategory === category
                      ? 'font-semibold relative pl-8 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-0.5 before:bg-white'
                      : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="w-3/4 pl-4">
              <div className="grid grid-cols-3 gap-8">
                {categories[activeCategory].map((item) => (
                  <Link key={item.name} to={item.path}>
                    <div className="p-4 rounded">
                      <h4 className="text-2xl font-semibold text-white mb-2">{item.name}</h4>
                      <p className="text-lg text-gray-200">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (activeDropdown === 'insights') {
      return (
        <div className="fixed inset-0 top-[72px] bg-gradient-to-r from-[#684FB2] via-[#9023AE] to-[#405F9E] overflow-auto hidden md:block">
          <div className="container mx-auto px-4 py-8 grid grid-cols-3 gap-8">
            {dropdownConfig.insights.content.map((item) => (
              <div key={item.title} className="p-4 rounded">
                <h4 className="text-2xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-lg text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  }

  const renderMobileDropdownContent = () => {
    if (mobileActiveMenu === 'whatWeDo') {
      return Object.keys(dropdownConfig.whatWeDo.categories).map(category => (
        <button
          key={category}
          className="w-full text-left py-4 px-6 text-xl font-light text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 flex items-center justify-between"
          onClick={() => setMobileActiveMenu(category)}
        >
          {category}
          <ChevronLeft className="transform rotate-180" size={20} />
        </button>
      ))
    }

    if (mobileActiveMenu === 'insights') {
      return dropdownConfig.insights.content.map(item => (
        <div key={item.title} className="mb-6">
          <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
          <p className="text-base text-gray-200">{item.description}</p>
        </div>
      ))
    }

    if (dropdownConfig.whatWeDo.categories[mobileActiveMenu]) {
      return dropdownConfig.whatWeDo.categories[mobileActiveMenu].map(item => (
        <Link key={item.name} to={item.path}>
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-white mb-2">{item.name}</h4>
            <p className="text-base text-gray-200">{item.description}</p>
          </div>
        </Link>
      ))
    }

    return null
  }

  return (
    <motion.header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isAtTop ? 'bg-transparent' : 'bg-black bg-opacity-90'
      }`}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
      onMouseLeave={resetDropdown}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="INFO SERVICES" className="h-10" />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/about-us"
            className={`text-lg font-light ${
              location.pathname === '/about-us'
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#5A7FCC] via-[#B93AD8] to-[#8F6EDB]'
                : 'text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#5A7FCC] hover:via-[#B93AD8] hover:to-[#8F6EDB]'
            }`}
          >
            Who We Are
          </Link>
          <button
            onMouseEnter={() => toggleDropdown('whatWeDo')}
            onClick={() => toggleDropdown('whatWeDo')}
            className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#5A7FCC] hover:via-[#B93AD8] hover:to-[#8F6EDB] text-lg font-light"
          >
            What We Do
          </button>
          <button
            onMouseEnter={() => toggleDropdown('insights')}
            onClick={() => toggleDropdown('insights')}
            className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#5A7FCC] hover:via-[#B93AD8] hover:to-[#8F6EDB] text-lg font-light"
          >
            Insights
          </button>
          <Link
            to="/contact"
            className={`text-lg font-light ${
              location.pathname === '/contact'
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#5A7FCC] via-[#B93AD8] to-[#8F6EDB]'
                : 'text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#5A7FCC] hover:via-[#B93AD8] hover:to-[#8F6EDB]'
            }`}
          >
            Contact
          </Link>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {activeDropdown && renderDropdownContent()}

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-gradient-to-r from-[#684FB2] via-[#9023AE] to-[#405F9E] overflow-auto md:hidden">
          <div className="container mx-auto px-4 py-6">
            {mobileActiveMenu !== 'main' && (
              <button
                className="mb-4 text-white flex items-center"
                onClick={() => setMobileActiveMenu('main')}
              >
                <ChevronLeft size={24} />
                <span className="ml-2">Back</span>
              </button>
            )}
            {mobileActiveMenu === 'main' ? (
              <>
                <Link to="/about-us">
                  <div className="w-full text-left py-4 px-6 text-xl font-light text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                    Who We Are
                  </div>
                </Link>
                <button
                  className="w-full text-left py-4 px-6 text-xl font-light text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 flex items-center justify-between"
                  onClick={() => setMobileActiveMenu('whatWeDo')}
                >
                  What We Do
                  <ChevronLeft className="transform rotate-180" size={20} />
                </button>
                <button
                  className="w-full text-left py-4 px-6 text-xl font-light text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 flex items-center justify-between"
                  onClick={() => setMobileActiveMenu('insights')}
                >
                  Insights
                  <ChevronLeft className="transform rotate-180" size={20} />
                </button>
                <Link to="/contact">
                  <div className="w-full text-left py-4 px-6 text-xl font-light text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                    Contact
                  </div>
                </Link>
              </>
            ) : (
              renderMobileDropdownContent()
            )}
          </div>
        </div>
      )}
    </motion.header>
  )
}