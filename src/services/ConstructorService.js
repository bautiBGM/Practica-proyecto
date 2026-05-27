import Constructor from "../models/Constructor.js"


class constructorService{

    syncConstructors  = () => {

    }

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