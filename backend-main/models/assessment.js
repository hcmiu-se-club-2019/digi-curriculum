module.exports = (sequelize,DataTypes) => {
  return sequelize.define("Assessment",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      defaultValue: null
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
