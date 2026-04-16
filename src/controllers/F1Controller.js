import F1Service from '../services/f1Service.js'

const f1Service = new F1Service()

class F1Controller {
    getDrivers = async (req, res) => {
        try {
            const drivers = await f1Service.getDrivers()
            res.json(drivers)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Error al obtener pilotos' })
        }
    }
}

export default F1Controller