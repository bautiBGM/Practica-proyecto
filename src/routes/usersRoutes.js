import {Router} from "express" 
import {getAllUsers, getAllUserById}  from "../controllers/UserController.js"

const usersRoutes = Router()

usersRoutes.get("/", getAllUsers)

usersRoutes.get("/:id", getAllUserById)

usersRoutes.post("/", (req,res)=>{
    res.status(200).send({status: true, message:""})
})

usersRoutes.put("/:id", (req,res)=>{
    res.status(200).send({status: true, message:""})
})

usersRoutes.delete("/:id", (req,res)=>{
    res.status(200).send({status: true, message:""})
})



export default usersRoutes