import faker from 'faker';

export const getGeneratedGradingData = () => {
  let studentCount = faker.random.number({ min: 20, max: 200 });
  let courseCount = faker.random.number({ min: 25, max: 60 });

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
      credit: faker.random.number({ min: 0, max: 10 }),
      averageScore: 0,
    };
  }

  function findCourseUntilNoDuplicated(learntCourseIds) {
    while (true) {
      const randomId = faker.random.number({ min: 0, max: allCourseIds.length - 1 });
      if (!learntCourseIds.find((item) => item === randomId)) {
        return {
          id: randomId,
          score: faker.random.number({ min: 0, max: 100 }),
        };
      }
    }
  }

  const getRandomLearningProgress = () => {
    let learningCount = faker.random.number({ min: courseCount, max: courseCount }),
      learntCourses = {},
      learntCourseIds = [],
      sumScore = 0,
      totalCredit = 0;

    // how many course learnt
    for (let i = 0; i < learningCount; ++i) {
      const noDupCourse = findCourseUntilNoDuplicated(learntCourseIds);
      learntCourseIds.push(noDupCourse.id);
      learntCourses[noDupCourse.id] = noDupCourse.score;

      totalCredit += allCourses[noDupCourse.id].credit;
      sumScore += noDupCourse.score * allCourses[noDupCourse.id].credit;
    }

    const averageScore = sumScore / totalCredit;

    return {
      learntCourses,
      averageScore: averageScore === 0 || averageScore === 100 ? averageScore.toFixed(0) : averageScore.toFixed(1),
    };
  };

  // generate student
  for (let j = 0; j < studentCount; ++j) {
    const newId = faker.random.uuid();
    const { learntCourses, averageScore } = getRandomLearningProgress();
    allStudentIds.push(newId);
    allStudents[newId] = {
      id: newId,
      gpa: averageScore,
      fullName: faker.name.findName(),
      courses: learntCourses,
    };
  }

  // assign average score in each course
  for (let k = 0; k < courseCount; ++k) {
    let sumScore = 0,
      learntCount = 0;
    for (let l = 0; l < studentCount; ++l) {
      const student = allStudents[allStudentIds[l]];
      if (!!student.courses[k]) {
        sumScore += student.courses[k];
        ++learntCount;
      }
    }
    allCourses[k].averageScore = (sumScore / learntCount).toFixed(0);
  }

  return {
    allStudents,
    allStudentIds,
    allCourses,
    allCourseIds,
  };
};
