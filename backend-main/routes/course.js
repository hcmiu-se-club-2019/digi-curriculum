const router = require('express').Router()
const courseBO = require('../bo/courseBO');
const courseController = require("../controllers/course");
const utilController = require('../controllers/utils');

// ==> Related Course
router.get('/:id/relatedCourses',courseController.getRelatedCourses);
router.get('/:courseId/relate/:relatedCourseId',courseController.relateCourse);
router.delete('/:courseId/relationship/:relatedCourseId',courseController.deleteRelationship);
router.put('/:courseId/relationship/:relatedCourseId',courseController.updateRelationship);

// ==> Assessment Tool
router.get('/:id/assessmentTools',courseController.getAssessmentTools);
router.post('/:id/assessmentTools',courseController.createAssessmentTool);
router.delete('/:id/assessmentTools/:assessmentToolId',courseController.deleteAssessmentTool);

// ==> Assessment
router.get('/:id/assessments',courseController.getAssessments);
router.get('/:id/assignAssessment',courseController.asignAssessment);
router.delete('/:id/assessments/:assessmentId',courseController.deleteAssessment);
router.put('/:id/assessments/:assessmentId',courseController.updateAssessment);


// ==> Learning Outcome
router.get('/:id/los',courseController.getLearningOutcomes);
router.post('/:id/los',courseController.createLearningOutcome);
router.delete('/:id/los/:loId',courseController.deleteLearningOutcome);
router.put('/:id/los/:loId',courseController.updateLearningOutcome);

// ==> Book
router.get("/:id/assignBook",courseController.assignBook);
router.delete('/:id/books/:bookId',courseController.deleteBook);
router.get('/:id/books',courseController.getBooks);

// ==> Instructor
router.get("/:id/instructors",courseController.getInstructors);

// ==> Topic
router.get('/:id/topics',courseController.getTopics);
router.post('/:id/topics',courseController.createTopic);
router.post('/:id/topics/:topicId',courseController.createTopicDetail);
router.put('/:id/topics/:topicId',courseController.updateTopic);
router.delete('/:id/topics/:topicId',courseController.deleteTopic);

// ==> Detail
router.get('/:id/details',courseController.getDetails);

// ==> Programs
router.get('/:id/programs',courseController.getAvailabelPrograms);

// ==> Utils
router.get('/types',utilController.getAllCourseTypes);
router.get('/relationships',utilController.getAllCourseRelationships);

// ==> Course
router.get("/:id",courseController.getCourseById);
//router.put("/:id",courseController.updateCourse);
router.delete("/:id",courseController.deleteCourse);
router.get("/", courseController.getAllCourse);
router.post("/",courseController.createCourse);

// ==> CourseBO
router.put("/:id",courseBO.updateCourse);

module.exports = router;
