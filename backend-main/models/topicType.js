module.exports = (sequelize,DataTypes) => {
  return sequelize.define("TopicType",{
    type: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },{
    timestamps: false,
    tableName: "topic_type",
  })
}
