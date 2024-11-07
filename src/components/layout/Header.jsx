import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ChevronLeft } from 'lucide-react'
import Logo from '../../assets/images/SVG/InfoServices-Logo.svg'

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

  const whatWeDoContent = {
    Capabilities: [
      { name: 'Generative AI', description: 'Explore endless creativity with Generative AI: where innovation meets imagination.' },
      { name: 'Cognitive AI', description: 'Think like a human, analyze like a machine: Get cognitive insights that matter' },
      { name: 'Business Intelligence', description: 'Data insights, real-world results - Business intelligence drives your transformation' },
      { name: 'XOps', description: "Don't let your development process hold you back - Let us help you embrace Xops" },
      { name: 'Cloud Native', description: 'Always evolving, never standing still: Cloud-powered innovation' },
      // info: Link property added to be used for naviagtion
      { name: 'Data Analytics & Engineering', description: 'Our data engineering and analytics services pave the way for actionable insights and strategic decision-making.', link: '/dataEngineering' },
      { name: 'Salesforce', description: "Don't just manage your business, transform it with Salesforce" },
      { name: 'Quality Engineering', description: 'From startups to global brands - we elevate quality for businesses of all sizes' },
      { name: 'Mobility Services', description: 'App development made easy. We handle the tech, you focus on your vision' },
      { name: 'Technical Writing', description: 'Unlock user understanding with expert documentation.' },
      { name: 'SAP', description: 'Experience a seamless transition to SAP® S/4HANA with our expertly managed services!' },
    ],
    Products: [
      { name: 'XOps', description: "Don't let your development process hold you back - Let us help you embrace Xops" },
      { name: 'Cloud Native', description: 'Always evolving, never standing still: Cloud-powered innovation' },
      { name: 'Data Analytics & Engineering', description: 'Our data engineering and analytics services pave the way for actionable insights and strategic decision-making.' },
    ],
    Technologies: [
      { name: 'Salesforce', description: "Don't just manage your business, transform it with Salesforce" },
      { name: 'Quality Engineering', description: 'From startups to global brands - we elevate quality for businesses of all sizes' },
      { name: 'Mobility Services', description: 'App development made easy. We handle the tech, you focus on your vision' },
    ],
    Industries: [
      { name: 'Technical Writing', description: 'Unlock user understanding with expert documentation.' },
      { name: 'SAP', description: 'Experience a seamless transition to SAP® S/4HANA with our expertly managed services!' },
    ],
  }

  const mobileMenuItems = {
    main: [
      { title: 'Who We Are', link: '/about-us' },
      { title: 'What We Do', submenu: 'whatWeDo' },
      { title: 'Insights', submenu: 'insights' },
      { title: 'Contact', link: '/contact' },
    ],
    whatWeDo: Object.keys(whatWeDoContent).map(category => ({ title: category, submenu: category })),
    insights: [
      { title: 'Blogs', description: 'Explore our blogs for a diverse selection of informative articles and engaging content.' },
      { title: 'Whitepapers', description: 'Browse our whitepapers library for in-depth insights and expert analysis on key industry topics.' },
      { title: 'Case Studies', description: 'Discover our case studies collection to explore real-world examples and success stories in action.' },
    ],
  }

  const renderMobileMenuItem = (item) => (
    <button
      key={item.title}
      className="w-full text-left py-4 px-6 text-xl font-light text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 flex items-center justify-between"
      onClick={() => item.submenu ? setMobileActiveMenu(item.submenu) : null}
    >
      {item.title}
      {item.submenu && <ChevronLeft className="transform rotate-180" size={20} />}
    </button>
  )

  return (
    <motion.header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isAtTop ? 'bg-transparent' : 'bg-black bg-opacity-90'
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
            className={`text-lg font-light ${location.pathname === '/about-us'
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#5A7FCC] via-[#B93AD8] to-[#8F6EDB]'
                : 'text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#5A7FCC] hover:via-[#B93AD8] hover:to-[#8F6EDB]'
              }`}
          >
            Who We Are
          </Link>
          <button
            onMouseEnter={() => toggleDropdown('what-we-do')}
            onClick={() => toggleDropdown('what-we-do')}
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
            className={`text-lg font-light ${location.pathname === '/contact'
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#405E9E] via-[#8F23AE] to-[#684EB2]'
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
      {activeDropdown === 'what-we-do' && (
        <div className="fixed inset-0 top-[72px] bg-gradient-to-r from-[#684FB2] via-[#9023AE] to-[#405F9E] overflow-auto hidden md:block">
          <div className="container mx-auto px-4 py-8 flex">
            <div className="w-1/4 pr-4">
              {Object.keys(whatWeDoContent).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`block w-full text-left py-4 px-6 text-3xl font-light text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 ${activeCategory === category
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
                {whatWeDoContent[activeCategory].map((item) => (
                  // info: from item object link string to navigate; if link there it navigate otherwise it will not. 
                  <Link to={item.link ? item.link : ''}>
                    <div key={item.name} className="p-4 rounded">
                      <h4 className="text-2xl font-semibold text-white mb-2">{item.name}</h4>
                      <p className="text-lg text-gray-200">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {activeDropdown === 'insights' && (
        <div className="fixed inset-0 top-[72px] bg-gradient-to-r from-[#684FB2] via-[#9023AE] to-[#405F9E] overflow-auto hidden md:block">
          <div className="container mx-auto px-4 py-8 grid grid-cols-3 gap-8">
            <div className="p-4 rounded">
              <h4 className="text-2xl font-semibold text-white mb-2">Blogs</h4>
              <p className="text-lg text-gray-200">Explore our blogs for a diverse selection of informative articles and engaging content.</p>
            </div>
            <div className="p-4 rounded">
              <h4 className="text-2xl font-semibold text-white mb-2">Whitepapers</h4>
              <p className="text-lg text-gray-200">Browse our whitepapers library for in-depth insights and expert analysis on key industry topics.</p>
            </div>
            <div className="p-4 rounded">
              <h4 className="text-2xl font-semibold text-white mb-2">Case Studies</h4>
              <p className="text-lg text-gray-200">Discover our case studies collection to explore real-world examples and success stories in action.</p>
            </div>
          </div>
        </div>
      )}
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
            {mobileActiveMenu === 'main' && mobileMenuItems.main.map(renderMobileMenuItem)}
            {mobileActiveMenu === 'whatWeDo' && mobileMenuItems.whatWeDo.map(renderMobileMenuItem)}
            {mobileActiveMenu === 'insights' && mobileMenuItems.insights.map(item => (
              <div key={item.title} className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-base text-gray-200">{item.description}</p>
              </div>
            ))}
            {Object.keys(whatWeDoContent).includes(mobileActiveMenu) && (
              <div>
                {whatWeDoContent[mobileActiveMenu].map(item => (
                  <div key={item.name} className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-2">{item.name}</h4>
                    <p className="text-base text-gray-200">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.header>
  )
}