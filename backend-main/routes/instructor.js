const router = require("express").Router()
const instructorController = require("../controllers/instructor");

router.get('/:id',instructorController.getInstructorById);
router.put("/:id",instructorController.updateInstructor);
router.delete("/:id",instructorController.deleteInstructor);
router.get("/",instructorController.getAllInstructors);
router.post("/",instructorController.createInstructor);

module.exports = router;
