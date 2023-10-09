import { Schema } from "mongoose"


let productSchema= Schema({
name:{
    type:String,
    require:true
},
price:{
    type:Number,
    require:true
},
quantity:{
type:Number,
require:true
}
})
export default productSchema