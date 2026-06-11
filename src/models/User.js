import {DataTypes,Model} from "sequelize"
import connection from "../db/connection.js"
import bcrypt from "bcrypt"
class User extends Model {
    // validatePassword = async (pass) => {
    // return await bcrypt.compare(pass, this.pass);
    // }       
}

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
    },
profile_pic: {
    type: DataTypes.STRING,
    allowNull: true
}
},{
    sequelize: connection,
    modelName: "User"
})

export default User