import { Schema } from "mongoose";

let teacherSchema=Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    isMarried:{
        type:Boolean,
        required:true
    },

    subject:{
        type:String,
        required:true
    }
    
})
export default teacherSchema