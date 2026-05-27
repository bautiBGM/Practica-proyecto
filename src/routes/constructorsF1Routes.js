import {Router} from "express" 
import ConstructorController from "../controllers/ConstructorController.js"

const constructorsF1Controller = new ConstructorController()
const f1Routes = Router()

f1Routes.get("/constructors", constructorsF1Controller.getConstructors)
f1Routes.post("/sync-constructors", constructorsF1Controller.syncConstructors)
f1Routes.get("/consturctors-db", constructorsF1Controller.getConstructorsFromDB)
f1Routes.get("/constructor/:id", constructorsF1Controller.getConstructorsById )
