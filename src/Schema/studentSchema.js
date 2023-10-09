import { Schema } from "mongoose";

let studentSchema=Schema({
    name:{
        type:String,
        required:true
    },
   class:{
    type:Number,
    required:true
   },
   faculty:{
    type:String,
    required:true
   }
    
})
export default studentSchema