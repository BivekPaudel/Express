
import { Router } from "express";
import { ClassRoom } from "../Schema/model.js";
// import { ClassRoom } from "../Schema/model.js";

let classRoomRouter=Router()

classRoomRouter
.route("/")
.post(async(req,res)=>{
    let data=req.body
    try {
        let result=await ClassRoom.create(data)
    console.log(req.body)
    res.json({success:true,message:"classRoom create successfully",data:result})
    
    
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    })
.get(async(req,res)=>{
    try {
        let result=await ClassRoom.find({})
        res.json({success:true,message:"classRoom read successfully",data:result})
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    
    })
classRoomRouter
.route("/:id")
.get(async(req,res)=>{
    let id=req.params.id
   try {
    let result=await ClassRoom.findById(id)
    res.json({
        success:true,
        message:"classRoom read successfully",
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
        
    let result=await ClassRoom.findByIdAndUpdate(id,data,{new:true})
    res.json({
        success:true,
        message:"ClassRoom updated successfully",
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
                let result=await ClassRoom.findByIdAndDelete(id)
                res.json({success:true,message:"classRoom deleted successfully",data:result})
                
            } catch (error) {
                res.json({
                    success:false,
                    message:error.message
                })
            }
            
            })        
    
  

export default classRoomRouter