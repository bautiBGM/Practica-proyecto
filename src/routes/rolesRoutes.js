import {Router} from "express"
import morgan from "morgan"

const rolesRoutes = Router()

rolesRoutes.use(morgan('tiny'))

rolesRoutes.get("/", (req,res)=>{
    res.status(200).send({status: true, message:"get all users"})
})

rolesRoutes.get("/:id", (req,res)=>{
    res.status(200).send({status: true, message:""})
})

rolesRoutes.post("/", (req,res)=>{
    res.status(200).send({status: true, message:""})
})

rolesRoutes.put("/:id", (req,res)=>{
    res.status(200).send({status: true, message:""})
})

rolesRoutes.delete("/:id", (req,res)=>{
    res.status(200).send({status: true, message:""})
})


export default rolesRoutes
