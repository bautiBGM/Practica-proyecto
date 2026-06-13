import {Router} from "express" 
import DriverF1Controller from "../controllers/DriverF1Controller.js"

const driverF1Controller = new DriverF1Controller()
const f1Routes = Router()

f1Routes.get("/drivers", driverF1Controller.getDrivers)
f1Routes.get("/driver/:id", driverF1Controller.getDriverById)
// f1Routes.post("/sync-drivers", driverF1Controller.syncDrivers)
// f1Routes.get("/drivers-api", f1Controller.getDriversFromApi)

export default f1Routes