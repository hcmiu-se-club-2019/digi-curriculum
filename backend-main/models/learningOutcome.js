module.exports = (sequelize,DataTypes) => {
  return sequelize.define("LearningOutcome",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    description:{
      type: DataTypes.TEXT,
    },
  },{
    timestamps: false,
    tableName: "learning_outcome",
  })
}
