import {Router} from "express"
import usersRoutes from "./usersRoutes.js"
import rolesRoutes from "./rolesRoutes.js"
import f1Routes from "./f1Routes.js"

const router = Router()

router.use("/users",usersRoutes)
router.use("/roles",rolesRoutes)
router.use("/api/f1", f1Routes)

export default router;



