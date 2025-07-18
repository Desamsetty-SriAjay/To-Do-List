import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    task:{type:String,required:true},
    isCompleted:{type:Boolean,default:false},
},{timestamps:true});

const toDoModel=mongoose.model("Task",todoSchema);
export default toDoModel;