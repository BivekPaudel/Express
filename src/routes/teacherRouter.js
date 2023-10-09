import { Router } from "express";
import { createTeacher, deleteTeacher, readAllTeacher, readById, updateTeacher } from "../Controller/teacherController.js";

let teacherRouter=Router()

teacherRouter
.route("/")
.post(createTeacher)
.get(readAllTeacher)
teacherRouter
.route("/:id")
.get(readById)
.patch(updateTeacher)
.delete(deleteTeacher)        
    
  

export default teacherRouter