
import { Router } from "express";
import { Book } from "../Schema/model.js";
// import { Book } from "../Schema/model.js";

let bookRouter=Router()

bookRouter
.route("/")
.post(async(req,res)=>{
    let data=req.body
    try {
        let result=await Book.create(data)
    console.log(req.body)
    res.json({success:true,message:"book create successfully",data:result})
    
    
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    })
.get(async(req,res)=>{
    try {
        // let result=await Book.find({})
        let result=await Book.find({name:"nitan"})

        /*  
    Find({age:{$gt:20}})
	Find ({age:{$gte:20}})
	Find({age:{$lt:20}})
	Find({age:{$lte:20}})
	Find({age:{$ne:20}})
	Find({age:{$in:[26,27,22]})

    find({
        $and:[
            {name:"nitan"},
            {age:27}
        ]
    })

    find({
        $and:[
        {age:{$gte:25},
        {age:{$lte:30}}
        ]
    })

    find({
        $or:[
            {age:29},
            {age:22}
        ]
    })
    find({
        $or:[
            {name:{$in:["nitan","sandeep"]}},
            {age:{$in:[22,16]}}

        ]
    })

    

        */
        res.json({success:true,message:"book read successfully",data:result})
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
    
    })
bookRouter
.route("/:id")
.get(async(req,res)=>{
    let id=req.params.id
   try {
    let result=await Book.findById(id)
    res.json({
        success:true,
        message:"book read successfully",
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
        
    let result=await Book.findByIdAndUpdate(id,data,{new:true})
    res.json({
        success:true,
        message:"Book updated successfully",
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
                let result=await Book.findByIdAndDelete(id)
                res.json({success:true,message:"book deleted successfully",data:result})
                
            } catch (error) {
                res.json({
                    success:false,
                    message:error.message
                })
            }
            
            })        
    
  

export default bookRouter