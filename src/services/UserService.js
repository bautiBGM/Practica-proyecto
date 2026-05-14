import User from "../models/User.js"

class UserService{

getAllUsers =async()=>{
    const users = await User.findAll({
        attributes: ["name", "mail"]
    })
    return users
}

createUser = async(data) =>{
    const {id,name} = await User.create(data)
    return {id,name}
}

updateUser= async (data) => {
    const user = await User.findByPk(data.id)
    if (!user){
    throw new Error(`usuario ${user.name} no encontrado`)
    }
    
    await user.update(data)
    return `usuario: ${data.id} actualizado`
        
} 

deleteUser = async(data) =>{
    const user = await User.findByPk(data.id)

    // const deleted = await User.destroy({where: {id: data.id}})

    if(!user){
        throw new Error(`usuario ${data.id} NO ENCONTRADO`)
        
    }

    await  user.destroy()
    return `usuario: ${user.name} eliminado`
}
}

export default UserService