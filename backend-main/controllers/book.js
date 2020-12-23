const Table = require('../sequelize');
module.exports = {
  getAllBooks: async (req,res) => {
    try{
      const books = await Table.Book.findAll({});
      return res.status(200).json({books})
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  createBook: async (req,res) => {
    try{
      const {id} = req.body;
      const book = await Table.Book.findByPk(id);
      if (book){
        return res.status(200).json({
          error: false,
          message: "Book has already existed"
        })
      }else{
        const newBook = await Table.Book.create(req.body);
        return res.status(200).json({createdBook: newBook})
      }
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error,
      })
    }
  },
  updateBook: async (req,res) => {
    try{
      const {id} = req.params;
      const updatedBook = await Table.Book.update(req.body,{where: {id}});
      return res.status(200).json({isUpdated: updatedBook[0]});
    }catch(error){
      console.log(error);
      return res.status(500).json({
        error: true,
        message: error
      })
    }
  },
  deleteBook: async (req,res) => {
    try{
      const {id} = req.params;
      const book = await Table.Book.findByPk(id);
      if (book){
        const deletedBook = await Table.Book.destroy({where:{id}});
        return res.status(200).json({isDeleted: deletedBook});
      }else{
        return res.status(200).json({
          error: false,
          message: "Book has already deleted"
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
