module.exports = (sequelize,DataTypes) => {
  return sequelize.define("Topic",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true, 
      defaultValue: null
    },
    name: {
      type: DataTypes.STRING(510),
      allowNull: true,
    },
    teaching_activities:{
      type: DataTypes.STRING,
      defaultValue: 'none'
    },
    learning_activities:{
      type: DataTypes.STRING,
    },
  },{
    timestamps: false,
    tableName: "topic",
  })
}
