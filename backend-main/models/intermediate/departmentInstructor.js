module.exports = (sequelize,DataTypes) => {
  return sequelize.define("DepartmentInstuctor",{
  },{
    timestamps: false,
    tableName: "department_instructor",
  })
}
