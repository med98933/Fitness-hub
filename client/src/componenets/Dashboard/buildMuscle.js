import React, {useState} from 'react'
import Mweek1 from '../Workout/muscleBuilding/Mweek1'
import Mweek2 from '../Workout/muscleBuilding/Mweek2'
import Mweek3 from '../Workout/muscleBuilding/Mweek3'
import Mweek4 from '../Workout/muscleBuilding/Mweek4'
import Mweek5 from '../Workout/muscleBuilding/Mweek5'
import Mweek6 from '../Workout/muscleBuilding/Mweek6'
import Mweek7 from '../Workout/muscleBuilding/Mweek7'
import Mweek8 from '../Workout/muscleBuilding/Mweek8'

const BuildMuscle = () => {
    const [week, setWeek] = useState("week 1")
  return (
    <div>
      <div className='workout-container'>
        <button onClick={() => setWeek("week 1")}>Week 1</button>
        <button onClick={() => setWeek("week 2")}>Week 2</button>
        <button onClick={() => setWeek("week 3")}>Week 3</button>
        <button onClick={() => setWeek("week 4")}>Week 4</button>
        <button onClick={() => setWeek("week 5")}>Week 5</button>
        <button onClick={() => setWeek("week 6")}>Week 6</button>
        <button onClick={() => setWeek("week 7")}>Week 7</button>
        <button onClick={() => setWeek("week 8")}>Week 8</button>

        {week === "week 1" && <Mweek1 />}
        {week === "week 2" && <Mweek2 />}
        {week === "week 3" && <Mweek3 />}
        {week === "week 4" && <Mweek4 />}
        {week === "week 5" && <Mweek5 />}
        {week === "week 6" && <Mweek6 />}
        {week === "week 7" && <Mweek7 />}
        {week === "week 8" && <Mweek8 />}

      </div>       
    </div>
  )
}

export default BuildMuscle;
