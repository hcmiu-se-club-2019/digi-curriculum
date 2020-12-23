const router = require('express').Router();
const syllabusController = require('../controllers/syllabus');

router.get('/:programId',syllabusController.getSyllabus);
router.get('/:programId/assignCourse/:courseId',syllabusController.assignCourse);
router.delete('/:programId/:courseId',syllabusController.deleteCourse);

module.exports = router;
