import {Router} from "express"

const router = Router()

router.get("/",(re,res)=>{
    res.status(200).send({status: true, message:"get desde el enrutador"})
})

export default router;

