import F1Service from "../services/F1Service.js"
import ConstructorService from "../services/ConstructorService.js"

const f1service = new F1Service()
const constructorService = new ConstructorService()
class ConstructorController{

    getConstructorsById = async (req,res) => {
        try{
            const {id} = req.params
            const constructor = await constructorService.getConstructorById(id)
            res.status(200).send({
                success: true,
                message: constructor.name
            })
        }catch(error){
            res.status(400).send({
                success: false,
                message:error.message
            })
        }
    }


    
    getConstructorsFromDB = async (req,res) => {
        try{
            const constructors = await f1service.getConstructors()
            res.json(constructors)
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Error al obtener constuctores'})
        }
    }
    
    
}

export default ConstructorController


// syncConstructors = async (req,res) => {
//     try{
//         const constructorsFromApi = await f1service.getConstructors()
//         const result = await constructorService.syncConstructors(constructorsFromApi)
        
//         res.status(200).json({
//             message: "Constructores sincronizados correctamente",
//             result
//         })
//     }catch(error){
//         console.error(error);
//         res.status(500).json({ error: 'Error al sincronizar los constructores'})
        
//     }
// }