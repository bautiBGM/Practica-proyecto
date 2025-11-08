
const users =[
    {
        id:1,
        name:"bauti"
    },
    {
        id:2,
        name:"manu"
    }
]
export const getAllUsers =(req,res)=>{
    res.status(200).send(users)
}


export const getAllUserById =(req,res)=>{
    const {id}= req.params
    const user = users.find(u => u.id == id)
    res.status(200).send(user)
}

class UserController {
    
}