import { Product } from "../Schema/model.js"

export let createProduct=async(req,res)=>{
    let data=req.body
    try {
        let result=await Product.create(data)
    res.json({
        success:true,
        message:"Product created Successfully",
        data:result
    })
    } catch (error) {
        res.json({
            success:false,
            message:error.message

        })
    }
}
export let readAllProduct=async(req,res)=>{
    try {
        let result=await Product.find({})
        res.json({
            success:true,
            message:"Product read successfully",
            data:result
        })
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
    let result=await Product.findById(id)
    res.json({
        
        success:true,
        message:"Product read successfully",
        data:result

    })
   } catch (error) {
    res.json({
        success:false,
    message:error.message
    })
   }
}
export let updateProduct=async(req,res)=>{
    let id=req.params.id
    let data=req.body
    try {
        let result=await Product.findByIdAndUpdate(id,data,{new:true})
    res.json({
        success:true,
        message:"Product updated successfully",
        data:result
    })
    } catch (error) {
        res.json({
            success:false,
        message:error.message
        })
    }

}
export let deleteProduct=async(req,res)=>{
    let id =req.params.id
   try {
    let result= await Product.findByIdAndDelete(id)
    res.json({
        success:true,
        message:"Product deleted successfully",
        data:result
    })
   } catch (error) {
    res.json({
        success:false,
    message:error.message
    })
   }
}

