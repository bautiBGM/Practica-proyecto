import UserService  from "../services/UserService.js"


class UserController {

userService = new UserService()

getAllUsers =async(req,res)=>{
    try {
            const user = await this.userService.getAllUsers()

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

createUser = async(req,res)=>{
try {
    const {name,mail,pass} = req.body
    const user = await this.userService.createUser({name,mail,pass})
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


deleteUser = async (req,res)=>{
    try {
        const {id} = req.params
        const user = await this.userService.deleteUser({id})
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