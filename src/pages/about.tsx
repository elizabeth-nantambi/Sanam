
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

export default function About() {
  return (
    <main className="min-h-screen bg-white text-black">
      

      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">About SANAM</h1>
          <p className="text-xl text-gray-300 font-lato">Executive Transportation Excellence Since Day One</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 font-lato mb-4 leading-relaxed">
              SANAM Executive Transporters LLC was founded with a single mission: to provide luxury executive transportation that exceeds expectations. We understand that for busy executives and professionals, every minute counts and comfort matters.
            </p>
            <p className="text-lg text-gray-700 font-lato mb-4 leading-relaxed">
              With years of experience in the transportation industry, our team has developed a deep understanding of what premium service looks like. We've invested in a carefully curated fleet of vehicles and trained our drivers to the highest standards.
            </p>
            <p className="text-lg text-gray-700 font-lato leading-relaxed">
              Today, SANAM is the trusted choice for executives, corporations, and discerning travelers throughout the Issaquah and greater Seattle area. We continue to set the standard for excellence in executive transportation.
            </p>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <img 
              src="/Sanam/suv1.png" 
              alt="Executive transportation"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We commit to excellence in every aspect of our service, from vehicle maintenance to driver professionalism.'
              },
              {
                title: 'Integrity',
                description: 'We conduct our business with honesty, transparency, and unwavering commitment to our clients.'
              },
              {
                title: 'Reliability',
                description: 'Punctuality and dependability are non-negotiable. We show up on time, every time.'
              },
              {
                title: 'Professionalism',
                description: 'Our team maintains the highest standards of professional conduct and customer service.'
              },
              {
                title: 'Discretion',
                description: 'Your privacy and confidentiality are paramount. We maintain strict confidentiality in all dealings.'
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority. We listen to your needs and exceed your expectations.'
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 border border-gray-200 rounded-lg">
                <h3 className="text-2xl font-playfair font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700 font-lato">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-12 text-center">Company Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-gray-200 p-8">
            <h3 className="text-2xl font-playfair font-bold mb-6">Location</h3>
            <p className="font-lato text-gray-700 mb-2">22525 SE 64th Place, Suite 200</p>
            <p className="font-lato text-gray-700 mb-2">Issaquah, WA, 98027</p>
            <p className="font-lato text-gray-700">USA</p>
          </div>

          <div className="border border-gray-200 p-8">
            <h3 className="text-2xl font-playfair font-bold mb-6">Contact Information</h3>
            <p className="font-lato text-gray-700 mb-4">
              Phone: <a href="tel:+18888787301" className="font-bold hover:underline">+1 888 878 7301</a>
            </p>
            <p className="font-lato text-gray-700">
              Email: <a href="mailto:info@sanamexectransporters.com" className="font-bold hover:underline">info@sanamexectransporters.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Our Motto</h2>
          <p className="text-3xl md:text-4xl font-lato italic text-gray-300 mb-8">
            "Comfort and quality is what we offer"
          </p>
          <p className="text-xl text-gray-400 font-lato mb-12">
            Every vehicle, every driver, every moment is dedicated to ensuring your complete comfort and satisfaction.
          </p>
          <Link to="/reservations">
            <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-gray-200 font-semibold">
              Experience Our Service
            </Button>
          </Link>
        </div>
      </section>

      
    </main>
  )
}
