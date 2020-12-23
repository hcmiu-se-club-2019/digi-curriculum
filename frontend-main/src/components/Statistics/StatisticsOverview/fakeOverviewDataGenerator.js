import faker from 'faker';

export function getGeneratedOverviewData() {
  const majorCount = faker.random.number({ min: 3, max: 20 });
  let allMajors = {},
    allMajorIds = [],
    totalStudent = faker.random.number({ min: 700, max: 2000 }),
    totalLecturer = faker.random.number({ min: 50, max: 100 }),
    totalMajor = null;

  function getRandomSubMajors() {
    const subMajorCount = faker.random.number({ min: 0, max: 6 });
    let allSubMajors = {},
      allSubMajorIds = [];
    for (let i = 0; i < subMajorCount; ++i) {
      const randomSubMajorId = faker.random.uuid;
      allSubMajorIds.push(randomSubMajorId);
      allSubMajors[randomSubMajorId] = {
        name: faker.commerce.department(),
        studentCount: faker.random.number({ min: 50, max: 200 }),
      };
    }
    return {
      allSubMajors,
      allSubMajorIds,
    };
  }

  function getRandomCurriculumByEnglishLevel() {
    return {
      IE1: {
        studentCount: faker.random.nunmber({ min: 0, max: 50 }),
        curriculumCourseCount: faker.random.nunmber({ min: 15, max: 60 }),
      },
      IE2: {
        studentCount: faker.random.nunmber({ min: 0, max: 50 }),
        curriculumCourseCount: faker.random.nunmber({ min: 15, max: 60 }),
      },
      IE3: {
        studentCount: faker.random.nunmber({ min: 0, max: 50 }),
        curriculumCourseCount: faker.random.nunmber({ min: 15, max: 60 }),
      },
      AE1: {
        studentCount: faker.random.nunmber({ min: 0, max: 50 }),
        curriculumCourseCount: faker.random.nunmber({ min: 15, max: 60 }),
      },
    };
  }

  // generate majors
  for (let i = 0; i < majorCount; ++i) {
    const randomId = faker.random.uuid();
    const { allSubMajors, allSubMajorIds } = getRandomSubMajors();
    allMajorIds.push(randomId);
    allMajors[randomId] = {
      id: randomId,
      name: faker.commerce.department(),
      studentCount: faker.random.number({ min: 50, max: 500 }),
      courseCount: faker.random.number({ min: 10, max: 50 }),
      highestGPA: faker.random.number({ min: 70, max: 100, precision: 0.1 }),
      allSubMajors,
      allSubMajorIds,
    };
  }

  return {
    allMajors,
    allMajorIds,
    totalStudent,
    totalLecturer,
  };
}
