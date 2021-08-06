const router = require('express').Router()
const assessmentController = require('../controllers/assessment');

router.get('/',assessmentController.getAllAssessment);
router.post('/',assessmentController.createAssessment);
router.delete('/:id',assessmentController.deleteAssessment);


module.exports = router;
