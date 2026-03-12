import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Fleet() {
  const [currentImageIndexes, setCurrentImageIndexes] = useState({})

  const vehicles = [
    {
      name: "Cadillac Escalade ESV",
      category: "Midnight Black Ultra-Luxury SUV",
      passengers: "Up to 7 passengers",
      luggage: "8-10 large bags",
      features: ["Premium midnight black exterior", "Luxury leather seating", "Climate control zones", "Entertainment system", "Privacy partition", "WiFi enabled"],
      gallery: [
        { src: "/Sanam/suv1.png", title: "Midnight Black Exterior" },
        { src: "/Sanam/int1.png", title: "Luxury Interior" },
        { src: "/Sanam/suv1.png", title: "Side Profile" },
        { src: "/Sanam/int1.png", title: "Executive Seating" }
      ]
    },
    {
      name: "Lincoln Navigator",
      category: "Midnight Black Executive SUV",
      passengers: "Up to 8 passengers",
      luggage: "6-8 large bags",
      features: ["Midnight black finish", "Executive captain's chairs", "Premium sound system", "Dual climate zones", "Power outlets", "Tinted privacy windows"],
      gallery: [
        { src: "/Sanam/lincsuv.png", title: "Midnight Black Exterior" },
        { src: "/Sanam/int1.png", title: "Executive Interior" },
        { src: "/Sanam/lincsuv.png", title: "Side Profile" },
        { src: "/Sanam/int1.png", title: "Rear Executive Seating" }
      ]
    },
    {
      name: "Mercedes-Benz GLS 600",
      category: "Midnight Black Premium SUV",
      passengers: "Up to 7 passengers",
      luggage: "6-8 large bags",
      features: ["Midnight black metallic paint", "Luxury interior", "Advanced safety features", "Premium audio", "Ambient lighting", "Heated/cooled seats"],
      gallery: [
        { src: "/Sanam/suv1.png", title: "Midnight Black Exterior" },
        { src: "/Sanam/int1.png", title: "Premium Interior" },
        { src: "/Sanam/suv1.png", title: "Side Profile" },
        { src: "/Sanam/int1.png", title: "Rear Seating Area" }
      ]
    },
    {
      name: "BMW X7 xDrive40i",
      category: "Midnight Black Executive SUV",
      passengers: "Up to 6 passengers",
      luggage: "5-7 large bags",
      features: ["Midnight black exterior", "Executive lounge seating", "Gesture control", "Premium materials", "Advanced infotainment", "Wireless charging"],
      gallery: [
        { src: "/Sanam/suv1.png", title: "Midnight Black Exterior" },
        { src: "/Sanam/int1.png", title: "Executive Interior" },
        { src: "/Sanam/suv1.png", title: "Side Profile" },
        { src: "/Sanam/int1.png", title: "Luxury Seating" }
      ]
    }
  ]

  const fleetStandards = [
    {
      title: "Midnight Black Finish",
      description: "Every SUV features our signature midnight black exterior with premium detailing",
      icon: "🖤"
    },
    {
      title: "Executive Class Only",
      description: "Our fleet consists exclusively of full-size luxury SUVs for maximum comfort",
      icon: "🚙"
    },
    {
      title: "Immaculate Condition",
      description: "Each midnight black SUV undergoes thorough cleaning and detailing before every trip",
      icon: "✨"
    },
    {
      title: "Regular Maintenance",
      description: "Preventive maintenance schedules ensure optimal performance and reliability",
      icon: "🔧"
    },
    {
      title: "Professional Drivers",
      description: "Experienced, licensed chauffeurs trained in luxury SUV service standards",
      icon: "👔"
    },
    {
      title: "24/7 SUV Availability",
      description: "Our midnight black SUV fleet is ready to serve you around the clock",
      icon: "🌟"
    }
  ]

  const getCurrentImageIndex = (vehicleIndex) => {
    return currentImageIndexes[vehicleIndex] || 0
  }

  const nextImage = (vehicleIndex, galleryLength) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [vehicleIndex]: (getCurrentImageIndex(vehicleIndex) + 1) % galleryLength
    }))
  }

  const prevImage = (vehicleIndex, galleryLength) => {
    setCurrentImageIndexes(prev => ({
      ...prev,
      [vehicleIndex]: getCurrentImageIndex(vehicleIndex) === 0 
        ? galleryLength - 1 
        : getCurrentImageIndex(vehicleIndex) - 1
    }))
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 px-6">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/Sanam/suv1.jpg" 
            alt="Midnight black luxury SUV fleet" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">Our Elite Midnight Black SUV Fleet</h1>
          <p className="text-xl md:text-2xl text-gray-300 font-lato max-w-3xl mx-auto">
            Experience luxury transportation with our exclusive collection of midnight black premium SUVs
          </p>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Midnight Black SUV Collection</h2>
          <p className="text-xl text-gray-700 font-lato max-w-3xl mx-auto">
            Every SUV in our fleet features our signature midnight black finish and is maintained to the highest luxury standards, ensuring your journey is comfortable, safe, and sophisticated.
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={vehicle.gallery[getCurrentImageIndex(index)].src} 
                  alt={vehicle.gallery[getCurrentImageIndex(index)].title}
                  className="w-full h-64 object-cover transition-transform duration-500"
                />
                
                {/* Category Badge */}
                {/* <div className="absolute top-4 left-4">
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-lato tracking-wider">
                    {vehicle.category}
                  </span>
                </div> */}

                {/* Image Title */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-lato">
                    {vehicle.gallery[getCurrentImageIndex(index)].title}
                  </span>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => prevImage(index, vehicle.gallery.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 rounded-full transition-colors border border-white/20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => nextImage(index, vehicle.gallery.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 rounded-full transition-colors border border-white/20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-lato">
                    {getCurrentImageIndex(index) + 1} of {vehicle.gallery.length}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-playfair font-bold mb-4 group-hover:text-gray-700 transition-colors">
                  {vehicle.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-lato font-semibold text-gray-800">Capacity</p>
                    <p className="text-gray-600">{vehicle.passengers}</p>
                  </div>
                  <div>
                    <p className="font-lato font-semibold text-gray-800">Luggage</p>
                    <p className="text-gray-600">{vehicle.luggage}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-lato font-semibold text-gray-800 mb-3">Premium SUV Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                        <span className="text-sm text-gray-600 font-lato">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="tel:+18888787301">
                  <Button className="w-full py-3 bg-black text-white hover:bg-gray-800 font-semibold rounded-lg transition-colors duration-300 group">
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Reserve This SUV
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet Standards */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Midnight Black SUV Standards</h2>
            <p className="text-xl text-gray-700 font-lato">
              Every midnight black SUV meets our rigorous standards for luxury, safety, and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetStandards.map((standard, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-xl font-playfair font-bold mb-3">{standard.title}</h3>
                <p className="text-gray-600 font-lato">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Ready to Experience Midnight Black Luxury?</h2>
          <p className="text-xl text-gray-300 font-lato mb-12">
            Choose from our exclusive midnight black SUV fleet and elevate your transportation experience
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+18888787301">
              <Button className="px-12 py-4 bg-white text-black hover:bg-gray-100 font-semibold rounded-full transition-colors duration-300 min-w-[200px] group">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call to Reserve
                </span>
              </Button>
            </a>
            <Link to="/contact">
              <Button className="px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-semibold bg-transparent rounded-full transition-colors duration-300 min-w-[200px]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
