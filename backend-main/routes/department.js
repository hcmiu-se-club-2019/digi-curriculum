const router = require('express').Router()
const departmentController = require('../controllers/department');

router.get('/:id/courses',departmentController.getCourses);
router.get('/:id/instructors',departmentController.getInstructors);
router.put('/:id',departmentController.updateDeparment);
router.post('/',departmentController.createDepartment);
router.get('/',departmentController.getAllDepartment);
module.exports = router
