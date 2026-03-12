'use client'

import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { type FormEvent, useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setLoading(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-white text-black">
      

      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 font-lato">We're here to answer your questions and discuss your transportation needs</p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-playfair font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <Phone size={24} className="text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-playfair font-bold mb-2">Phone</h3>
                  <p className="font-lato text-gray-700">
                    <a href="tel:+18888787301" className="hover:underline font-semibold">+1 888 878 7301</a>
                  </p>
                  <p className="font-lato text-gray-600 text-sm mt-1">Call us Monday - Friday, 8AM - 6PM PST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={24} className="text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-playfair font-bold mb-2">Email</h3>
                  <p className="font-lato text-gray-700">
                    <a href="mailto:info@sanamexectransporters.com" className="hover:underline font-semibold">info@sanamexectransporters.com</a>
                  </p>
                  <p className="font-lato text-gray-600 text-sm mt-1">We respond to emails within 2 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin size={24} className="text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-playfair font-bold mb-2">Address</h3>
                  <p className="font-lato text-gray-700">22525 SE 64th Place, Suite 200</p>
                  <p className="font-lato text-gray-700">Issaquah, WA, 98027</p>
                  <p className="font-lato text-gray-700">USA</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={24} className="text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-playfair font-bold mb-2">Hours of Operation</h3>
                  <p className="font-lato text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="font-lato text-gray-700">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                  <p className="font-lato text-gray-600 text-sm mt-1">24/7 emergency bookings available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-4xl font-playfair font-bold mb-8">Send us a Message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-lato">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-playfair font-bold mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  className="bg-white border border-gray-300 font-lato"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-playfair font-bold mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-white border border-gray-300 font-lato"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-playfair font-bold mb-2">Phone</label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="bg-white border border-gray-300 font-lato"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-playfair font-bold mb-2">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  required
                  className="bg-white border border-gray-300 font-lato"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-playfair font-bold mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  required
                  className="bg-white border border-gray-300 font-lato resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full px-8 py-3 bg-black text-white hover:bg-gray-800 font-semibold font-lato disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold mb-2">Quick Call</h3>
              <p className="font-lato text-gray-300 mb-4">Reach us by phone</p>
              <a 
                href="tel:+18888787301"
                className="inline-block px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors font-semibold font-lato"
              >
                Call Now
              </a>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold mb-2">Email Us</h3>
              <p className="font-lato text-gray-300 mb-4">Send us an email</p>
              <a 
                href="mailto:info@sanamexectransporters.com"
                className="inline-block px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors font-semibold font-lato"
              >
                Email Now
              </a>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold mb-2">Book Now</h3>
              <p className="font-lato text-gray-300 mb-4">Reserve your transport</p>
              <a 
                href="/reservations"
                className="inline-block px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors font-semibold font-lato"
              >
                Reserve
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  )
}
