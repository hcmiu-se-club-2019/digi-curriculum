module.exports = (sequelize,DataTypes) => {
  return sequelize.define("Deparment",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },{
    timestamps: false,
    tableName: "department"
  })
}
