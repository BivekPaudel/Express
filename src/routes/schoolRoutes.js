import { Router } from "express";

let schoolRouter=Router()

schoolRouter
.route("/")
.post((req,res,next)=>{
    console.log("I am middleware 1")
next()
},(req,res,next)=>{
    console.log("I am middleware 2")
next()
},(req,res,next)=>{
    console.log("I am middleware 3")
    
})
.get((req,res)=>{res.json({success:true,message:"school read successfully"})})
.patch((req,res)=>{res.json({success:true,message:"school updated successfully successfully"})})
.delete((req,res)=>{res.json({success:true,message:"school deleted successfully"})})


/* middleware
it is a function which has req,res,next

controller (it is the middelware used at last)//


types of middleware based on error

normal middleware

define(req,res,next)=>{}
to trigger normal middleware next()


error middleware
define (err,req,res,next)=>{}
to trigger error middleware next(value)
 */

/* 
middleware is divided into two part based ion its location
route level middleware
application middleware
*/






export default schoolRouter