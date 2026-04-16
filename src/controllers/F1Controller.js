import F1Service from '../services/f1Service.js'
import DriverService from '../services/DriverService.js'



const f1Service = new F1Service()
const driverService = new DriverService()

class F1Controller {
    // trae todos los pilotos de la base de datos
    getDriversFromDB = async (req, res) => {
        try {
            const drivers = await driversService.getAllDrivers()
            res.json(drivers)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Error al obtener pilotos' })
        }
    }
    // trae los pilotos desde la api 
    getDrivers = async (req, res) => {
        try {
            const drivers = await f1Service.getDrivers()
            res.json(drivers)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Error al obtener pilotos' })
        }
    }
    // guarda los pilotos en la base de datos
    syncDrivers = async (req, res) => {
        try {
            const driversFromApi = await f1Service.getDrivers()

            const result = await driverService.syncDrivers(driversFromApi)

            res.status(200).json({
                message: "Pilotos sincronizados correctamente",
                result
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: error.message })
        }
    }
}
export default F1Controller