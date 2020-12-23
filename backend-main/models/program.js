module.exports = (sequelize,DataTypes) => {
  return sequelize.define("Program",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    discipline: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    major: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    version:{
      type: DataTypes.STRING(4),
      allowNull: true,
    }
  },{
    timestamps: false,
    tableName: "program",
  })
}
