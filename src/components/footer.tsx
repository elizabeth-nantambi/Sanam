import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

// Dynamic Year Component
const DynamicYear = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear())
    }, 1000) // Update every second to ensure accuracy

    return () => clearInterval(interval)
  }, [])

  return <span>{currentYear}</span>
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-playfair font-bold">S</div>
              <span className="font-playfair font-bold text-xl">SANAM</span>
            </div>
            <p className="font-lato text-gray-400 text-sm">Executive Transporters LLC - Premium transportation services dedicated to your comfort and quality.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-lato text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/fleet" className="hover:text-white transition-colors">Fleet</Link></li>
              <li><Link to="/reservations" className="hover:text-white transition-colors">Reservations</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 font-lato text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Corporate Transportation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Airport Transfers</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Event Transportation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">City Tours</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 font-lato text-gray-400">
              <li className="flex gap-2 items-start">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span><a href="tel:+18888787301" className="hover:text-white transition-colors">+1 888 878 7301</a></span>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span><a href="mailto:info@sanamexectransporters.com" className="hover:text-white transition-colors">info@sanamexectransporters.com</a></span>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>22525 SE 64th Place, Suite 200,<br />Issaquah, WA, 98027</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-lato text-gray-500 text-sm">&copy; <DynamicYear /> SANAM Executive Transporters LLC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-lato text-gray-500 text-sm">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
