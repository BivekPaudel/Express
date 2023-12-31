import { Router } from "express"
import { Department } from "../Schema/model.js"


let departmentRouter=Router()

departmentRouter
.route("/")
.post(async(req,res)=>{
    let data=req.body
    try {
        let result=await Department.create(data)
    console.log(req.body)
    res.json({success:true,message:"department create successfully",data:result})
    
    
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    })
.get(async(req,res)=>{
    try {
        let result=await Department.find({})
        res.json({success:true,message:"department read successfully",data:result})
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    
    })
departmentRouter
.route("/:id")
.get(async(req,res)=>{
    let id=req.params.id
   try {
    let result=await Department.findById(id)
    res.json({
        success:true,
        message:"department read successfully",
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
        
    let result=await Department.findByIdAndUpdate(id,data,{new:true})
    res.json({
        success:true,
        message:"Department updated successfully",
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
                let result=await Department.findByIdAndDelete(id)
                res.json({success:true,message:"department deleted successfully",data:result})
                
            } catch (error) {
                res.json({
                    success:false,
                    message:error.message
                })
            }
            
            })        
    
  

export default departmentRouter