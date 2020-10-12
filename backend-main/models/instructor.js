module.exports = (sequelize,DataTypes) => {
  return sequelize.define("Instructor",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    degree: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },{
    timestamps: false,
    tableName: "instructor",
  })
}
