import UserService  from "../services/UserService.js"


class UserController {

userService = new UserService()

getAllUsers =(req,res)=>{
    try {
            const user = this.userService.getAllUsers()

            res.status(200).send({
            success: true,
            message: user
        })

    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message
        })
    }
}


}

export default UserController