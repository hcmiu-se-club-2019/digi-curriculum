module.exports = (sequelize,DataTypes) => {
  return sequelize.define("CourseRelationship",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },{
    tableName: "course_relationship",
    timestamps: false
  })
}
