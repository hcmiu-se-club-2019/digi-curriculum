module.exports = (sequelize,DataTypes) => {
  return sequelize.define("Pathway",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    pathway:{
      type: DataTypes.STRING,
    },
  },{
    timestamps: false,
    tableName: "pathway",
  })
}
