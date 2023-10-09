
import { Router } from "express";
import { College } from "../Schema/model.js";
// import { College } from "../Schema/model.js";

let collegeRouter=Router()

collegeRouter
.route("/")
.post(async(req,res)=>{
    let data=req.body
    try {
        let result=await College.create(data)
    console.log(req.body)
    res.json({success:true,message:"college create successfully",data:result})
    
    
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    })
.get(async(req,res)=>{
    try {
        let result=await College.find({})
        res.json({success:true,message:"college read successfully",data:result})
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    
    })
collegeRouter
.route("/:id")
.get(async(req,res)=>{
    let id=req.params.id
   try {
    let result=await College.findById(id)
    res.json({
        success:true,
        message:"college read successfully",
        data:result
    }) 
   } catch (error) {
    res.json({
        success:false,
        message:error.message
    })
    
   }
    })
.patch(async(req,res)=>{
    let id=req.params.id
    let data=req.body
    try {
        
    let result=await College.findByIdAndUpdate(id,data,{new:true})
    res.json({
        success:true,
        message:"College updated successfully",
        data:result
    })
    } catch (error) {
        res.json({ 
            success:false,
            message:error.message
        })
       
        
    }
    
        })
        .delete(async(req,res)=>{
            let id=req.params.id
            try {
                let result=await College.findByIdAndDelete(id)
                res.json({success:true,message:"college deleted successfully",data:result})
                
            } catch (error) {
                res.json({
                    success:false,
                    message:error.message
                })
            }
            
            })        
    
  

export default collegeRouter