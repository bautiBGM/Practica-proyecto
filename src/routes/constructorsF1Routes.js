import {Router} from "express" 
import ConstructorController from "../controllers/ConstructorController.js"

const constructorsF1Controller = new ConstructorController()
const constructorF1Routes = Router()


constructorF1Routes.get("/", constructorsF1Controller.getConstructorsFromDB)
constructorF1Routes.get("/:id", constructorsF1Controller.getConstructorsById )



export default constructorF1Routes

// constructorF1Routes.post("/sync-constructors", constructorsF1Controller.syncConstructors)
//https://api.jolpi.ca/ergast/f1/2026/driverstandings.json
//https://api.jolpi.ca/ergast/f1/2026/results.json

