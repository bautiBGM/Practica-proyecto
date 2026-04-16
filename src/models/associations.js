import User from "./User.js"
import Driver from "./Driver.js"
import Constructor from "./Constructor.js"
import ChooseTeam from "./ChooseTeam.js"

// relaciones

ChooseTeam.belongsTo(User, { foreignKey: "userId" })

ChooseTeam.belongsTo(Driver, { as: "pilot1", foreignKey: "pilot1Id" })
ChooseTeam.belongsTo(Driver, { as: "pilot2", foreignKey: "pilot2Id" })

ChooseTeam.belongsTo(Constructor, { as: "constructor", foreignKey: "constructorId" })

export {
    User,
    Driver,
    Constructor,
    ChooseTeam
}