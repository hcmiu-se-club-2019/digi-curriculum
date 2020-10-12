module.exports = (sequelize,DataTypes) => {
  return sequelize.define("CourseDepartment",{
  },{
    timestamps: false,
    tableName: "course_department",
  })
}
