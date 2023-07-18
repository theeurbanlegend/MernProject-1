import React from 'react'
import { formatDistanceToNow } from 'date-fns';

const Workouts = ({workout,handleClick}) => {
    

  return (
    <div className='workout-details'>
        <h4>Title:{workout.title}</h4>
        <p><strong>Load:</strong>{workout.load}</p>
        <p><strong>Reps:</strong>{workout.reps}</p>
        {/* <p><strong>Date Created:</strong>{workout.createdAt}</p> */}
        <p><strong>Created:</strong>{formatDistanceToNow(new Date(workout.createdAt))} ago</p>
        <i onClick={handleClick} className="fa-solid fa-trash-can"></i>
   </div>
    
  )
}

export default Workouts