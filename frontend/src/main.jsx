import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WorkoutContextProvider } from './context/workoutContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <WorkoutContextProvider>
    <App/>
  </WorkoutContextProvider>
  
)
