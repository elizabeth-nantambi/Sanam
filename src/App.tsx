import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home'
import Services from './pages/services'
import About from './pages/about'
import Contact from './pages/contact'
import Fleet from './pages/fleet'
import Reservation from './pages/reservations'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={
            <Layout>
              <Services />
            </Layout>
          } />
          <Route path="/about" element={
            <Layout>
              <About />
            </Layout>
          } />
          <Route path="/contact" element={
            <Layout>
              <Contact />
            </Layout>
          } />
          <Route path="/fleet" element={
            <Layout>
              <Fleet />
            </Layout>
          } />
          <Route path="/reservation" element={
            <Layout>
              <Reservation />
            </Layout>
          } />
          {/* <Route path="/tracking" element={<Tracking />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
