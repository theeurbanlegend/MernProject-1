import React from 'react'
import { WorkoutsContext } from '../context/workoutContext'
const useWorkoutsContext = () => {
  const context=React.useContext(WorkoutsContext)
  
  if(!context){
    throw Error("useWorkoutContext must be used inside a WorkoutContextProvider")
  }
  return context
}
export default useWorkoutsContext