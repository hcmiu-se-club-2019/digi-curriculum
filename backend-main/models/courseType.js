module.exports = (sequelize,DataTypes) => {
  return sequelize.define("CourseType",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },{
    timestamps: false,
    tableName: "course_type",
  })
}
