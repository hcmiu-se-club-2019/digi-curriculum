module.exports = (sequelize,DataTypes) => {
  return sequelize.define("CourseLevel",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 1
    }
  },{
    timestamps: false,
    tableName: 'course_level',
  })
}
