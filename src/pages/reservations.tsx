import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

export default function Reservation() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    pickupDate: '',
    pickupTime: '',
    pickupLocation: '',
    dropoffLocation: '',
    vehicleType: '',
    passengers: '',
    specialRequests: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Reservation form submitted:', formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Make a Reservation</h1>
          <p className="text-xl text-gray-300 font-lato">
            Book your premium transportation experience with Sanam Executive Transporters
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-playfair font-bold mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Trip Details */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-playfair font-bold mb-6">Trip Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Date *</label>
                  <Input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Time *</label>
                  <Input
                    type="time"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location *</label>
                  <Input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    placeholder="Enter pickup address"
                    required
                    className="w-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Drop-off Location *</label>
                  <Input
                    type="text"
                    name="dropoffLocation"
                    value={formData.dropoffLocation}
                    onChange={handleInputChange}
                    placeholder="Enter destination address"
                    required
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Selection */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-playfair font-bold mb-6">Vehicle Selection</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Vehicle *</label>
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Select a vehicle</option>
                    <option value="cadillac-escalade">Cadillac Escalade ESV</option>
                    <option value="lincoln-navigator">Lincoln Navigator</option>
                    <option value="mercedes-gls">Mercedes-Benz GLS</option>
                    <option value="bmw-x7">BMW X7</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Passengers *</label>
                  <select
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Select passengers</option>
                    <option value="1">1 passenger</option>
                    <option value="2">2 passengers</option>
                    <option value="3">3 passengers</option>
                    <option value="4">4 passengers</option>
                    <option value="5">5 passengers</option>
                    <option value="6">6 passengers</option>
                    <option value="7">7 passengers</option>
                    <option value="8">8 passengers</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-playfair font-bold mb-6">Special Requests</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Any special requests, dietary preferences, or additional information..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="px-12 py-4 bg-black text-white hover:bg-gray-800 font-semibold rounded-full text-lg transition-colors duration-300 min-w-[250px]"
              >
                Submit Reservation Request
              </Button>
              <p className="text-sm text-gray-600 mt-4 font-lato">
                We'll contact you within 2 hours to confirm your reservation and provide pricing details.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Booking Information */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Booking Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-playfair font-bold mb-2">Quick Response</h3>
              <p className="text-gray-600 font-lato">We respond to all reservation requests within 2 hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-playfair font-bold mb-2">Flexible Payment</h3>
              <p className="text-gray-600 font-lato">Multiple payment options available for your convenience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-xl font-playfair font-bold mb-2">24/7 Service</h3>
              <p className="text-gray-600 font-lato">Available around the clock for your transportation needs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}