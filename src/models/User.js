import {DataTypes,Model} from "sequelize"
import connection from "../db/connection.js"

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[a-z]+$/i, 
        }
    },
    mail: {
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isEmail: true
        }
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
        }
    }
},{
    sequelize: connection,
    modelName: "User"
})

export default User