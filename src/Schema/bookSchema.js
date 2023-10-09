import { Schema } from "mongoose";

let bookSchema=Schema({
    name:{
        type:String,
        required:true
    },
   author:{
    type:String,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   isAvailabel:{
    type:Boolean,
    required:true
   }
    
})
export default bookSchema