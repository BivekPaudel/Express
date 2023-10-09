import { Schema } from "mongoose";

let classRoom=Schema({
    name:{
        type:String,
        required:true
    },
   numberOfBench:{
    type:Number,
    required:true
   },
   hasTv:{
    type:Boolean,
    required:true
   }
    
})
export default classRoom