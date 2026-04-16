
class F1Service{
    getDrivers = async () => {
        const response = await fetch('https://api.jolpi.ca/ergast/f1/2026/drivers.json')

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
        }

        const data = await response.json()
        
        return data.MRData.DriverTable.Drivers
    }
}


export default F1Service


