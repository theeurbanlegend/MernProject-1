import React from 'react'
import Workouts from '../components/Workouts'
import WorkoutForm from '../components/WorkoutForm'
import useWorkoutsContext from '../hooks/useWorkoutsContext'
import { toast } from 'react-toastify'
import axios  from 'axios'

const Home = () => {
  const {workouts,dispatch}=useWorkoutsContext()
    React.useEffect(()=>{
        const fetchWorkouts=async ()=>{
        const response=await fetch('http://localhost:8080/api/workouts')
        const json=await response.json()
        
        if(response.ok){
            dispatch({type:'SHOW_WORKOUTS',payload:json})
          }
        }
        fetchWorkouts()
    },[])
    const deleteWorkout=async(id)=>{
      try{
        const {data}=await axios.delete(`http://localhost:8080/api/workouts/remove/${id}`)
        toast.success(data.status)
        dispatch({type:'REMOVE_WORKOUT',payload:data.workout})
      }
      catch(error){
        const Error=error.response.data.error
        toast.error(Error)
      }
      
    }
    console.log(workouts)
  return (
 
    <div className='home'>
      <div className='workouts'> 
        {workouts && workouts.length!==0 ? (workouts.map((one)=>{
            return <Workouts key={one._id} workout={one} handleClick={()=>{deleteWorkout(one._id)}}/>
            
        })):(<><p>No Workouts Found!</p><p>Please add a workout using the form</p></>)}
        
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home