const Table = require("../sequelize");
module.exports = {
  getAllPrograms: async (req,res) => {
    try{
      const programs = await Table.Program.findAll({});
      return res.status(200).json({listProgram: programs})
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      });
    }
  },
  createProgram: async (req,res) => {
    try{
      const program = await Table.Program.findByPk(req.body.id);
      
      // Program have already existed
      if (program){
        return res.status(200).json({error: "Program has already existed"})
      }else{
        const newProgram = await Table.Program.create(req.body);
        return res.status(200).json({createdProgram: newProgram});
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  updateProgram: async (req,res) => {
    try{
      const {id} = req.params;
      const updatedProgram = await Table.Program.update(req.body,{where:{id}})
      return res.status(200).json({isUpdated: updatedProgram[0]})
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  },
  deleteProgram: async (req,res) => {
    try{
      const {id} = req.params;
      const program = Table.Program.findByPk(id);
      if( program ){
        // Remove all dependency
        
        // Delete program
        const deletedProgram = await Table.Program.destroy({where: {id}});
        return res.status(200).json({isDeleted: deletedProgram})
      }else{
        return res.status(200).json({
          error: false,
          message: "Program has already deleted"
        })
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  getAvailableCourses: async (req,res) => {
    try{
      const {id} = req.params;
      const program = await Table.Program.findByPk(id);
      if(program){
        const courses = await program.getCourses();
        return res.status(200).json({courses})
      }else{
        return res.status(200).json({error: false, message: `ProgramID-${id} hasn't existed`});
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  assignCourse: async (req,res) => {
    try{
      const {id} = req.params;
      const {courseId,typeId = 1} = req.query;
      const program = await Table.Program.findByPk(id);
      const course = await Table.Course.findByPk(courseId);
      if (!program) return res.status(200).json({error: false,message: `ProgramID-${id} hasn't existed`})
      if (!course) return res.status(200).json({error: false,message: `CourseID-${courseId} hasn't existed`})
      const isAssigned = await program.hasCourse(course);
      if (!isAssigned){
        const assignedCourse = await Table.CourseProgram.create({
          course_type_id: typeId,
          course_id: courseId,
          program_id: id
        })
        return res.status(200).json({assignedCourse});
      }else{
        return res.status(200).json({error: false,message: `CourseID-${courseId} has already been in Program-${program.discipline}`})
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  },
  deleteCourse: async (req,res) => {
    try{
      const {id,courseId} = req.params;
      const program = await Table.Program.findByPk(id);
      const course = await Table.Course.findByPk(courseId);
      if (!program) return res.status(200).json({error: false,message: `ProgramID-${id} hasn't existed`})
      if (!course) return res.status(200).json({error: false,message: `CourseID-${courseId} hasn't existed`})
      const isAssigned = await program.hasCourse(course);
      if (isAssigned){
        await program.removeCourse(course);
        return res.status(200).json({isDeleted: 1})
      }else{
        return res.status(200).json({error: false, message: `ProgramID-${id} don't have any CourseID-${courseId}`})
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  updateCourse: async (req,res) => {
    try{
      const {id,courseId} = req.params;
      const program = await Table.Program.findByPk(id);
      const course = await Table.Course.findByPk(courseId);
      if (!program) return res.status(200).json({error: false, message: `ProgramID-${id} hasn't existed`});
      if (!course) return res.status(200).json({error: false, message: `CourseID-${courseId} hasn't existed`});
      const isAssigned = await program.hasCourse(course);
      if (isAssigned){
        const updatedCourse = await Table.CourseProgram.update(req.body,{
          where: {
            program_id: id,
            course_id: courseId,
          }
        })
        return res.status(200).json({isUpdated: updatedCourse[0]})
      }else{
        return res.status(200).json({error: false,message: `CourseID-${id} hasn't been in Program-${program.discipline}`})
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
}
