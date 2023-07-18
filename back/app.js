const express=require('express')
require('dotenv').config()
const app=express()
const cors=require('cors')
const workoutRoutes=require('./routes/workouts')
const mongoose=require('mongoose')

app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connection to database successful!")
})
.catch(err=>{
    console.log(err)
})


app.use('/api/workouts',workoutRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`Server is functional and running on port ${process.env.PORT}`)
})

