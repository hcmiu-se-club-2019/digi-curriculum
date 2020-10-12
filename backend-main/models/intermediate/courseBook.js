module.exports = (sequelize,DataTypes) => {
  return sequelize.define("CourseBook",{
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },{
    timestamps: false,
    tableName: 'course_book',
  })
}
