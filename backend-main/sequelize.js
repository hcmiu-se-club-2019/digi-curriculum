const {Sequelize,DataTypes} = require("sequelize");

// ==> Database information
const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_HOST = process.env.DB_HOST
const DB_PASSWORD = process.env.DB_PASSWORD

const sequelize = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
  host: DB_HOST,
  dialect: 'mysql',
});

// Create table from model
const Assessment = require("./models/assessment")(sequelize,DataTypes)
const Book = require("./models/book")(sequelize,DataTypes)
const Course = require("./models/course")(sequelize,DataTypes)
const CourseType = require("./models/courseType")(sequelize,DataTypes)
const Department = require("./models/department")(sequelize,DataTypes)
const Instructor = require("./models/instructor")(sequelize,DataTypes)
const LearningOutcome = require("./models/learningOutcome")(sequelize,DataTypes)
const Pathway = require("./models/pathway")(sequelize,DataTypes)
const Program = require("./models/program")(sequelize,DataTypes)
const Topic = require("./models/topic")(sequelize,DataTypes)
const AssessmentTool = require("./models/assessmentTool")(sequelize,DataTypes)
const TopicType = require("./models/topicType")(sequelize,DataTypes)
const TopicDetail = require("./models/topicDetail")(sequelize,DataTypes);
const CourseRelationship = require("./models/courseRelationship")(sequelize,DataTypes);
const CourseLevel = require('./models/courseLevel')(sequelize,DataTypes);
// Create intermediate table from model
const CourseAssessment = require("./models/intermediate/courseAssessment")(sequelize,DataTypes)
const CourseBook = require("./models/intermediate/courseBook")(sequelize,DataTypes)
const CourseCourse = require("./models/intermediate/courseCourse")(sequelize,DataTypes)
const CourseDepartment = require("./models/intermediate/courseDepartment")(sequelize,DataTypes)
const CourseInstructor = require("./models/intermediate/courseInstructor")(sequelize,DataTypes)
const CourseProgramPathway = require("./models/intermediate/coursePathway")(sequelize,DataTypes)
const CourseProgram = require("./models/intermediate/courseProgram")(sequelize,DataTypes)
const DepartmentInstructor = require("./models/intermediate/departmentInstructor")(sequelize,DataTypes)

// Create Association
/*
 *   | Relations        | course | instructor | topic | program |
 *   |------------------+--------+------------+-------+---------|
 *   | department       | n:n    | n:n        |       |         |
 *   | instructor       | n:n    |            |       |         |
 *   | book             | n:n    |            |       |         |
 *   | assessment       | n:n    |            |       |         |
 *   | program          | n:n    |            |       |         |
 *   | pathway          | n:n    |            |       | n:n     |
 *   | learning outcome | 1:n    |            |       |         |
 *   | topic            | 1:n    |            |       |         |
 *   | assessment tool  | 1:n    |            |       |         |
 *   | course           | self   |            |       |         |
 *   | topic type       |        |            | 1:n   |         |
 *   | topic detail     |        |            | 1:n   |         |
 *   |------------------+--------+------------+-------+---------|
 */
  
// 1-n relationship
Course.hasMany(LearningOutcome,{foreignKey: 'course_id'});
LearningOutcome.belongsTo(Course,{foreignKey: 'course_id'});
Course.hasMany(Topic,{foreignKey: 'course_id'});
Topic.belongsTo(Course,{foreignKey: 'course_id'})
Course.hasMany(AssessmentTool,{foreignKey: 'course_id'});
AssessmentTool.belongsTo(Course,{foreignKey: 'course_id'})
TopicType.hasMany(Topic,{foreignKey: 'topic_type_id'});
Topic.belongsTo(TopicType,{foreignKey: 'topic_type_id'})
Topic.hasMany(TopicDetail,{foreignKey: 'topic_id'})
TopicDetail.belongsTo(Topic,{foreignKey: 'topic_id'})
CourseLevel.hasMany(Course,{foreignKey: 'course_level_id'});
Course.belongsTo(CourseLevel,{foreignKey: 'course_level_id'});
CourseRelationship.hasMany(CourseCourse,{foreignKey: 'relationship_id'})
CourseCourse.belongsTo(CourseRelationship,{foreignKey: 'relationship_id'})

// New 1-n relationship
Assessment.hasMany(AssessmentTool,{foreignKey: 'assessment_id'});
AssessmentTool.belongsTo(Assessment,{foreignKey: 'assessment_id'});
LearningOutcome.hasMany(AssessmentTool,{foreignKey: 'loutcome_id'});
AssessmentTool.belongsTo(LearningOutcome,{foreignKey: 'loutcome_id'});
CourseType.hasMany(CourseProgram,{foreignKey: 'course_type_id'});
CourseProgram.belongsTo(CourseType,{foreignKey: 'course_type_id'});

// n-n relationship
Course.belongsToMany(Department,{
  through: CourseDepartment,
  foreignKey: 'course_id',
  otherKey: 'department_id',
})
Department.belongsToMany(Course,{
  through: CourseDepartment,
  foreignKey: 'department_id',
  otherKey: 'course_id',
})
Course.belongsToMany(Instructor,{
  through: CourseInstructor,
  foreignKey: 'course_id',
  otherKey: 'instructor_id',
})
Instructor.belongsToMany(Course,{
  through: CourseInstructor,
  foreignKey: 'instructor_id',
  otherKey: 'course_id',
})
Course.belongsToMany(Book,{
  through: CourseBook,
  foreignKey: 'course_id',
  otherKey: 'book_id',
})
Book.belongsToMany(Course,{
  through: CourseBook,
  foreignKey: 'book_id',
  otherKey: 'course_id'
})
Course.belongsToMany(Assessment,{
  through: CourseAssessment,
  foreignKey: 'course_id',
  otherKey: 'assessment_id',
})
Assessment.belongsToMany(Course,{
  through: CourseAssessment,
  foreignKey: 'assessment_id',
  otherKey: 'course_id',
})
Course.belongsToMany(Program,{
  through: CourseProgram,
  foreignKey: 'course_id',
  otherKey: 'program_id',
})
Program.belongsToMany(Course,{
  through: CourseProgram,
  foreignKey: 'program_id',
  otherKey: 'course_id',
})

Department.belongsToMany(Instructor,{
  through: DepartmentInstructor,
  foreignKey: 'department_id',
  otherKey: 'instructor_id'
})
Instructor.belongsToMany(Department,{
  through: DepartmentInstructor,
  foreignKey: 'instructor_id',
  otherKey: 'department_id',
})

// self relationship
Course.belongsToMany(Course,{
  through: CourseCourse,
  as: "related_courses",
  foreignKey: 'course_id1',
  otherKey: 'course_id2',
})

// Super many-many relation btw Course - Pathway - Program
Course.belongsToMany(Program,{
  through: CourseProgramPathway,
  foreignKey: "course_id",
  otherKey: 'program_id',
  uniqueKey: 'compositeIndex',
  as: 'PathwayProgram'
})
Program.belongsToMany(Course,{
  through: CourseProgramPathway,
  foreignKey: 'program_id',
  otherKey: 'course_id',
  uniqueKey: 'compositeIndex',
  as: 'PathwayCourse'
})
Course.belongsToMany(Pathway,{
  through: CourseProgramPathway,
  foreignKey: 'course_id',
  otherKey: 'pathway_id',
  uniqueKey: 'compositeIndex',
})
Pathway.belongsToMany(Course,{
  through: CourseProgramPathway,
  foreignKey: 'pathway_id',
  otherKey: 'course_id',
  uniqueKey: 'compositeIndex',
})
Program.belongsToMany(Pathway,{
  through: CourseProgramPathway,
  foreignKey: 'program_id',
  otherKey: 'course_id',
  uniqueKey: 'compositeIndex',
})
Pathway.belongsToMany(Course,{
  through: CourseProgramPathway,
  foreignKey: 'pathway_id',
  otherKey: 'course_id',
  uniqueKey: 'compositeIndex',
})
CourseProgramPathway.belongsTo(Course,{foreignKey: "course_id"});
CourseProgramPathway.belongsTo(Program,{foreignKey: "program_id"});
CourseProgramPathway.belongsTo(Pathway,{foreignKey: 'pathway_id'});

// Wrong!
// CourseProgramPathway.belongsTo(Course,{foreignKey: 'pathway_id'});
// CourseProgramPathway.belongsTo(Program,{foreignKey: 'pathway_id'})
// CourseProgramPathway.belongsTo(Pathway,{foreignKey: 'pathway_id'})

// Course.hasMany(CourseProgramPathway,{foreignKey: 'course_id'});
// Program.hasMany(CourseProgramPathway,{foreignKey: 'program_id'});
// Pathway.hasMany(CourseProgramPathway,{foreignKey: 'pathway_id', uniqueKey: 'compositeIndex'});

sequelize.sync()
  .then("sync successfully!");

const Table = {

  // Table
  Assessment,
  Book,
  Course,
  CourseType,
  Department,
  Instructor,
  LearningOutcome,
  Pathway,
  Program,
  Topic,
  TopicDetail,
  TopicType,
  AssessmentTool,
  CourseRelationship,
  CourseLevel,
  
  // Intermediate Table
  CourseAssessment,
  CourseBook,
  CourseCourse,
  CourseDepartment,
  CourseInstructor,
  CourseProgramPathway,
  CourseProgram,
  DepartmentInstructor,
}
module.exports = Table
