import Driver from "../models/Driver.js"

class DriverService {
    syncDrivers = async (driversFromApi) => {
        let createdCount = 0
        let existingCount = 0
        for (const driver of driversFromApi) {
            const [driverSaved, created] = await Driver.findOrCreate({
                where: { driverId: driver.driverId },
                defaults: {
                    driverId: driver.driverId,
                    givenName: driver.givenName,
                    familyName: driver.familyName,
                    code: driver.code || null,
                    nationality: driver.nationality || null,
                    dateOfBirth: driver.dateOfBirth || null
                }
            })
            if (created) {
                createdCount++
            } else {
                existingCount++
            }
        }

        return {
            created: createdCount,
            existing: existingCount
        }
    }

    getAllDrivers = async () => {
        const drivers = await Driver.findAll()
        return drivers
    }
}

export default DriverService

