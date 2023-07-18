const express=require('express')
const router=express.Router()
const {getWorkout,getWorkouts,addWorkout,updateWorkout,removeWorkout}=require('../controllers/workouts')

router.get('/:id',getWorkout)
router.get('/',getWorkouts)
router.post('/add',addWorkout)
router.delete('/remove/:id',removeWorkout)
router.patch('/update/:id',updateWorkout)
module.exports=router
