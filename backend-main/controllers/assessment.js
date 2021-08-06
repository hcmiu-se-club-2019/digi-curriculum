const Table = require('../sequelize');
module.exports = {
  getAllAssessment: async (req,res) => {
    try{
      const assessments = await Table.Assessment.findAll({});
      return res.status(200).json({assessments})
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  createAssessment: async (req,res) => {
    try{
      console.log(req.body);
      const {id} = req.body;
      const assessment = await Table.Assessment.findByPk(id);
      if (assessment){
        return res.status(200).json({
          error: false,
          message: "Assessment has already existed"
        })
      }else{
        const newAssessment = await Table.Assessment.create(req.body);
        return res.status(200).json({createdAssessment: newAssessment})
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  deleteAssessment: async (req,res) => {
    try{
      const {id} = req.params;
      const assessment = await Table.Assessment.findByPk(id);
      if (assessment){
        const deletedAssessment = await Table.Assessment.destroy({where:{id}});
        return res.status(200).json({isDeleted: deletedAssessment});
      }else{
        return res.status(200).json({
          error: false,
          message: "Assessment has already deleted"
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  }
}
