import { Schema } from "mongoose"


let reviewSchema=Schema({
    userId:{
        type:Schema.ObjectId,
        ref:"User",
        required:true
    },
    productId:{
        type:Schema.ObjectId,
        ref:"Product",
        required:true
    },
    description:{
        type:String,
        required:true
    }
    
})
export default reviewSchema