const Table = require("../sequelize")
module.exports = {
  getAllPathways: async (req,res) => {
    try{
      const pathways = await Table.Pathway.findAll({});
      return res.status(200).json({pathways})
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  },
  createPathway: async (req,res) => {
    try{
      const pathway = await Table.Pathway.findByPk(req.body.id);
      if (pathway){
        return res.status(200).json({
          error: false,
          message: "Pathway has already existed"
        })
      }else{
        const newPathway = await Table.Pathway.create(req.body);
        return res.status(200).json({createdPathway: newPathway})
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
    
  },
  updatePathway: async (req,res) => {
    try{
      const {id} = req.params;
      const updatedPathway = await Table.Pathway.update(req.body,{where: {id}})
      return res.status(200).json({isUpdated: updatedPathway[0]});
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  deletePathways: async (req,res) => {
    try{
      const {id} = req.params;
      const pathway = await Table.Pathway.findByPk(id);
      if (pathway){
        const deletedPathway = await Table.Pathway.destroy({where: {id}});
        return res.status(200).json({isDeleted: deletedPathway});
      }else{
        return res.status(200).json({
          error: false,
          message: "Pathway has already deleted"
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
