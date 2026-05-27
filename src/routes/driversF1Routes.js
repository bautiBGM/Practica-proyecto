import {Router} from "express" 
import DriverF1Controller from "../controllers/DriverF1Controller.js"

const f1Controller = new DriverF1Controller()
const f1Routes = Router()

f1Routes.get("/drivers", f1Controller.getDrivers)
f1Routes.post("/sync-drivers", f1Controller.syncDrivers)
f1Routes.get("/drivers-db", f1Controller.getDriversFromDB)

export default f1Routes