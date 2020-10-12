const router = require("express").Router()
const pathwayController = require("../controllers/pathway");

router.put("/:id",pathwayController.updatePathway);
router.delete("/:id",pathwayController.deletePathways);
router.post("/",pathwayController.createPathway);
router.get("/",pathwayController.getAllPathways);
module.exports = router
