import Team from "../models/Team.js"
import Driver from "../models/Driver.js"
import Constructor from "../models/Constructor.js"



// console.log("TEAM:", Team)
// console.log("DRIVER:", Driver)
// console.log("CONSTRUCTOR:", Constructor)

class TeamService {

    createTeam = async (userId) => {
        const team = await Team.create({
            userId
        })

        return team
    }

    getTeamByUser = async (userId) => {

        console.log(Constructor)
        const team = await Team.findOne({
            where: { userId },
            include: [
                { model: Driver, as: "pilot1" },
                { model: Driver, as: "pilot2" },
                { model: Constructor}
            ]
        })

        if(!team){
            throw new Error("equipo no encontrado")
        }

        return team
    }

updateTeam = async (userId, data) => {
    console.log("DATA:", data)

    const team = await Team.findOne({
        where: { userId }
    })

    if(!team){
        throw new Error("equipo no encontrado")
    }

    await team.update(data)

    return team
}
}

export default TeamService