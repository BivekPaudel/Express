import express, { json } from "express"
import firstRouter from "./src/routes/firstRouter.js"
import schoolRouter from "./src/routes/schoolRoutes.js"
import vehiclesRouter from "./src/routes/vehiclesRouter.js"
import connectToMongoDb from "./src/connectMongodb.js"
import teacherRouter from "./src/routes/teacherRouter.js"
import studentRouter from "./src/routes/studentRouter.js"
import departmentRouter from "./src/routes/departmentRouter.js"
import detailRouter from "./src/routes/detailRouter.js"
import collegeRouter from "./src/routes/collegeRouter.js"
import classRoomRouter from "./src/routes/classRoomRouter.js"
import bookRouter from "./src/routes/bookRouter.js"
import { sendMail } from "./src/utils/sendmail.js"
import bcrypt from "bcrypt";
import userRouter from "./src/routes/userRouter.js"
import productRouter from "./src/routes/productRouter.js"
import reviewRouter from "./src/routes/reviewRouter.js"
import fileRouter from "./src/routes/file.js"

let expressApp=express()
expressApp.use(json())
let port=8000

/* 
expressApp.use((req,res,next)=>{
    console.log("hello")
next("abc")
})
expressApp.use((err,req,res,next)=>{
    console.log("hello")
next()
})
*/
expressApp.use(express.static("./public"))// making a folder static
expressApp.use("/a",firstRouter)
expressApp.use("/schools",schoolRouter)
expressApp.use("/vehicles",vehiclesRouter)
expressApp.use("/teachers",teacherRouter)
expressApp.use("/students",studentRouter)
expressApp.use("/departments",departmentRouter)
expressApp.use("/details",detailRouter)
expressApp.use("/colleges",collegeRouter)
expressApp.use("/classRooms",classRoomRouter)
expressApp.use("/books",bookRouter)
expressApp.use("/users",userRouter)
expressApp.use("/products",productRouter)
expressApp.use("/reviews",reviewRouter)
expressApp.use("/files",fileRouter)




expressApp.listen(port,()=>{
    console.log(`application is connected at port ${port} successfully`)
})
connectToMongoDb()

// try {
// await sendMail({
//     from:'"Hari" <vivekpoudel799@gmail.com>',
//     to:["vivekpoudel799@gmail.com"
    

// ],
//     subject:"this is subject",
//     html:`<h1>Hello World<h1>`
    

// })
// console.log("email sent successfully")
// } catch (error) {
// console.log(error.message)
    
// }

// hashing password
// let hashPassword= await bcrypt.hash("password@123",10)
// console.log(hashPassword)

// let hashDatabsePassword="$2b$10$HcUGdhVkfVQKK58BuQYvaekMEbtftSesjCyYJH8.16yERclrgfGxm";
// let isPasswordMatched= await bcrypt.compare("password@123",hashDatabsePassword)
// console.log(isPasswordMatched)




/* 
schema
model 
controller
router
index
*/