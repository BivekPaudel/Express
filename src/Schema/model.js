import { model } from "mongoose";
import detailSchema from "./detailSchema.js";
import teacherSchema from "./teacherSchema.js";
import studentSchema from "./studentSchema.js";
import bookSchema from "./bookSchema.js";
import collegeSchema from "./collegeSchema.js";
import classRoom from "./classRoom.js";
import departmentSchema from "./departmentSchema.js";
import userSchema from "./userSchema.js";
import productSchema from "./productSchema.js";
import reviewSchema from "./reviewSchema.js";


export let Detail=model("Detail",detailSchema)
export let Teacher=model("Teacher",teacherSchema)
export let Student=model("Student",studentSchema)
export let Book=model("Book",bookSchema)
export let College=model("College",collegeSchema)
export let Class=model("Class",classRoom)
export let Department=model("Department",departmentSchema)
export let ClassRoom=model("ClassRoom",classRoom)
export let User=model("User",userSchema)
export let Product=model("Product",productSchema)
export let Review=model("Review",reviewSchema)

