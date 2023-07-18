const mongoose=require('mongoose')
const Workouts=require('../models/workouts')

const getWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error:"No such workout found"
        })
    }
    const workout= await Workouts.findById(id)
    if (!workout){
        return res.status(404).json({
            Error:"Workout not found"
        })
    }
    return res.status(200).json({
        status:"Found",
        workout:workout
    })
}
const getWorkouts=async(req,res)=>{
    const workout=await Workouts.find({}).sort({createdAt:-1})
    res.status(200).json(workout)
}
const addWorkout=async(req,res)=>{
    const {title,load,reps}=req.body
    
    try{
        if(!title||!load||!reps){
            return res.status(400).json({
                Error:"None of the fields can be left empty"
            })
        }
        
        const workout=await Workouts.create({title,load,reps})

        return res.status(201).json({
            status:"Added workout successfully",
            workout:workout})
    }
    catch(error){
        return res.status(400).json({
            Error:"Add unsuccessful"
        })
    }
}
const updateWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({
            error:"No such workout found"
        })
    }
    const workout= await Workouts.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if (!workout){
        res.status(404).json({
            Error:"Workout not found"
        })
    }
    res.status(200).json({
        status:"Updated successfully",
        workout:workout
    })
}
const removeWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error:"No such workout found"
        })
    }
    const workout= await Workouts.findByIdAndDelete({_id:id})
    if (!workout){
        return res.status(404).json({
            error:"Workout not found"
        })
    }
    return res.status(200).json({
        status:"Deleted successfully",
        workout:workout
    })
}


module.exports={
    getWorkouts,
    getWorkout,
    addWorkout,
    removeWorkout,
    updateWorkout
}