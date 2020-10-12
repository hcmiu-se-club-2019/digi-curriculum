import faker from 'faker';

export const getGeneratedGradingData = () => {
  let studentCount = faker.random.number({ min: 20, max: 120 });
  let courseCount = faker.random.number({ min: 20, max: 56 });

  let allStudents = {},
    allStudentIds = [],
    allCourses = {},
    allCourseIds = [];

  // generate courses
  for (let i = 0; i < courseCount; ++i) {
    allCourseIds.push(i);
    allCourses[i] = {
      id: i,
      name: faker.random.words(faker.random.number({ min: 1, max: 10 })),
    };
  }

  function findCourseUntilNoDuplicated(learntCourseIds) {
    while (true) {
      const randomId = faker.random.number({ min: 0, max: allCourseIds.length });
      if (!learntCourseIds.find((item) => item === randomId)) {
        return {
          id: randomId,
          score: faker.random.number({ min: 0, max: 100 }),
        };
      }
    }
  }

  const getRandomLearningProgress = () => {
    let learningCount = faker.random.number({ min: 20, max: courseCount });
    let learntCourses = {};
    let learntCourseIds = [];
    // how many course learnt
    for (let i = 0; i < learningCount; ++i) {
      const noDupCourse = findCourseUntilNoDuplicated(learntCourseIds);
      learntCourseIds.push(noDupCourse.id);
      learntCourses[noDupCourse.id] = noDupCourse.score;
    }
    return learntCourses;
  };

  // generate student
  for (let j = 0; j < studentCount; ++j) {
    let newId = faker.random.uuid();
    allStudentIds.push(newId);
    allStudents[newId] = {
      id: newId,
      gpa: faker.random.number({ min: 0, max: 100, precision: 0.1 }),
      fullName: faker.name.findName(),
      // get each courses they have learnt
      courses: {
        ...getRandomLearningProgress(),
      },
    };
  }
  return {
    allStudents,
    allStudentIds,
    allCourses,
    allCourseIds,
  };
};
