const Table = require('../sequelize')
module.exports = {
  getSyllabus: async (req,res) => {
    try{
      const {programId} = req.params;
      const {pathwayId = 1} = req.query
      const program = await Table.Program.findByPk(programId);
      if (program){
        const year1_sem1 = await Table.CourseProgramPathway.findAll({
          where: {
            year: 1,
            semester: 1,
            program_id: programId,
            pathway_id: pathwayId
          },
          include: {
            model: Table.Course
          }
        })
        const year1_sem2 = await Table.CourseProgramPathway.findAll({
          where: {
            year: 1,
            semester: 2,
            program_id: programId,
            pathway_id: pathwayId
          },
          include: {
            model: Table.Course
          }
        })
        const year1_sem3 = await Table.CourseProgramPathway.findAll({
          where: {
            year: 1,
            semester: 3,
            program_id: programId,
            pathway_id: pathwayId
          },
          include: {
            model: Table.Course
          }
        })
        const year2_sem1 = await Table.CourseProgramPathway.findAll({
          where: {
            year: 2,
            semester: 1,
            program_id: programId,
            pathway_id: pathwayId
          },
          include: {
            model: Table.Course
          }
        })
        const year2_sem2 = await Table.CourseProgramPathway.findAll({
          where: {
            year: 2,
            semester: 2,
            program_id: programId,
            pathway_id: pathwayId
          },
          include: {
            model: Table.Course
          }
        })
        const year2_sem3 = await Table.CourseProgramPathway.findAll({
          where: {
            year: 2,
            semester: 3,
            program_id: programId,
            pathway_id: pathwayId
          },
          include: {
            model: Table.Course
          }
        })
        const year3_sem1 = await Table.CourseProgramPathway.findAll({
          where: {
            year: 3,
            semester: 1,
            program_id: programId,
            pathway_id: pathwayId
          },
          include: {
            model: Table.Course
          }
        })
        const year3_sem2 = await Table.CourseProgramPathway.findAll({
          where: {
            year: 3,
            semester: 2,
            program_id: programId,
            pathway_id: pathwayId
          },
          include: {
            model: Table.Course
          }
        })
        const year3_sem3 = await Table.CourseProgramPathway.findAll({
          where: {
            year: 3,
            semester: 3,
            program_id: programId,
            pathway_id: pathwayId
          },
          include: {
            model: Table.Course
          }
        })
        const year4_sem1 = await Table.CourseProgramPathway.findAll({
          where: {
            year: 4,
            semester: 1,
            program_id: programId,
            pathway_id: pathwayId
          },
          include: {
            model: Table.Course
          }
        })
        const year4_sem2 = await Table.CourseProgramPathway.findAll({
          where: {
            year: 4,
            semester: 2,
            program_id: programId,
            pathway_id: pathwayId
          },
          include: {
            model: Table.Course
          }
        })
        const year4_sem3 = await Table.CourseProgramPathway.findAll({
          where: {
            year: 4,
            semester: 3,
            program_id: programId,
            pathway_id: pathwayId
          },
          include: {
            model: Table.Course
          }
        })
        const syllabus = [
          [year1_sem1,year1_sem2,year1_sem3],
          [year2_sem1,year2_sem2,year2_sem3],
          [year3_sem1,year3_sem2,year3_sem3],
          [year4_sem1,year4_sem2,year4_sem3],
        ]
        return res.status(200).json({
          syllabus,
          pathwayId,
          programId,
          discipline: program.discipline,
        });
      }else{
        return res.status(200).json({error: false, message: `ProgramID-${programId} hasn't existed`});
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
      const {programId,courseId} = req.params;
      const {semester=1,year=1,pathwayId=1} = req.query;
      const program = await Table.Program.findByPk(programId);
      if(program){
        const isAssigned = await Table.CourseProgramPathway.findOne({
          where: {
            course_id: courseId,
            program_id: programId,
            pathway_id: pathwayId
          }
        })
        const course = await Table.Course.findByPk(courseId);
        const isInProgram = await program.hasCourse(course);
        if (isInProgram){
          if (isAssigned){
            const assignedCourse = await Table.CourseProgramPathway.update({
              semester,
              year
            },{
              where: {
                course_id: courseId,
                program_id: programId,
                pathway_id: pathwayId,
              }
            })
            return res.status(200).json({
              isUpdated: assignedCourse[0],
              status: 'update',
            })
          }else{
            const assignedCourse = await Table.CourseProgramPathway.create({
              semester,
              year,
              pathway_id: pathwayId,
              program_id: programId,
              course_id: courseId,
            })
            return res.status(200).json({
              assignedCourse,
              status: 'new'
            })
          }
        }else{
          return res.status(200).json({error: false, message: `CourseID-${courseId} isn't in ProgramID-${program.discipline}`})
        }
      }else{
        return res.status(200).json({error: false, message: `ProgramID-${programId} hasn't existed`})
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
      const {programId,courseId} = req.params;
      const {pathwayId} = req.query;
      if (!pathwayId) return res.status(200).json({error: false, message: `Invalid Query`});
      const program = await Table.Program.findByPk(programId);
      if(program){
        const isAssigned = await Table.CourseProgramPathway.findOne({
          where: {
            course_id: courseId,
            pathway_id: pathwayId,
            program_id: programId,
          }
        })
        if (isAssigned){
          const deletedCourse = await Table.CourseProgramPathway.destroy({
            where: {
              course_id: courseId,
              pathway_id: pathwayId,
              program_id: programId,
            }
          })
          return res.status(200).json({isDeleted: deletedCourse})
        }else{
          return res.status(200).json({error: false, message: `Syllabus don't have CourseID-${courseId} `})
        }
      }else{
        return res.status(200).json({error: false, message: `ProgramID-${programId} hasn't existed`})
      }
    }catch(error){
      console.log(error);
      return res.status(200).json({
        error: true,
        message: error,
      })
    }
  }
}
