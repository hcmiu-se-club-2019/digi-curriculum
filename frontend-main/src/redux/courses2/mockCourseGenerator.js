import faker from 'faker';

export function getRandomData() {
  let allCourses = {},
    allCourseIds = [],
    allMajors = {},
    allMajorIds = [];

  const majorCount = faker.random.number({ max: 1, min: 15 });
  const courseCount = faker.random.number({ min: 5, max: 150 });

  for (let i = 0; i < majorCount; ++i) {
    const majorId = i.toString() + 'i' + faker.random.uuid();
    allMajorIds.push(majorId);
    allMajors[majorId] = {
      id: majorId,
      name: faker.name.title(),
    };
  }

  for (let j = 0; j < courseCount; ++j) {
    const courseId = j.toString() + 'j' + faker.random.uuid();
    const randomMajorIndex = faker.random.number({ min: 0, max: majorCount - 1 });

    allCourseIds.push(courseId);
    allCourses[courseId] = {
      id: courseId,
      name: faker.random.words(faker.random.number({ min: 1, max: 10 })),
      credit: faker.random.number({ min: 0, max: 10 }),
      majorId: allMajorIds[randomMajorIndex],
      isSelected: false,
      isSelectedTemp: false,
    };
  }

  return {
    allCourses,
    allCourseIds,
    allMajors,
    allMajorIds,
  };
}
