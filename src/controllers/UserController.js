import UserService  from "../services/UserService.js"


class UserController {

userService = new UserService()

getUserById = async (req,res) => {
    try{
        const data = req.body
        const user = await this.userService.getUserById(data.id)
        res.status(200).send({
            success: true,
            message: user
        })
    }catch(error){
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
    user
    })

} catch (error) {
    res.status(400).send({
    success: false,
    message: error.message
    })
}
}

updateUser = async(req,res)=>{
try {
    const {id} = req.params
    const {name,mail,pass,profile_pic} = req.body
    const user = await this.userService.updateUser({id,name,mail,pass,profile_pic})
    res.status(200).send({
    success: true,
    user
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
        const {id} = req.body
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

login= async (req, res) => {
    try {
        const {mail, pass} = req.body;
        const user = await this.userService.login({mail, pass});
        res.status(200).send({ success: true, user });
    } catch (error) {
        res.status(400).send({ success: false, message: error.message });
    }
}

}


export default UserController