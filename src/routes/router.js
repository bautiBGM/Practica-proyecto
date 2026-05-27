import {Router} from "express"
import usersRoutes from "./usersRoutes.js"
import rolesRoutes from "./rolesRoutes.js"
import driversF1Routes from "./driversF1Routes.js"

const router = Router()

router.use("/users",usersRoutes)
router.use("/roles",rolesRoutes)
router.use("/api/f1", driversF1Routes)

export default router;



