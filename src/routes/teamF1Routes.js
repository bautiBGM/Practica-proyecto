import {Router} from "express"
import TeamController from "../controllers/TeamController.js"

const teamController = new TeamController()
const teamF1Routes = new Router()


teamF1Routes.get("/:userId", teamController.getTeamByUser)
teamF1Routes.put("/:userId", teamController.updateTeam)

export default teamF1Routes