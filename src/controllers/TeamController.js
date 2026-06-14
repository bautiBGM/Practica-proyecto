import TeamService from "../services/TeamService.js"

const teamService = new TeamService()

class TeamController {

    getTeamByUser = async (req,res) => {
        try {

            const { userId } = req.params

            const team = await teamService.getTeamByUser(userId)

            res.status(200).send({
                success: true,
                team
            })

        } catch (error) {

            res.status(400).send({
                success: false,
                message: error.message
            })
        }
    }

    updateTeam = async (req,res) => {
        try {

            const { userId } = req.params

            const team = await teamService.updateTeam(userId,req.body)

            res.status(200).send({
                success: true,
                team
            })

        } catch (error) {

            res.status(400).send({
                success: false,
                message: error.message
            })
        }
    }
}

export default TeamController