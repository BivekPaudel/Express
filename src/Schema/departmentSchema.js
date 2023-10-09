import { Schema } from "mongoose";

let departmentSchema=Schema({
    name:{
        type:String,
        required:true
    },
   hod:{
    type:String,
    required:true
   },
   totalmember:{
    type:Number,
    required:true
   }
    
})
export default departmentSchema