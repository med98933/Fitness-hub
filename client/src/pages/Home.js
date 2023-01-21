import React from 'react'
import About from '../componenets/About/About'
import Contact from '../componenets/Contact/Contact'
import HeroSection from '../componenets/HeroSection/HeroSection'
import Programs from '../componenets/Programs/Programs'
import Services from '../componenets/Services/Services'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Programs />
      <About />
      <Contact />
    </div>
  )
}

export default Home
