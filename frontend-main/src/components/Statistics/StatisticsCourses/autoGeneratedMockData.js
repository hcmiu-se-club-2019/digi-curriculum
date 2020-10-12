import faker from 'faker';

export function createCourses() {
  let allIds = [];
  for (let i = 0; i < faker.random.number(40); ++i) {
    allIds.push(faker.random.uuid());
  }
  return allIds;
}

export function getGeneratedStatisticByCourses() {
  const getSemester = () => {
    let allCourses = [];
    for (let i = 0; i < faker.random.number({ min: 3, max: 40 }); ++i) {
      allCourses.push({
        name: faker.name.title(),
        pass: faker.random.number({ min: 0, max: 50 }),
        fail: faker.random.number({ min: 0, max: 50 }),
        quantityStudent: {
          year1: faker.random.number({ min: 0, max: 50 }),
          year2: faker.random.number({ min: 0, max: 50 }),
          year3: faker.random.number({ min: 0, max: 50 }),
          year4: faker.random.number({ min: 0, max: 50 }),
        }
      });
    }
    return allCourses;
  };

  let allSems = [];
  for (let i = 0; i < 3; ++i) {
    allSems.push(getSemester());
  }
  return { allSems };
}
