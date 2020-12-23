const Table = require('../sequelize');
module.exports = {
  getAllInstructors: async (req,res) => {
    try{
      const instructors = await Table.Instructor.findAll({});
      return res.status(200).json({instructors})
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }

  },
  getInstructorById: async (req,res) => {
    try{
      const {id} = req.params;
      const instructor = await Table.Instructor.findByPk(id);
      if (instructor){
        return res.status(200).json({instructor})
      }else{
        return res.status(200).json({error: false, message: `InstructorID-${id} hasn't existed`})
      }
    }catch(error){
      console.log(err);
      return res.status(500).json({error: true,message: error})
    }
  },
  createInstructor: async (req,res) => {
    try{
      const instructor = await Table.Instructor.findByPk(req.body.id);
      if (instructor){
        return res.status(200).json({
          error: false,
          message: "InstructorID has already existed"
        })
      }else{
        const newInstructor = await Table.Instructor.create(req.body);
        return res.status(200).json({createdInstructor: newInstructor});
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }

  },
  updateInstructor: async (req,res) => {
    try{
      const {id} = req.params;
      const updatedInstructor = await Table.Instructor.update(req.body,{where:{id}});
      return res.status(200).json({isUpdated: updatedInstructor[0]});
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        messsage: error
      })
    }

  },
  deleteInstructor: async (req,res) => {
    try{
      const {id} = req.params;
      const instructor = await Table.Instructor.findByPk(id);
      if (!instructor){
        return res.status(200).json({
          error: false,
          message: "Instructor has already deleted"
        })
      }else{
        const deletedInstructor = await Table.Instructor.destroy({where: {id}});
        return res.status(200).json({isDeleted: deletedInstructor})
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }

  }
}
