// import Tournament from "../models/Tournament.js";

// class TournamentService {

//     createTournament = async(data) => {

//         const tournament = await Tournament.create({
//             name: data.name,
//             description: data.description,
//             userId: data.userId
//         });

//         return tournament;
//     }

//     getAllTournaments = async() => {

//         const tournaments = await Tournament.findAll();

//         return tournaments;
//     }

//     getTournamentById = async(id) => {

//         const tournament = await Tournament.findByPk(id);

//         if(!tournament){
//             throw new Error("torneo no encontrado");
//         }

//         return tournament;
//     }

//     updateTournament = async(id,data) => {

//         const tournament = await Tournament.findByPk(id);

//         if(!tournament){
//             throw new Error("torneo no encontrado");
//         }

//         await tournament.update(data);

//         return tournament;
//     }

//     deleteTournament = async(id) => {

//         const tournament = await Tournament.findByPk(id);

//         if(!tournament){
//             throw new Error("torneo no encontrado");
//         }

//         await tournament.destroy();

//         return "torneo eliminado";
//     }
// }

// export default TournamentService;