const {CourseProgramPathway,Course, Program, Pathway} = require("./sequelize");

CourseProgramPathway.belongsTo(Course,{foreignKey: 'pathway_id'});
CourseProgramPathway.belongsTo(Program,{foreignKey: 'pathway_id'})
CourseProgramPathway.belongsTo(Pathway,{foreignKey: 'pathway_id'})

Course.hasMany(CourseProgramPathway,{foreignKey: 'course_id'});
Program.hasMany(CourseProgramPathway,{foreignKey: 'program_id'});
Pathway.hasMany(CourseProgramPathway,{foreignKey: 'pathway_id'});

