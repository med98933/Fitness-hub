import React, {useState} from 'react'
import './mainPage.css'
import BuildMuscle from './buildMuscle.js'
import PowerBuilding from './PowerBuilding'
import KeyTerms from './KeyTerms'

const MainPage = () => {
    const [active, setActive] = useState("")
  return (
    
    <div className='dashboard-section'>
        <div className='dashboard-container'>
            <nav>
                <button onClick={() => setActive('buildMuscle')}>Build Muscle</button>
                <button onClick={() => setActive('loseWeight')}>Lose Weight</button>
                <button onClick={() => setActive('powerBuilding')}>Increase Strength</button>
            </nav>
            
        </div>
        <div>
           {active === 'buildMuscle' && <BuildMuscle/>}
           {/*  {active === 'loseWeight' && <LoseWaight/>}*/ }
           {active === 'powerBuilding' && <PowerBuilding/>} 

        </div>
        {active === 'buildMuscle' && <KeyTerms/>}
        {active === 'loseWeight' && <KeyTerms/>}
        {active === 'powerBuilding' && <KeyTerms/>}
        
    </div>
    
  )
}

export default MainPage
