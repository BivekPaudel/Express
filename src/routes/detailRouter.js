

import { Router } from "express"
import { Detail } from "../Schema/model.js"

let detailRouter=Router()

detailRouter
.route("/")
.post(async(req,res)=>{
    let data=req.body
    try {
        let result=await Detail.create(data)
    res.json({success:true,message:"detail create successfully",data:result})
    
    
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    })
.get(async(req,res)=>{
    try {
        let result=await Detail.find({})
        res.json({success:true,message:"detail read successfully",data:result})
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    
    })
detailRouter
.route("/:id")
.get(async(req,res)=>{
    let id=req.params.id
   try {
    let result=await Detail.findById(id)
    res.json({
        success:true,
        message:"detail read successfully",
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
        
    let result=await Detail.findByIdAndUpdate(id,data,{new:true})
    res.json({
        success:true,
        message:"Detail updated successfully",
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
                let result=await Detail.findByIdAndDelete(id)
                res.json({success:true,message:"detail deleted successfully",data:result})
                
            } catch (error) {
                res.json({
                    success:false,
                    message:error.message
                })
            }
            
            })        
    
  

export default detailRouter