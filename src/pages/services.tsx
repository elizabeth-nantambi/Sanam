
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { CheckCircle, Star, Clock, Shield, Users, Phone, ArrowRight, Sparkles } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Seamless Airport Transfers',
      subtitle: 'Sea-Tac Specialists',
      description: 'Skip the stress of Sea-Tac traffic and parking. We provide reliable pick-up and drop-off services tailored to your flight schedule.',
      features: ['Real-time flight tracking and monitoring', 'Professional meet & greet with luggage assistance', 'Complimentary 30-minute wait time', 'Direct terminal pickup and drop-off'],
      price: 'From $85',
      highlight: 'Most Popular',
      bgGradient: 'from-blue-600 via-indigo-600 to-purple-600',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Iconic Seattle Tours',
      subtitle: 'Emerald City Discovery',
      description: 'Experience the Emerald City from the comfort of a luxury cabin. Perfect for visiting landmarks like the Space Needle, Mount Rainier, or Woodinville Wine Country.',
      features: ['Fully customizable itineraries', 'Expert local guides with insider knowledge', 'Premium vehicles with panoramic views', 'Small and large group accommodations'],
      price: 'From $150/hr',
      highlight: '',
      bgGradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      borderColor: 'border-emerald-200'
    },
    {
      title: 'Special Celebrations',
      subtitle: 'Unforgettable Moments',
      description: 'Make your entrance unforgettable. We specialize in adding elegance to weddings, birthdays, anniversaries, and graduations.',
      features: ['Dedicated wedding party coordination', 'Premium sound systems and ambient lighting', 'Multi-vehicle fleet coordination', 'Timeline management and logistics'],
      price: 'Custom Packages',
      highlight: 'Premium Experience',
      bgGradient: 'from-pink-600 via-rose-600 to-red-600',
      borderColor: 'border-pink-200'
    },
    {
      title: 'Romantic Evenings',
      subtitle: 'Intimate Luxury',
      description: 'Transform dinner dates into extraordinary experiences. Perfect for symphony nights, fine dining, or quiet anniversary celebrations.',
      features: ['Discreet, professional service', 'Door-to-door luxury transportation', 'Climate-controlled comfort', 'Privacy-focused chauffeurs'],
      price: 'From $120/hr',
      highlight: '',
      bgGradient: 'from-amber-600 via-orange-600 to-red-600',
      borderColor: 'border-amber-200'
    },
    {
      title: 'Executive Travel',
      subtitle: 'Mobile Office',
      description: 'For modern professionals, the vehicle becomes an extension of your office. Quiet, refined environment for business preparation.',
      features: ['Ultra-quiet cabin for calls and preparation', 'Mobile office capabilities and WiFi', 'Flexible scheduling for busy executives', 'Confidential and secure transport'],
      price: 'From $95/hr',
      highlight: 'Business Choice',
      bgGradient: 'from-gray-700 via-slate-700 to-zinc-700',
      borderColor: 'border-gray-300'
    }
  ]

  const stats = [
    { number: '500+', label: 'Satisfied Clients', icon: Users },
    { number: '5.0★', label: 'Perfect Rating', icon: Star },
    { number: '24/7', label: 'Available', icon: Clock },
    { number: '100%', label: 'Safety Record', icon: Shield }
  ]

  const luxuryFeatures = [
    {
      title: 'Unmatched Luxury Fleet',
      description: 'Hand-selected premium vehicles featuring Italian leather, advanced climate systems, and state-of-the-art technology for the ultimate comfort experience.',
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      title: 'Elite Chauffeur Excellence',
      description: 'Rigorously trained professionals with extensive background checks, delivering punctual, courteous, and absolutely discreet service every single time.',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Pacific Northwest Mastery',
      description: 'Unparalleled knowledge of Seattle and surrounding regions, including optimal routes, real-time traffic intelligence, and exclusive local insights.',
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      title: 'Absolute Safety & Security',
      description: 'Perfect safety record, comprehensive insurance coverage, real-time GPS tracking, and rigorous vehicle maintenance protocols for complete peace of mind.',
      gradient: 'from-orange-600 to-red-600'
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* Sophisticated Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
          {/* Enhanced floating elements */}
          <div className="absolute top-20 left-20 w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-60 right-32 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse delay-1000 opacity-40"></div>
          <div className="absolute bottom-40 left-1/3 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-2000 opacity-50"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-3000 opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Premium Badge */}
          
          
          {/* Main Title */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-playfair font-bold mb-8 leading-none">
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Arrive in
            </span>
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent animate-pulse">
              Excellence
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-gray-300 font-light mb-6 leading-relaxed">
              Where luxury transcends transportation
            </p>
            <p className="text-xl text-gray-400 font-lato leading-relaxed">
              Premium chauffeured experiences crafted for those who demand punctuality, privacy, and impeccable style in the heart of the Pacific Northwest.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/reservations">
              <Button className="group px-12 py-6 text-xl bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-white font-semibold rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                Reserve Your Experience
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="#services">
              <Button className="px-12 py-6 text-xl border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-2xl transition-all duration-500 backdrop-blur-sm bg-transparent">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Luxury Stats Bar */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-10 h-10 text-amber-400" />
                </div>
                <div className="text-4xl font-playfair font-bold text-white mb-3">{stat.number}</div>
                <div className="text-gray-400 font-lato tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section id="services" className="relative py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-playfair font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Signature Services
            </h2>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Every journey curated to perfection, every moment designed for excellence
            </p>
          </div>

          {/* Compact Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-2xl border ${service.borderColor} bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl hover:from-white/10 hover:to-white/5 transition-all duration-700 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/10`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                {/* Content */}
                <div className="relative p-6">
                  {/* Highlight Badge */}
                  {service.highlight && (
                    <div className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold tracking-wider">
                      {service.highlight}
                    </div>
                  )}
                  
                  {/* Title and Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl font-playfair font-bold text-white mb-1 group-hover:text-gray-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-amber-400 font-medium tracking-wider">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 font-lato mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <div className="text-xl font-playfair font-bold text-white">{service.price}</div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 font-lato leading-relaxed text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Link to="/reservations">
                    <Button className={`w-full py-3 text-sm font-semibold rounded-xl transition-all duration-500 bg-gradient-to-r ${service.bgGradient} hover:scale-105 text-white shadow-lg hover:shadow-xl`}>
                      Reserve This Service
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Why Choose Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The Sanam Difference
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience transportation redefined through uncompromising excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {luxuryFeatures.map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:from-white/10 hover:to-white/5 transition-all duration-700 hover:scale-[1.02]">
                  
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 font-lato leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-6">
          <div className="inline-flex items-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 mb-12">
            <Phone className="w-5 h-5 mr-3 text-emerald-400" />
            <span className="text-sm font-medium tracking-wider">AVAILABLE 24/7 FOR YOUR CONVENIENCE</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-playfair font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready for Excellence?
          </h2>
          <p className="text-2xl text-gray-300 mb-16 font-lato max-w-3xl mx-auto leading-relaxed">
            Join our distinguished clientele who trust us for their most important transportation needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link to="/reservations">
              <Button className="px-16 py-6 text-xl bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-white font-semibold rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                Make a Reservation
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="px-16 py-6 text-xl border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-2xl transition-all duration-500 backdrop-blur-sm bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  )
}
