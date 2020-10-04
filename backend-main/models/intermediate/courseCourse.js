module.exports = (sequelize,DataTypes) => {
  return sequelize.define("CourseCourse",{
  },{
    timestamps: false,
    tableName: "course_course_relationship",
  })
}
