import F1Service from '../services/f1Service.js'
import DriverService from '../services/DriverService.js'



const f1Service = new F1Service()
const driverService = new DriverService()

class DriverF1Controller {
    // trae todos los pilotos de la base de datos
    getDrivers = async (req, res) => {
        try {
            const drivers = await driverService.getAllDrivers()
            res.json(drivers)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Error al obtener pilotos' })
        }
    }

    getDriverById = async (req, res) => {
        try{
            const data = req.body
            const driver = await driverService.getDriverById(data.driver)
            res.status(200).send({
                success: true,
                message: driver
            })
        }catch(error){
            res.status(400).send({
                success: false,
                message: error.message
            })
        }
    }
    // trae los pilotos desde la api 
    // getDriversFromApi = async (req, res) => {
    //     try {
    //         const drivers = await f1Service.getDrivers()
    //         res.json(drivers)
    //     } catch (error) {
    //         console.error(error)
    //         res.status(500).json({ error: 'Error al obtener pilotos' })
    //     }
    // }
    // guarda los pilotos en la base de datos
    // syncDrivers = async (req, res) => {
    //     try {
    //         const driversFromApi = await f1Service.getDrivers()

    //         const result = await driverService.syncDrivers(driversFromApi)

    //         res.status(200).json({
    //             message: "Pilotos sincronizados correctamente",
    //             result
    //         })
    //     } catch (error) {
    //         console.error(error)
    //         res.status(500).json({ error: error.message })
    //     }
    // }
}
export default DriverF1Controller