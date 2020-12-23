module.exports = (sequelize,DataTypes) => {
  return sequelize.define("CourseProgram",{
    course_code:{
      type: DataTypes.STRING,
    },
    course_type_id:{
      type: DataTypes.INTEGER,
      references:{
        model: "course_type",
        id: "id"
      }
    }
  },{
    timestamps: false,
    tableName: "course_program",
  })
}
