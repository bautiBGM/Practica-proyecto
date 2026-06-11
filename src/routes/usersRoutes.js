import {Router} from "express" 
import UserController from "../controllers/UserController.js"
import validateUser from "../middlewares/validateUser.js"

const userController = new UserController()
const usersRoutes = Router()


usersRoutes.get("/", userController.getAllUsers)
usersRoutes.get("/:id", userController.getUserById)

usersRoutes.post("/login", userController.login)
usersRoutes.post("/register",validateUser, userController.createUser)

usersRoutes.put("/:id", userController.updateUser) 

usersRoutes.delete("/:id", userController.deleteUser)




export default usersRoutes