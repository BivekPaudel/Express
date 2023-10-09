import { Router } from "express";

let vehiclesRouter=Router()

vehiclesRouter
.route("/")
.post((req,res)=>{
    console.log(req.body)
    res.json({success:true,message:"vehicles create successfully",data:req.body,query:req.query})})
.get((req,res)=>{res.json({success:true,message:"vehicles read successfully"})})
.patch((req,res)=>{
    console.log(req.query)
    
    res.json({success:true,message:"vehicles updated successfully successfully",data:req.body})})
.delete((req,res)=>{res.json({success:true,message:"vehicles deleted successfully"})})

export default vehiclesRouter