import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Stats from './components/Stats'
import Properties from './components/Properties'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='font-plus-jakarta-sans'>
      <Navbar />
      <Hero />
      <Benefits />
      <Stats />
      <Properties />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App