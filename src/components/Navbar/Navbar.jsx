import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Home, Calendar, Menu, User, Mail, X, Facebook, Instagram, Phone } from 'lucide-react'
import logo from '../../assets/logo.svg'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle menu state
  const toggleMenu = () => {
    if (isMenuOpen) {
      // Start closing animation
      setIsClosing(true)
      
      // Wait for animation to complete before actually closing
      setTimeout(() => {
        setIsMenuOpen(false)
        setIsClosing(false)
        document.body.style.overflow = "auto"
      }, 1000) // Match the animation duration
    } else {
      // Open menu
      setIsMenuOpen(true)
      document.body.style.overflow = "hidden"
    }
  }

  // Menu links
  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Despre noi", path: "/despre-noi" },
    { name: "Playground", path: "/playground" },
    { name: "Guided Learning", path: "/guided-learning" },
    { name: "Donează", path: "/donează" },
    { name: "Account", path: "/account" },
  ]

  return (
    <>
      {/* Mobile Navigation (Bottom) - No circle animation */}
      <nav
        className={`fixed rounded-t-3xl bottom-0 left-0 right-0 z-40 md:hidden bg-customBlack text-customWhite transition-all duration-300 ${isMenuOpen ? "h-[100dvh]" : "h-20"}`}
      >
        {/* Mobile Nav Icons - Always visible */}
        <div className="flex justify-around items-center h-20 px-4 relative z-50">
          <Link to="/" onClick={() => { if (isMenuOpen) { toggleMenu() } }} className="flex flex-col items-center">
            <Home className="w-10 h-10" />
          </Link>
          <Link to="/upcoming-events" onClick={() => { if (isMenuOpen) { toggleMenu() } }} className="flex flex-col items-center">
            <Calendar className="w-10 h-10" />
          </Link>
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="w-14 h-14 rounded-full bg-customOrange flex items-center justify-center">
              {isMenuOpen ? <X className="w-8 h-8 text-customBlack" /> : <Menu className="w-8 h-8 text-customBlack" />}
            </div>
          </button>
          <Link to="/account" onClick={() => { if (isMenuOpen) { toggleMenu() } }} className="flex flex-col items-center">
            <User className="w-10 h-10" />
          </Link>
          <Link to="/newsletter" onClick={() => { if (isMenuOpen) { toggleMenu() } }} className="flex flex-col items-center">
            <Mail className="w-10 h-10" />
          </Link>
        </div>

        {/* Expanded Mobile Menu - Simple fade in/out, no circle animation */}
        {isMenuOpen && (
          <div className="absolute inset-0 overflow-hidden bg-customBlack">
            {/* Menu content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-[105vh] p-6 transition-opacity duration-500">
              <div className="w-full max-w-md">
                {menuLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-3xl font-bangers text-customWhite py-5 text-center hover:text-customOrange transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Navigation (Top) */}
      <div className="hidden md:block">
        {/* Fixed Navigation Bar */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-customBlack shadow-md py-2" : "bg-customBlack bg-opacity-90 py-4"}`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <div className="flex-1">
              <Link to="/" onClick={() => { if (isMenuOpen) { toggleMenu() } }} className="flex items-center">
                <img src={logo || "/placeholder.svg"} alt="logo" width={150} height={150} />
              </Link>
            </div>

            {/* Center Navigation */}
            <div className="flex-1 flex items-center justify-center space-x-10">
              <Link to="/" onClick={() => { if (isMenuOpen) { toggleMenu() } }} className="text-customWhite hover:text-customOrange transition-colors">
                <Home className="w-10 h-10" />
              </Link>
              <Link to="/upcoming-events" onClick={() => { if (isMenuOpen) { toggleMenu() } }} className="text-customWhite hover:text-customOrange transition-colors">
                <Calendar className="w-10 h-10" />
              </Link>
              <button
                onClick={toggleMenu}
                className="w-14 h-14 rounded-full bg-customOrange flex items-center justify-center text-customBlack hover:bg-customLightOrange transition-colors focus:outline-none relative z-50"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
              <Link to="/account" onClick={() => { if (isMenuOpen) { toggleMenu() } }} className="text-customWhite hover:text-customOrange transition-colors">
                <User className="w-10 h-10" />
              </Link>
              <Link to="/newsletter" onClick={() => { if (isMenuOpen) { toggleMenu() } }} className="text-customWhite hover:text-customOrange transition-colors">
                <Mail className="w-10 h-10" />
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex-1 flex justify-end space-x-6">
              <a href="https://www.facebook.com/learnity" className="text-customWhite hover:text-customOrange transition-colors">
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="mailto:contact.learnity@gmail.com"
                className="text-customWhite hover:text-customOrange transition-colors"
              >
                <Mail className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/learnityro/" className="text-customWhite hover:text-customOrange transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="tel:+40722280009" className="text-customWhite hover:text-customOrange transition-colors">
                <Phone className="w-8 h-8" />
              </a>
            </div>
          </div>
        </nav>

        {(isMenuOpen || isClosing) && (
          <div className="fixed inset-0 pt-20 z-40 overflow-hidden">
            {/* Circle animation */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-start justify-center">
              <div 
                className={`absolute top-10 w-14 h-14 rounded-full bg-customBlack ${isClosing ? 'circle-shrink' : 'circle-expand'}`}
                style={{ transformOrigin: 'center center' }}
              ></div>
            </div>
            
            <div className={`relative z-10 flex items-center justify-center h-full ${isClosing ? 'menu-fade-out' : 'menu-fade-in'}`}>
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 gap-x-20 gap-y-10 max-w-4xl mx-auto">
                  {menuLinks.map((link, index) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-5xl font-bangers text-customWhite hover:text-customOrange transition-colors duration-300 flex items-center"
                      onClick={toggleMenu}
                    >
                      <span className="text-customOrange mr-4">{index + 1}.</span>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}