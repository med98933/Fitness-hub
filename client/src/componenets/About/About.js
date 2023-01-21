import React from 'react'
import './About.css'
import abdalla from '../../images/abdalla.jpg'
import hicham from '../../images/hichamm.png'
import ahmed from '../../images/ahmed.jpeg'

const About = () => {
  return (
    <section className='about-section' id='About'>
        <div className='about-container'>
            <h1>About us</h1>
            <p>Fitness Hub is the best place to learn how to get fit and stay in shape, Our specialists are very prepared to furnish you with shape-centered alterations that will push you as far as possible without bargaining your security.</p>
            <h2>Meet Our Trainers</h2>
            <div className='trainers'>
            <div className='trainer'>
              <img src={abdalla} alt='abdalla'/>
              <h5>Abdalla Bn Mansour</h5>
              <p>Powerlifting trainer and Athlete</p>
            </div>
            <div className='trainer'>
              <img src={hicham} alt='hicham'/>
              <h5>Hicham Sayah</h5>
              <p>BodyBuilding trainer</p>
            </div>
            <div className='trainer'>
              <img src={ahmed} alt='ahmed'/>
              <h5>Ahmed Zitouni</h5>
              <p>Personal trainer</p>
            </div>
            
            </div>
            
        </div>

    </section>
  )
}

export default About
