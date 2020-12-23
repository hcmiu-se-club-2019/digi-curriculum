module.exports = (sequelize,DataTypes) => {
  return sequelize.define('AssessmentTool',{
    assessment_id:{
      type: DataTypes.INTEGER,
      references:{
        model: "assessment",
        id: "id",
      }
    },
    loutcome_id:{
      type: DataTypes.INTEGER,
      references:{
        model: "learning_outcome",
        id: 'id',
      },
    }
  },{
    timestamps: false,
    tableName: "assessment_tool",
  })
}
