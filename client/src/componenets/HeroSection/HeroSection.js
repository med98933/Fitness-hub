import React from 'react'
import Fitness from '../../images/fitness.png'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-section-container'>
        <div className='left'>
            <h1>Fitness HUB</h1>
            <p>Health plays a very important role in our life. It is defined as the social, mental, and physical fitness of our body. A healthy person is someone who is mentally fit and they do not have any kind of tension. It is our health responsible for our mood swings.</p>
            <h4 style={{marginTop: '1rem'}}>Are you ready to get fit?</h4>
            <button>Get Started</button>
        </div>
        <div className='right'>
            <img  alt='fitness' src={Fitness}/>
            <div className='rectangle rectangle-1'>
                <p className='num num-1'>38:14</p>
                <p className='text'>TIME</p>
            </div>
            <div className='rectangle rectangle-2'>
                <p className='num num-2'>165</p>
                <p className='text'>EST CALORIES</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
