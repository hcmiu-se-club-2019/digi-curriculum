const Table = require('../sequelize');
module.exports = {
  createDepartment: async (req,res) => {
    const {id,name} = req.body;
    try{
      const department = await Table.Department.findByPk(id);
      if (department){
        return res.status(200).json({
          error: false,
          message: "DepartmentID has already existed",
        })
      }else{
        const newDeparment = await Table.Department.create({id,name})
        return res.status(200).json({
          createdDepartment: newDeparment
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
  getAllDepartment: async (req,res) => {
    try{
      const departments = await Table.Department.findAll({});
      return res.status(200).json({ departments })
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  updateDeparment: async (req,res) => {
    try{
      const {id} = req.params;
      const updatedDeparment = await Table.Department.update(req.body,{where: {id}});
      return res.status(200).json({isUpdated: updatedDeparment[0]});
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  getCourses: async (req,res) => {
    try{
      const {id} = req.params;
      const department = await Table.Department.findByPk(id);
      if (department){
        const courses = await department.getCourses();
        return res.status(200).json({courses});
      }else{
        res.status(200).json({
          error: false,
          message: `${id} don't match any DepartmentID`
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
  getInstructors: async (req,res) => {
    try{
      const {id} = req.params;
      const department = await Table.Department.findByPk(id);
      if (department){
        const instructors = await department.getInstructors();
        return res.status(200).json({instructors});
      }else{
        return res.status(200).json({
          error: false,
          message: `${id} don't match any Department ID`
        })
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
