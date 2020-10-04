module.exports = (sequelize,DataTypes) => {
  return sequelize.define("TopicDetail",{
    week:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    topic_detail:{
      type: DataTypes.STRING(1000),
    }
  },{
    timestamps: false,
    tableName: "topic_detail",
  })
}
