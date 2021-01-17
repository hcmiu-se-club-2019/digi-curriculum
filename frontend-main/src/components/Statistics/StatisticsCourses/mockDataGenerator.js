import faker from 'faker';
import * as d3 from 'd3';
import _ from 'lodash';

import data from '../../../data/en-all-19-20-hash.csv';

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
        },
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

export function getGeneratedCourseData() {
  let allSems = {},
    allSemIds = ['sem1', 'sem2', 'sem3'];

  for (let i = 0; i < allSemIds.length; ++i) {
    const courseCount = faker.random.number({ min: 10, max: 30 });
    const { allCourses, allCourseIds } = generateCoursePerSemester(courseCount);
    allSems[allSemIds[i]] = { allCourses, allCourseIds };
  }

  function generateCoursePerSemester(courseCount) {
    let allCourses = {},
      allCourseIds = [];
    for (let i = 0; i < courseCount; ++i) {
      const randomCourseId = faker.random.uuid();
      const studentYear1 = getRandomScore();
      const studentYear2 = getRandomScore();
      const studentYear3 = getRandomScore();
      const studentYear4 = getRandomScore();
      const studentYearOther = getRandomScore();
      const { allLecturers, allLecturerIds } = randomLecturer();

      allCourseIds.push(randomCourseId);
      allCourses[randomCourseId] = {
        id: randomCourseId,
        name: faker.random.words(faker.random.number({ min: 1, max: 10 })),
        studentYear1,
        studentYear2,
        studentYear3,
        studentYear4,
        studentYearOther,
        averageScore: d3.mean([...studentYear1, ...studentYear2, ...studentYear3, ...studentYear4, ...studentYearOther]).toFixed(0),
        allLecturerIds,
        allLecturers,
      };
    }
    return {
      allCourses,
      allCourseIds,
    };
  }

  function getRandomScore() {
    const studentScores = [];
    const scoreScale = faker.random.number({ min: 0, max: 5 });
    const studentCount = faker.random.number({ min: 0, max: 500 });

    for (let i = 0; i < studentCount; i++) {
      studentScores.push(faker.random.number({ min: scoreScale * 12, max: scoreScale * 12 + 40 }));
    }
    studentScores.sort((prevScore, currentScore) => prevScore - currentScore);
    return studentScores;
  }

  return {
    allSems,
    allSemIds,
  };
}

function randomLecturer() {
  const lecturerCount = faker.random.number({ min: 1, max: 5 });
  let allLecturers = {};
  let allLecturerIds = [];
  for (let i = 0; i < lecturerCount; ++i) {
    const randomId = faker.random.uuid();
    allLecturerIds.push(randomId);
    allLecturers[randomId] = {
      id: randomId,
      // fullName: faker.random.words(faker.random.number({ min: 1, max: 10 })),
      fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      isTeachingTheory: faker.random.boolean(),
      isTeachingPractice: faker.random.boolean(),
    };
  }

  return {
    allLecturers,
    allLecturerIds,
  };
}

export async function fetchStatisticByCourses() {
  const getData = await d3.csv(data);
  const allSemIds = _.uniqBy(getData, (d) => +d.sem)
    .map((d) => d.sem)
    .sort();

  const allSems = {};
  const allCoursesBySem = _.groupBy(getData, (d) => +d.sem);

  // console.log(performance.measure(allCoursesBySem));
  console.log(allSemIds);
  console.log(allCoursesBySem);

  allSemIds.forEach((item, i) => {
    const allCourseData = _.groupBy(allCoursesBySem[+item], (d) => d.course);
    const allCourseDataIds = _.uniqBy(allCoursesBySem[+item], (d) => d.course).map((d) => d.course);
    const year = item.trim().substring(0, 2);
    const allCourseIds = allCourseDataIds;
    const allCourses = {};

    allCourseDataIds.forEach((id) => {
      const studentYear1 = allCourseData[id].filter((d) => !isNaN(+d.score) && year - +d.class.substring(4, 6) === 0).map((d) => +d.score);
      const studentYear2 = allCourseData[id].filter((d) => !isNaN(+d.score) && year - +d.class.substring(4, 6) === 1).map((d) => +d.score);
      const studentYear3 = allCourseData[id].filter((d) => !isNaN(+d.score) && year - +d.class.substring(4, 6) === 2).map((d) => +d.score);
      const studentYear4 = allCourseData[id].filter((d) => !isNaN(+d.score) && year - +d.class.substring(4, 6) === 3).map((d) => +d.score);
      const studentYearOther = allCourseData[id].filter((d) => !isNaN(+d.score) && year - +d.class.substring(4, 6) > 3).map((d) => +d.score);
      const { allLecturers, allLecturerIds } = randomLecturer();
      allCourses[id] = {
        id,
        name: `${id}`,
        studentYear1,
        studentYear2,
        studentYear3,
        studentYear4,
        studentYearOther,
        averageScore: d3.mean([...studentYear1, ...studentYear2, ...studentYear3, ...studentYear4, ...studentYearOther]).toFixed(0),
        allLecturerIds,
        allLecturers,
      };
    });

    console.log(allCourses);

    allSems[item] = {
      allCourses,
      allCourseIds,
    };
  });
  console.log({ allSems, allSemIds });
  return { allSems, allSemIds };
}
