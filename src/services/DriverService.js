import Driver from "../models/Driver.js"

class DriverService {


    getAllDrivers = async () => {
        const drivers = await Driver.findAll()
        return drivers
    }

    getDriverById = async (id) => {
        const driver = await Driver.findByPk(id)
        return driver
    }


    //funcion para traerme los pilotos de la api
    //y guardarlos en la base con el precio de cada piloto

    // syncDrivers = async (driversFromApi) => {
    //     let createdCount = 0
    //     let existingCount = 0
    //     const driversPrices = {
    //         Verstappen: 30,
    //         Norris: 28,
    //         Leclerc: 27,
    //         Piastri: 26,
    //         Hamilton: 25,
    //         Russell: 24,

    //         Alonso: 21,
    //         Sainz: 21,
    //         Albon: 19,
    //         Gasly: 18,

    //         Tsunoda: 17,
    //         Ocon: 17,
    //         Hulkenberg: 16,
    //         Stroll: 15,

    //         Bearman: 14,
    //         Lawson: 14,
    //         Antonelli: 14,

    //         Doohan: 12,
    //         Bortoleto: 12,
    //         Hadjar: 12,
    //         Colapinto: 12
    //     }
        
    //     for (const driver of driversFromApi) {
    //         const [driverSaved, created] = await Driver.findOrCreate({
    //             where: { driverId: driver.driverId },
    //             defaults: {
    //                 driverId: driver.driverId,
    //                 givenName: driver.givenName,
    //                 familyName: driver.familyName,
    //                 code: driver.code || null,
    //                 nationality: driver.nationality || null,
    //                 dateOfBirth: driver.dateOfBirth || null,
    //                 price: driversPrices[driver.familyName] || 10
    //             }
    //         })
    //         if (created) {
    //             createdCount++
    //         } else {
    //             existingCount++
    //         }
    //     }

    //     return {
    //         created: createdCount,
    //         existing: existingCount
    //     }
    // }

}

export default DriverService

