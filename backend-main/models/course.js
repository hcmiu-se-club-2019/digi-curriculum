module.exports = (sequelize,DataTypes) => {
  return sequelize.define("Course",{
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name_vn: {
      type: DataTypes.STRING,
      default: ""
    },
    credit_theory:{
      type: DataTypes.INTEGER,
      default: 3,
      
    },
    credit_lab:{
      type: DataTypes.INTEGER,
      default: 1,
    },
    description: {
      type: DataTypes.TEXT,
      default: ""
    },
    course_level_id:{
      type: DataTypes.INTEGER,
      defaultValue: 1,
    }
  },{
    timestamps: false,
    tableName: "course",
  })
}
