import Team from "../models/Team.js"
import Driver from "../models/Driver.js"
import Constructor from "../models/Constructor.js"



class TeamService {

    createTeam = async (userId) => {
        const team = await Team.create({
            userId
        })

        return team
    }

    getTeamByUser = async (userId) => {

        const team = await Team.findOne({
            where: { userId },
            include: [
                { model: Driver, as: "pilot1" },
                { model: Driver, as: "pilot2" },
                { model: Constructor, as: "equipo"}
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
    if(data.pilot1Id){

        const piloto = await Driver.findByPk(data.pilot1Id)

        if(team.budget < piloto.price){
            throw new Error("presupuesto insuficiente")
        }

        data.budget = team.budget - piloto.price
    }

    // Quitar piloto 1
    if(data.pilot1Id === null && team.pilot1Id){

        const piloto = await Driver.findByPk(team.pilot1Id)

        data.budget = team.budget + piloto.price
    }

    if(data.pilot2Id){

    const piloto = await Driver.findByPk(data.pilot2Id)

    if(team.budget < piloto.price){

        throw new Error("presupuesto insuficiente")
    }

    data.budget = team.budget - piloto.price
    }

    // Quitar piloto 2
    if(data.pilot2Id === null && team.pilot2Id){

        const piloto = await Driver.findByPk(team.pilot2Id)

        data.budget = team.budget + piloto.price
    }

    if(data.constructorId){

    const constructor = await Constructor.findByPk(data.constructorId)

    if(team.budget < constructor.price){

        throw new Error("presupuesto insuficiente")
    }

    data.budget = team.budget - constructor.price
    }

    // Quitar constructor 
    if(data.constructorId === null && team.constructorId){

        const constructor = await Constructor.findByPk(team.constructorId)

        data.budget = team.budget + constructor.price
    }

    await team.update(data)

    return team
}
}

export default TeamService