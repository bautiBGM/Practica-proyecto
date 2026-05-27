import {DataTypes,Model} from "sequelize"
import connection from "../db/connection.js"

class Team extends Model{}

Team.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    budget: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50
    },
    totalCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    totalPoints: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
},{
    sequelize: connection,
    modelName: "Team"
})

export default Team