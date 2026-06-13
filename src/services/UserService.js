import User from "../models/User.js"

class UserService{


getUserById = async (id) => {
    const user = await User.findByPk(id)
    return{name: user.name, mail: user.mail} 
}

createUser = async(data) =>{
    const {id,name,mail} = await User.create(data)
    return {id,name,mail}
}

updateUser= async (data) => {
    const user = await User.findByPk(data.id)
    if (!user){
    throw new Error(`usuario no encontrado`)
    }
    
    await user.update(data)
    return user
        
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

getAllUsers =async()=>{
    const users = await User.findAll({
        attributes: ["name", "mail", "pass", ]
    })
    return users
}

login = async ({ mail, pass }) => {
    const user = await User.findOne({
    where: { mail },
    attributes: ["id","name","mail","pass","profile_pic"],
    });
    if (!user) throw new Error("user not found");

    
    if (user.pass !== pass) {
    throw new Error("Invalid password");
}
return {
    id: user.id,
    name: user.name,
    mail: user.mail,
    profile_pic: user.profile_pic

}

//     const validatePassword= await user.validatePassword(pass);
//     if (!validatePassword) throw new Error("invalid password");
//     return {validatePassword};
}
}

export default UserService