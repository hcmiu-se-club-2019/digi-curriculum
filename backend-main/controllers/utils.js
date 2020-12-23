const Table = require('../sequelize');
module.exports = {
  getAllCourseRelationships: async (req,res) => {
    try{
      const relationships = await Table.CourseRelationship.findAll({});
      return res.status(200).json({relationships})
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  getAllCourseTypes : async (req,res) => {
    try{
      const types = await Table.CourseType.findAll({});
      return res.status(200).json({types})
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  }
}
