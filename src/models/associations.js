import User from "./User.js"
import Driver from "./Driver.js"
import Constructor from "./Constructor.js"
import Team from "./Team.js"

// relaciones

User.hasOne(Team, { foreignKey: "userId" })
Team.belongsTo(User, { foreignKey: "userId"})

Team.belongsTo(Driver, { as: "pilot1", foreignKey: "pilot1Id" })
Team.belongsTo(Driver, { as: "pilot2", foreignKey: "pilot2Id" })

Team.belongsTo(Constructor, {
    as: "equipo",
    foreignKey: "constructorId"
})
export {
    User,
    Driver,
    Constructor,
    Team
}