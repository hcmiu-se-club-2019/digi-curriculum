module.exports = {
  /*
    *  | Relations        | course |
    *  |------------------+--------|
    *  | department       | n:n    |
    *  | instructor       | n:n    |
    *  | book             | n:n    |
    *  | assessment       | n:n    |
    *  | program          | n:n    |
    *  | pathway          | n:n    |
    *  | learning outcome | 1:n    |
    *  | topic            | 1:n    |
    *  | assessment tool  | 1:n    |
    *  | course           | self   |
    *  |------------------+--------|
    */
  courseAssociation: (Table) => {
    const {Course} = Table;
    
    // 1-n relationship
    Course.hasMany(Table.LearningOutcome);
    Course.hasMany(Table.Topic);
    Course.hasMany(Table.AssessmentTool);

    // n-n relationship
    Course.belongsToMany(Table.Department,{through: Table.CourseDepartment})
    Course.belongsToMany(Table.Instructor,{through: Table.CourseInstructor})
    Course.belongsToMany(Table.Book,{through: Table.CourseBook})
    Course.belongsToMany(Table.Assessment,{through: Table.CourseAssessment})
    Course.belongsToMany(Table.Program,{through: Table.CourseProgram})
    Course.belongsToMany(Table.Pathway,{through: Table.CoursePathway})

    // self relationship
    Course.belongsToMany(Course,{through: Table.CourseCourse,as: "RelateCourse"})
  },
}
