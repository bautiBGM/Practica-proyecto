import Constructor from "../models/Constructor.js"


class constructorService{

    
    getAllConstructors = async () => {
        const constructors = await Constructor.findAll()
        return constructors
    }
    
    getConstructorById = async (id) =>{ 
        const constructor = await Constructor.findByPk(id)
        
        if(!constructor){
            throw new Error(`constructor ${id} no encontrado`)
        }
        return constructor
    }
}

export default constructorService
// async syncConstructors(constructorsFromApi) {
//     let createdCount = 0;
//     let existingCount = 0;

//     const constructorsPrices = {
//         McLaren: 30,
//         Ferrari: 29,
//         Mercedes: 28,
//         "Red Bull": 27,

//         Williams: 20,
//         Alpine: 19,
//         RacingBulls: 18,
//         Haas: 17,

//         AstonMartin: 16,
//         KickSauber: 15
//     };

//     for (const constructor of constructorsFromApi) {
//         const [constructorSaved, created] = await Constructor.findOrCreate({
//             where: {
//                 constructorId: constructor.constructorId
//             },
//             defaults: {
//                 constructorId: constructor.constructorId,
//                 name: constructor.name,
//                 nationality: constructor.nationality || null,
//                 price: constructorsPrices[constructor.constructorId] || 10
//             }
//         });

//         if (created) {
//             createdCount++;
//         } else {
//             existingCount++;
//         }
//     }

//     return {
//         createdCount,
//         existingCount
//     };
// }