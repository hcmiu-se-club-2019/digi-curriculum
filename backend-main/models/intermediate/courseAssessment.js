module.exports = (sequelize,DataTypes) => {
  return sequelize.define("CourseAssessment",{
    percentage: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },{
    timestamps: false,
    tableName: "course_assessment"
  })
}
