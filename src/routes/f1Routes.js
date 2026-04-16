import {Router} from "express" 
import F1Controller from "../controllers/F1Controller.js"

const f1Controller = new F1Controller()
const f1Routes = Router()

f1Routes.get("/drivers", f1Controller.getDrivers)

export default f1Routes