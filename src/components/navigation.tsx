'use client'

import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Reservations', href: '/reservation' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Premium Logo with Company Name */}
          <Link to="/" className="flex items-center group">
            <div className="relative flex items-center gap-4">
              {/* Logo Container with Enhanced Background */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-xl blur-md group-hover:from-yellow-400/30 group-hover:via-yellow-500/20 group-hover:to-yellow-600/10 transition-all duration-500"></div>
                <div className={`relative ${isScrolled ? 'bg-gray-50/80' : 'bg-white/10'} backdrop-blur-sm rounded-xl p-2 border ${isScrolled ? 'border-gray-200' : 'border-white/20'} transition-all duration-300 group-hover:border-yellow-400/40 group-hover:shadow-lg`}>
                  <img 
                    src="/logos/logo.png" 
                    alt="Sanam Executive Transporters" 
                    className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Floating accent elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              </div>
              
              {/* Company Name */}
              <div className="flex flex-col justify-center">
                <span className={`font-playfair font-bold text-2xl ${isScrolled ? 'text-black' : 'text-white'} transition-all duration-300 group-hover:text-yellow-500 tracking-tight`}>
                  SANAM
                </span>
                <span className={`font-inter text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-300'} transition-all duration-300 tracking-widest uppercase group-hover:text-gray-500`}>
                  Executive Transporters
                </span>
              </div>
              
              {/* Enhanced hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl -z-10"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-inter font-medium transition-all duration-300 group ${
                  pathname === item.href 
                    ? isScrolled ? 'text-black' : 'text-yellow-300'
                    : isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-yellow-300'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
                {/* Subtle hover background */}
                <div className={`absolute inset-0 -mx-3 -my-2 rounded-lg ${isScrolled ? 'bg-gray-100/0 group-hover:bg-gray-100/80' : 'bg-white/0 group-hover:bg-white/10'} transition-all duration-300 -z-10`}></div>
              </Link>
            ))}
          </div>

          {/* Premium CTA Button */}
          <div className="hidden lg:block">
            <Link to="/reservation">
              <button className="group relative px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-inter font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 hover:scale-105 border-2 border-transparent hover:border-yellow-300/50">
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">Reserve Experience</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-lg scale-110"></div>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Premium Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl">
            <div className="px-6 py-6 space-y-4">
              {/* Mobile Logo with Company Name */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <div className="relative">
                  <div className="bg-gray-50/80 backdrop-blur-sm rounded-lg p-2 border border-gray-200">
                    <img 
                      src="/logos/logo.png" 
                      alt="Sanam Executive Transporters" 
                      className="h-8 w-auto"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-playfair font-bold text-lg text-black tracking-tight">
                    SANAM
                  </span>
                  <span className="font-inter text-xs text-gray-600 tracking-widest uppercase">
                    Executive Transporters
                  </span>
                </div>
              </div>
              
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-3 font-inter font-medium transition-all duration-300 rounded-lg px-3 ${
                    pathname === item.href
                      ? 'text-yellow-600 bg-yellow-50'
                      : 'text-gray-700 hover:text-black hover:bg-gray-50'
                  }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/reservation"
                className="block w-full py-4 mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-center font-inter font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reserve Experience
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
