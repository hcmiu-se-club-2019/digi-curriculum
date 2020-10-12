module.exports = (sequelize,DataTypes) => {
  return sequelize.define("CourseInstructor",{
  },{
    timestamps: false,
    tableName: "course_instructor",
  })
}
