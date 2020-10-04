module.exports = (sequelize,DataTypes) => {
  return sequelize.define("CoursePathway",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    semester: {
      type: DataTypes.INTEGER,
    },
    year: {
      type: DataTypes.INTEGER,
    },
  },{
    timestamps: false,
    tableName: "course_pathway",
  })
}
