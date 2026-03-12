'use client'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { Button } from '../components/ui/button'

// Counter component for animated numbers
const AnimatedCounter = ({ target, label }: { target: number, label: string }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            
            let start = 0
            const increment = target / 50
            const timer = setInterval(() => {
              start += increment
              if (start >= target) {
                setCount(target)
                clearInterval(timer)
              } else {
                setCount(Math.floor(start))
              }
            }, 30)
          }
        })
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById(`counter-${label}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [target, label, hasAnimated])

  return (
    <div id={`counter-${label}`} className="group">
      <div className="text-4xl md:text-5xl font-playfair font-bold mb-2 group-hover:text-gray-300 transition-colors">
        {target === 100 ? `${count}%` : target === 24 ? `${count}/7` : target === 5 ? `${count}★` : `${count}+`}
      </div>
      <div className="text-gray-400 font-lato tracking-wide uppercase text-sm">
        {label}
      </div>
    </div>
  )
}

// Animated Stats Section Component with Marquee
const AnimatedStatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  const marqueeItems = [
    "100% Elite Black SUVs ✨",
    "24/7 Concierge Service ✨", 
    "5★ Luxury Experience ✨",
    "Years Excellence ✨",
    "Premium Transportation ✨",
    "Mobile Sanctuary ✨"
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" className="bg-black text-white overflow-hidden">
      {/* Animated Marquee */}
      <div className="w-full py-6 border-b border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Original items */}
          {marqueeItems.map((item, index) => (
            <span key={index} className="font-lato font-medium text-lg mr-12 text-gray-300">
              {item}
            </span>
          ))}
          {/* Duplicate items for seamless scroll */}
          {marqueeItems.map((item, index) => (
            <span key={index + marqueeItems.length} className="font-lato font-medium text-lg mr-12 text-gray-300">
              {item}
            </span>
          ))}
          {marqueeItems.map((item, index) => (
            <span key={index + marqueeItems.length * 2} className="font-lato font-medium text-lg mr-12 text-gray-300">
              {item}
            </span>
          ))}
          {marqueeItems.map((item, index) => (
            <span key={index + marqueeItems.length * 3} className="font-lato font-medium text-lg mr-12 text-gray-300">
              {item}
            </span>
          ))}
        </div>
      </div>

      

      <style>{`
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); } 
        }
      `}</style>
    </section>
  )
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    setIsLoaded(true)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white text-black">
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 transform-gpu"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img 
            src="https://www.shutterstock.com/image-photo/chauffeur-helps-elegant-business-woman-600nw-2385474351.jpg" 
            alt="Premium black SUV executive transportation" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        </div>
        
        <div className={`relative z-10 text-center px-6 max-w-6xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold mb-6 text-balance leading-tight">
            Your Premium
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-600 bg-clip-text text-transparent">
             Ride Partner
            </span>
          </h1>
          <p className="text-xl md:text-3xl mb-6 font-lato text-gray-200 font-light tracking-wide">
            Premium Black SUV Transportation
          </p>
          <p className="text-lg md:text-xl mb-10 font-lato text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Where luxury meets utility. A first-class experience on the road for the discerning traveler who demands excellence in every mile.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/reservations">
              <Button className="group relative px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-inter font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 hover:scale-105">
                <span className="group-hover:translate-x-1 transition-transform duration-300">Reserve Your Sanctuary</span>
              </Button>
            </Link>
            <Link to="/services">
              <Button className="group relative px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-inter font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 hover:scale-105">
                <span className="group-hover:translate-x-1 transition-transform duration-300">Elite Fleet</span>
              </Button>
            </Link>
          </div>
        </div>

        
      </section>

      {/* Animated Luxury Stats Section with Marquee */}
      <AnimatedStatsSection />

      {/* The Sanam Difference - Premium Dynamic Design */}
      <section className="py-32 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-radial from-white/10 to-transparent rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-white/20 rotate-45 animate-pulse"></div>
          <div className="absolute top-2/3 left-1/3 w-6 h-6 border-2 border-white/30 rotate-12"></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-yellow-400/40 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="max-w-8xl mx-auto relative z-10">
          <div className="text-center mb-24">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full text-sm font-inter font-bold tracking-widest uppercase mb-8 border border-white/20 hover:border-yellow-400/40 transition-all duration-500 group">
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-ping group-hover:animate-pulse"></span>
              Excellence Redefined
            </div>
            
            <h2 className="text-6xl md:text-8xl font-playfair font-bold mb-12 leading-tight">
              The <span className="relative">
                <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
                  SANAM
                </span>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
              </span>
              <br />
              Distinction
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter max-w-5xl mx-auto leading-relaxed">
              Where luxury transcends transportation and every journey becomes an expression of excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Ultra-Luxury Fleet', 
                description: 'Meticulously curated black SUVs equipped with premium amenities, creating the ultimate mobile sanctuary for discerning executives.',
                
                gradient: 'from-white/10 to-gray-800/20'
              },
              { 
                title: 'Master Chauffeurs', 
                description: 'Elite professionals trained in discretion, punctuality, and white-glove service delivery for the most demanding clientele.',
                
                gradient: 'from-yellow-400/10 to-white/5'
              },
              { 
                title: 'Executive Experience', 
                description: 'Every journey transforms into a premium experience, whether for high-stakes corporate engagements or exclusive private events.',
                
                gradient: 'from-gray-700/20 to-white/10'
              },
              { 
                title: 'Precision & Utility', 
                description: 'Perfect harmony between sophisticated comfort and practical functionality designed for the modern executive lifestyle.',
                
                gradient: 'from-white/5 to-yellow-400/10'
              },
              { 
                title: 'Seamless Excellence', 
                description: 'From initial contact to final destination, we orchestrate every detail to exceed expectations and deliver perfection.',
                
                gradient: 'from-gray-600/15 to-white/10'
              },
              { 
                title: 'Mobile Sanctuary', 
                description: 'Your vehicle becomes a private executive retreat, offering tranquility and productivity during every moment of transit.',
                
                gradient: 'from-white/10 to-yellow-400/5'
              }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden">
                {/* Card Container */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-white/10 cursor-pointer">
                  
                  {/* Dynamic top accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`}></div>
                  
                  {/* Premium number indicator */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-black to-gray-800 border-2 border-white/20 rounded-full flex items-center justify-center group-hover:border-yellow-400/40 group-hover:scale-110 transition-all duration-500 shadow-xl">
                    <span className="font-playfair font-bold text-white text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon with animation */}
                    
                    
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 font-inter leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300 mb-6">
                      {item.description}
                    </p>
                    
                    {/* Premium arrow indicator */}
                    {/* <div className="flex items-center text-gray-400 group-hover:text-white transition-all duration-300">
                      <span className="font-inter text-sm tracking-wider uppercase mr-3 group-hover:tracking-widest transition-all duration-300">Explore</span>
                      <div className="w-8 h-0.5 bg-gray-400 group-hover:bg-white group-hover:w-12 transition-all duration-300"></div>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
            
          </div>

          {/* Dynamic CTA Section */}
          <div className="text-center mt-24">
            <div className="relative inline-block">
              {/* Floating elements around button */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-yellow-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
              
              <Link to="/about">
                <button className="group relative px-16 py-8 bg-gradient-to-r from-white via-gray-100 to-white text-black font-inter font-bold text-xl rounded-full overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-white/25 hover:scale-110">
                  <span className="relative z-10 flex items-center justify-center">
                    Discover Our Legacy
                    <svg className="w-7 h-7 ml-4 group-hover:translate-x-3 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}</style>
      </section>

      {/* Premium Experience Section - Enhanced with Theme Colors */}
      <section className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-xl text-white rounded-full text-sm font-inter font-bold tracking-widest uppercase border border-white/20">
                  Premium Experience
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-8 leading-tight">
                More Than
                <br />
                <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">Transportation</span>
              </h2>
              <p className="text-xl text-gray-300 font-inter mb-8 leading-relaxed">
                At Sanam Executive Transporters, we specialize in premium black SUV transportation (NAICS 485320), creating a bridge between luxury and utility. Every journey becomes an experience tailored for the discerning traveler who values both comfort and functionality.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'High-Stakes Corporate Arrivals', desc: 'Professional presence for executive meetings and corporate events' },
                  { title: 'Private Gala Transportation', desc: 'Elegant arrivals for exclusive events and special occasions' },
                  { title: 'Mobile Sanctuary Experience', desc: 'Your personal retreat during transit, designed for peace and productivity' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <span className="text-3xl text-yellow-400 group-hover:scale-110 transition-transform duration-300">◆</span>
                    <div>
                      <h3 className="font-playfair font-bold text-xl mb-2 text-white group-hover:text-yellow-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 font-inter leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border border-white/10">
                <img 
                  src="/Sanam/int1.png" 
                  alt="Luxury black SUV interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400/20 rounded-2xl blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Transportation Services - Premium Enhanced */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Dynamic Background with Parallax */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop" 
            alt="Luxury city skyline" 
            className="w-full h-full object-cover transform scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/85 to-black/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-32 h-32 border border-white/10 rotate-45 animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-4 h-4 bg-yellow-400/60 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-1/3 left-1/4 w-6 h-6 border-2 border-white/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-white/5 rotate-12 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-8xl mx-auto text-white">
          {/* Premium Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full text-sm font-inter font-bold tracking-widest uppercase mb-8 border border-white/20 group hover:border-yellow-400/40 transition-all duration-500">
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-pulse group-hover:animate-ping"></span>
              Executive Solutions
            </div>
            
            <h2 className="text-6xl md:text-8xl font-playfair font-bold mb-8 leading-tight">
              Elite <span className="relative">
                <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
                  Transportation
                </span>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
              </span>
              <br />
              <span className="text-gray-300">Services</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 font-inter max-w-4xl mx-auto leading-relaxed">
              Comprehensive luxury solutions crafted for the distinguished executive lifestyle
            </p>
          </div>
          
          {/* Premium Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {[
              { 
                title: 'Executive Corporate Transport', 
                desc: 'High-stakes boardroom arrivals and departures with our meticulously maintained black SUV fleet, ensuring your professional image remains impeccable.',
                features: ['Door-to-door precision', 'Executive amenities', 'Confidential service'],
                gradient: 'from-white/10 to-white/5'
              },
              { 
                title: 'Private Event Transportation', 
                desc: 'Make a statement at galas, premieres, and exclusive gatherings with transportation that matches the prestige of your destination.',
                features: ['Red-carpet arrivals', 'Event coordination', 'VIP treatment'],
                gradient: 'from-yellow-400/10 to-white/5'
              },
              { 
                title: 'Airport Sanctuary Service', 
                desc: 'Seamless transitions between destinations with your mobile sanctuary, transforming travel time into productive luxury.',
                features: ['Flight monitoring', 'Concierge assistance', 'Mobile office'],
                gradient: 'from-gray-700/20 to-white/10'
              },
              { 
                title: 'VIP City Navigation', 
                desc: 'Discreet, professional transportation through urban landscapes with local expertise and uncompromising attention to detail.',
                features: ['Local expertise', 'Route optimization', 'Discretion guaranteed'],
                gradient: 'from-white/5 to-yellow-400/10'
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden">
                {/* Service Card */}
                <div className="relative bg-black/30 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:bg-black/20 hover:border-white/30 transition-all duration-700 hover:-translate-y-6 hover:shadow-2xl hover:shadow-black/50 cursor-pointer">
                  
                  {/* Dynamic border accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}></div>
                  
                  {/* Service number */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-white to-gray-200 border-4 border-black rounded-full flex items-center justify-center group-hover:scale-110 group-hover:border-yellow-400 transition-all duration-500 shadow-2xl">
                    <span className="font-playfair font-bold text-black text-xl">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 font-inter leading-relaxed text-lg mb-8 group-hover:text-gray-200 transition-colors duration-300">
                      {service.desc}
                    </p>
                    
                    {/* Premium features list */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center group/item">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-400 font-inter group-hover/item:text-white transition-colors duration-300 tracking-wide">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Elegant call to action */}
                    {/* <div className="flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-white/30 transition-colors duration-300">
                      <span className="text-gray-400 group-hover:text-white font-inter text-sm tracking-wider uppercase transition-colors duration-300">
                        Learn More
                      </span>
                      <div className="flex items-center">
                        <div className="w-12 h-0.5 bg-gray-400 group-hover:bg-yellow-400 group-hover:w-16 transition-all duration-500 mr-3"></div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium CTA Section */}
          <div className="text-center">
            <div className="relative inline-block">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-white/20 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-yellow-400/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-12 w-4 h-4 bg-white/30 rotate-45 animate-pulse delay-500"></div>
              
              <Link to="/services">
                <button className="group relative px-20 py-8 bg-gradient-to-r from-white via-gray-100 to-white text-black font-inter font-bold text-xl rounded-full overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-white/30 hover:scale-110 min-w-[400px] transform hover:-translate-y-3">
                  <span className="relative z-10 flex items-center justify-center">
                    Explore All Services
                    <svg className="w-7 h-7 ml-4 group-hover:translate-x-3 group-hover:rotate-12 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
          }
        `}</style>
      </section>

      {/* Enhanced Call to Action with Theme Colors */}
      <section className="py-32 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-xl text-white rounded-full text-sm font-inter font-bold tracking-widest uppercase border border-white/20 group hover:border-yellow-400/40 transition-all duration-500">
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-pulse group-hover:animate-ping"></span>
              Ready to Experience Excellence?
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-playfair font-bold mb-12 leading-tight">
            Experience Your
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
                Mobile Sanctuary
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-inter leading-relaxed max-w-3xl mx-auto">
            Elevate your travel experience with Sanam Executive Transporters. Where every journey becomes a destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/reservations">
              <button className="group relative px-16 py-6 bg-gradient-to-r from-white via-gray-100 to-white text-black font-inter font-bold text-lg rounded-full overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-white/25 hover:scale-110 min-w-[320px] transform hover:-translate-y-2">
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">Reserve Your Experience</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </button>
            </Link>
            <Link to="/contact">
              <button className="group relative px-16 py-6 border-2 border-white/30 text-white hover:bg-white hover:text-black font-inter font-bold text-lg bg-transparent rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 min-w-[240px] backdrop-blur-sm">
                <span className="group-hover:translate-x-1 transition-transform duration-300">Connect With Us</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-white/20 rotate-45 animate-pulse"></div>
          <div className="absolute top-2/3 left-1/3 w-6 h-6 border-2 border-yellow-400/30 rotate-12 animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-yellow-400/60 rounded-full animate-pulse delay-500"></div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
