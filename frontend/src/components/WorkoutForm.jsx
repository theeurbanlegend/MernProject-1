import React from 'react'
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useWorkoutsContext from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
  const {dispatch}=useWorkoutsContext()
 const [title,setTitle]=React.useState('')
 const [load,setLoad]=React.useState('')
 const [reps,setReps]=React.useState('')
 const [Error,setError]=React.useState(null) 
 const handleSubmit=async(e)=>{
    e.preventDefault()
    const workout={title,load,reps}
try{
    const {data}=await axios.post('http://localhost:8080/api/workouts/add',workout)
    toast.success(data.status)
    setTitle('')
    setLoad('')
    setReps('')
    setError('')
    dispatch({type:'ADD_WORKOUT',payload:data.workout})
    }
catch (error) {
    setError(error.response.data.Error);
   toast.error(Error);
  }
 }

  return (
    <div>
    <form className='form' onSubmit={handleSubmit}>
        <label>Exercise:</label>
        <input
        type="text"
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}/>
        <label>Load(In Kg):</label>
        <input
        type='number'
        value={load}
        onChange={(e)=>{setLoad(e.target.value)}}/>
        <label>Repetitions:</label>
        <input
        type='number'
        value={reps}
        onChange={(e)=>{setReps(e.target.value)}}/>
        <button type='Submit'>Add Workout</button>
    </form>
    <ToastContainer/>
    </div>
  )
}

export default WorkoutForm