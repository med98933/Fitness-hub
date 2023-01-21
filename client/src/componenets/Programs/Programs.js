import React from 'react'
import './Programs.css'
import yellow from '../../images/yellow.png'
import homeWorkout from '../../images/homeWorkout.jpg'
import muscleBuilding from '../../images/muscleBuilding.jpg'
import strength from '../../images/strength.jpg'

const Programs = () => {
  return (
    <section className='programs' id='Programs'>
        <div className='programs-container'>
            <div className='programs-grid'>
                <div className='left'>
                    <h1>Workout Program Made For You</h1>
                    <img src={yellow} alt='yellow'/>
                </div>
                <div className='right'>
                    <h4>EFFECTIVE PROGRAMS THAT GET RESULTS</h4> 
                    <p>Whether you're a beginner who's starting your workout journey, you have a good physique but you need hard challenges or you only want to lose some weight, you can find a program to jump-start your routine.</p>
                    <button> Get Started</button>
                </div>
                
            </div>
            <h3>Popular Programs</h3>
            <div className='programs-examples'>
                <div className='prog'>
                    <img src={homeWorkout} alt='home workout'/>
                    <h5>Home workout</h5>
                </div>
                <div className='prog'>
                    <img src={muscleBuilding} alt='muscle building'/>
                    <h5>Muscle Building</h5>
                </div>
                <div className='prog'>
                    <img src={strength} alt='strength training'/>
                    <h5>Strength Training</h5>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Programs
