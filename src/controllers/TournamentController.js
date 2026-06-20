// import TournamentService from "../services/TournamentService.js";

// class TournamentController {

//     constructor(){
//         this.tournamentService = new TournamentService();
//     }

//     createTournament = async(req,res) => {

//         try {

//             const tournament = await this.tournamentService.createTournament(req.body);

//             res.status(201).send({
//                 success: true,
//                 tournament
//             });

//         } catch(error){

//             res.status(400).send({
//                 success: false,
//                 message: error.message
//             });
//         }
//     }

//     getAllTournaments = async(req,res) => {

//         try {

//             const tournaments = await this.tournamentService.getAllTournaments();

//             res.status(200).send({
//                 success: true,
//                 tournaments
//             });

//         } catch(error){

//             res.status(400).send({
//                 success: false,
//                 message: error.message
//             });
//         }
//     }

//     getTournamentById = async(req,res) => {

//         try {

//             const { id } = req.params;

//             const tournament =
//                 await this.tournamentService.getTournamentById(id);

//             res.status(200).send({
//                 success: true,
//                 tournament
//             });

//         } catch(error){

//             res.status(400).send({
//                 success: false,
//                 message: error.message
//             });
//         }
//     }

//     updateTournament = async(req,res) => {

//         try {

//             const { id } = req.params;

//             const tournament =
//                 await this.tournamentService.updateTournament(id, req.body);

//             res.status(200).send({
//                 success: true,
//                 tournament
//             });

//         } catch(error){

//             res.status(400).send({
//                 success: false,
//                 message: error.message
//             });
//         }
//     }

//     deleteTournament = async(req,res) => {

//         try {

//             const { id } = req.params;

//             const message =
//                 await this.tournamentService.deleteTournament(id);

//             res.status(200).send({
//                 success: true,
//                 message
//             });

//         } catch(error){

//             res.status(400).send({
//                 success: false,
//                 message: error.message
//             });
//         }
//     }
// }

// export default TournamentController;