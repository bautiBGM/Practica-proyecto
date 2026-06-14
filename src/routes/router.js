import {Router} from "express"
import usersRoutes from "./usersRoutes.js"
import rolesRoutes from "./rolesRoutes.js"
import driversF1Routes from "./driversF1Routes.js"
import constructorsF1Routes from "./constructorsF1Routes.js"
import teamF1Routes from "./teamF1Routes.js"

const router = Router()

router.use("/users",usersRoutes)
router.use("/team", teamF1Routes)
router.use("/drivers", driversF1Routes)
router.use("/constructors", constructorsF1Routes)

export default router;



