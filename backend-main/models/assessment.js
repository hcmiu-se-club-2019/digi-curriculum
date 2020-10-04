module.exports = (sequelize,DataTypes) => {
  return sequelize.define("Assessment",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },{
    timestamps: false,
    tableName: "assessment"
  })
}
