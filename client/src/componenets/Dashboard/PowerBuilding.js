import React, {useState} from 'react'
import Sweek1 from '../Workout/strength/Sweek1'
import Sweek2 from '../Workout/strength/Sweek2'
import Sweek3 from '../Workout/strength/Sweek3'
import Sweek4 from '../Workout/strength/Sweek4'
import Sweek5 from '../Workout/strength/Sweek5'
import Sweek6 from '../Workout/strength/Sweek6'
import Sweek7 from '../Workout/strength/Sweek7'
import Sweek8 from '../Workout/strength/Sweek8'


const PowerBuilding = () => {
    const [week, setWeek] = useState("week-1")
    return (
      <div>
        <div className='workout-container'>
          <button onClick={() => setWeek("week-1")}>Week 1</button>
          <button onClick={() => setWeek("week-2")}>Week 2</button>
          <button onClick={() => setWeek("week-3")}>Week 3</button>
          <button onClick={() => setWeek("week-4")}>Week 4</button>
          <button onClick={() => setWeek("week-5")}>Week 5</button>
          <button onClick={() => setWeek("week-6")}>Week 6</button>
          <button onClick={() => setWeek("week-7")}>Week 7</button>
          <button onClick={() => setWeek("week-8")}>Week 8</button>
  
          {week === "week-1" && <Sweek1 />}
          {week === "week-2" && <Sweek2 />}
          {week === "week-3" && <Sweek3 />}
          {week === "week-4" && <Sweek4 />}
          {week === "week-5" && <Sweek5 />}
          {week === "week-6" && <Sweek6 />}
          {week === "week-7" && <Sweek7 />}
          {week === "week-8" && <Sweek8 />}
  
        </div>       
      </div>
    )
}

export default PowerBuilding
