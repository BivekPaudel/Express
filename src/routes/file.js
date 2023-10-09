import { Router } from "express";
import upload from "../middleware/uploadFile.js";

let fileRouter=Router()

let uploadDocument=(req,res)=>{
    console.log(req.files)

    let allLinks=req.files.map((value,i)=>{
        let link=`localhost:8000/${value.filename}`
        return link

    })
    res.json({
        success:true,
        message:"image uploaded successfully",
        data:allLinks
    })

}

fileRouter
.route("/multiple")
.post(upload.array("Document"),uploadDocument)
export default fileRouter