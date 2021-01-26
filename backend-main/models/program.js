module.exports = (sequelize,DataTypes) => {
  return sequelize.define("Program",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
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
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    major_id: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },{
    timestamps: false,
    tableName: "program",
  })
}
