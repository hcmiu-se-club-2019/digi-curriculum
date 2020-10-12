const router = require('express').Router()
const bookController = require('../controllers/book');

router.put('/:id',bookController.updateBook);
router.delete('/:id',bookController.deleteBook);
router.post('/',bookController.createBook);
router.get('/',bookController.getAllBooks);

module.exports = router;
