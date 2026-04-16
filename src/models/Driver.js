import {DataTypes,Model} from "sequelize"
import connection from "../db/connection.js"

class Driver extends Model{}

Driver.init({
     id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    driverId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    givenName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    familyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dateOfBirth: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

export default Driver