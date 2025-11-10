import User from "../models/User.js"

class UserService{

getAllUsers =async(req,res)=>{
    const users = await User.findAll({
        attributes: ["name", "mail"]
    })
    return users
}

createUser = async(data) =>{
    const {id,name} = await User.create(data)
    return {id,name}
}
}

export default UserService