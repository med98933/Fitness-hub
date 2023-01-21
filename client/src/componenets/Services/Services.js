import React from 'react'
import './Services.css'
import {IoMdFitness} from 'react-icons/io'
import { AiOutlineProject } from 'react-icons/ai'
import { MdOutlineFoodBank } from 'react-icons/md'
import { GiStrongMan } from 'react-icons/gi'

const Services = () => {
  return (
    <section className='ourServices'>
      <div className='services-container'>
        <h1>Our Services</h1>

        <div className='services'>
            <div className='service'>
                <IoMdFitness className='services-icon'/>
                <h3>Exercises</h3>
                <p>Discover our list of fitness and bodybuilding exercises and add them to your customized program</p>
            </div>
            <div className='service'>
                <AiOutlineProject className='services-icon'/>
                <h3>Programs</h3>
                <p>Start your fitness journey with free workout programs & daily schedules </p>
            </div>
            <div className='service'>
                <MdOutlineFoodBank className='services-icon'/>
                <h3>Meal plans</h3>
                <p>Meal planning is a great way to ensure that you and your family maintain healthy eating habits.</p>
            </div>
            <div className='service'>
                <GiStrongMan className='services-icon'/>
                <h3>Personal training</h3>
                <p>A personal trainer can give you the tools and pesonalized workout plans that you need to reach a health and fitness goal</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services
