module.exports = (sequelize,DataTypes) => {
  return sequelize.define("Book",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
      defautlValue: null
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    version:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    publisher:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    ISBN:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    type:{
      type: DataTypes.STRING,
      allowNull: true,
      defautlValue: "reference",
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },{
    timestamps: false,
    tableName: "book"
  })
}
