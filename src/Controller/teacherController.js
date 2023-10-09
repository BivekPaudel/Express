import { Teacher } from "../Schema/model.js"

export let createTeacher= async(req,res)=>{
    let data=req.body
    try {
        let result=await Teacher.create(data)
    // console.log(req.body)
    res.json({success:true,message:"teacher create successfully",data:result})
    
    
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    }

export let readAllTeacher = async(req,res)=>{
    try {
        let result=await Teacher.find({})
        res.json({success:true,message:"teacher read successfully",data:result})
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    
    }
    export let readById=async(req,res)=>{
        let id=req.params.id
       try {
        let result=await Teacher.findById(id)
        res.json({
            success:true,
            message:"teacher read successfully",
            data:result
        }) 
       } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
        
       }
        }
         export let updateTeacher=async(req,res)=>{
            let id=req.params.id
            let data=req.body
            try {
                
            let result=await Teacher.findByIdAndUpdate(id,data,{new:true})
            res.json({
                success:true,
                message:"Teacher updated successfully",
                data:result
            })
            } catch (error) {
                res.json({ 
                    success:false,
                    message:error.message
                })
               
                
            }
            
                }
                export let deleteTeacher=async(req,res)=>{
                    let id=req.params.id
                    try {
                        let result=await Teacher.findByIdAndDelete(id)
                        res.json({success:true,message:"teacher deleted successfully",data:result})
                        
                    } catch (error) {
                        res.json({
                            success:false,
                            message:error.message
                        })
                    }
                    
                    }