const router = require("express").Router();
const programController = require("../controllers/program");

// ==> Courses
router.delete('/:id/courses/:courseId',programController.deleteCourse);
router.put('/:id/courses/:courseId',programController.updateCourse);
router.get('/:id/courses',programController.getAvailableCourses);
router.get('/:id/assignCourse',programController.assignCourse);

// ==> Program
router.put('/:id',programController.updateProgram);
router.delete('/:id',programController.deleteProgram);
router.post('/',programController.createProgram);
router.get('/',programController.getAllPrograms);

module.exports = router
