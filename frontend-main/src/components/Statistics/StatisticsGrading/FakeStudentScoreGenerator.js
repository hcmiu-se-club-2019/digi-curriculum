import faker from 'faker';
import * as d3 from 'd3';
import _ from 'lodash';

import data from './en-all-14-18-hash.csv';

export const getGeneratedGradingData = () => {
  let studentCount = faker.random.number({ min: 20, max: 200 });
  // let studentCount = faker.random.number({ min: 20, max: 60 });
  let courseCount = faker.random.number({ min: 25, max: 60 });
  // let studentCount = 20;
  // let courseCount = 20;

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
      learningProgressOrder: faker.random.number({ min: 0, max: courseCount - 1 }),
      averageScore: 0,
      isChecked: true,
    };
  }

  function findCourseUntilNoDuplicated(learntCourseIds, gpaScale = 0) {
    while (true) {
      const randomId = faker.random.number({ min: 0, max: allCourseIds.length - 1 });
      const foundId = learntCourseIds.find((item) => item === randomId);
      if (foundId === undefined) {
        return {
          id: randomId,
          score: faker.random.number({ min: gpaScale * 15, max: gpaScale * 10 + 50 }),
        };
      }
    }
  }

  const getRandomLearningProgress = () => {
    let learningCount = faker.random.number({ min: courseCount, max: courseCount }),
      // let learningCount = faker.random.number({ min: 0, max: courseCount }),
      // let learningCount = faker.random.number({ min: 0, max: 5 }),
      learntCourses = {},
      learntCourseIds = [],
      gpaScale = faker.random.number({ min: 1, max: 5 }),
      sumScore = 0,
      totalCredit = 0;

    // how many course learnt
    for (let i = 0; i < learningCount; ++i) {
      const noDupCourse = findCourseUntilNoDuplicated(learntCourseIds, gpaScale);
      learntCourseIds.push(noDupCourse.id);
      learntCourses[noDupCourse.id] = noDupCourse.score;
      totalCredit += allCourses[noDupCourse.id].credit;
      sumScore += noDupCourse.score * allCourses[noDupCourse.id].credit;
    }

    let averageScore = sumScore / totalCredit;
    averageScore = averageScore === 0 || averageScore === 100 ? averageScore.toFixed(0) : averageScore.toFixed(1);

    return {
      learntCourses,
      learntCourseIds,
      averageScore,
    };
  };

  // generate student
  for (let j = 0; j < studentCount; ++j) {
    const newId = faker.random.uuid();
    const { learntCourses, averageScore, learntCourseIds } = getRandomLearningProgress();
    allStudentIds.push(newId);
    allStudents[newId] = {
      id: newId,
      gpa: averageScore,
      fullName: faker.name.findName(),
      courses: learntCourses,
      learntCourseIds,
      isChecked: true,
    };
  }

  // assign average score in each course
  for (let k = 0; k < courseCount; ++k) {
    let sumScore = 0,
      learntCount = 0;
    for (let l = 0; l < studentCount; ++l) {
      const student = allStudents[allStudentIds[l]];
      if (student.courses[k] !== undefined) {
        sumScore += student.courses[k];
        ++learntCount;
      }
    }
    allCourses[k].averageScore = Number.parseFloat((sumScore / learntCount).toFixed(0));
  }

  return {
    allStudents,
    allStudentIds,
    allCourses,
    allCourseIds,
    isAllCoursesSelected: true,
    isAllStudentsSelected: true,
  };
};

export async function fetchStatisticByGrading() {
  console.log('FETCH DATA');
  const getData = await d3.csv(data);
  let allStudents = {},
    allStudentIds = [],
    allCourses = {},
    allCourseIds = [];

  const filteredDataByYear = getData.filter((d, i) => {
    return d.class.substring(4, 6) === '14';
    // return d.class.substring(4, 6) === '14' && (d.class.substring(0, 2) === 'IT' || d.class.substring(2, 4) === 'IT');
  });

  allCourseIds = _.uniq(filteredDataByYear.map((d, i) => d.course));
  allStudentIds = _.uniq(filteredDataByYear.map((d, i) => d.id));
  console.log(allStudentIds);
  const courseCount = allCourseIds.length;

  allCourseIds.forEach((courseId, i) => {
    const filteredScores = filteredDataByYear.filter((item, index) => item.course === courseId && !isNaN(+item.score)).map((item2, index2) => item2.score);
    allCourses[courseId] = {
      id: courseId,
      name: `${courseId.substring(0, 8)}...${courseId.substring(courseId.length - 8, courseId.length)}`,
      // name: faker.random.words(faker.random.number({ min: 1, max: 10 })),
      credit: faker.random.number({ min: 0, max: 10 }),
      learningProgressOrder: faker.random.number({ min: 0, max: courseCount - 1 }),
      averageScore: d3.mean(filteredScores).toFixed(0),
      isChecked: true,
    };
  });

  filteredDataByYear.forEach((d, i) => {
    const filteredCourses = filteredDataByYear.filter((item, index) => item.id === d.id);
    const learntCourseIds = filteredCourses.map((d, i) => d.course);
    const courses = {};
    filteredCourses.forEach((d, i) => {
      courses[d.course] = +d.score;
    });
    const gpa = +d3.mean(learntCourseIds.map((d, i) => courses[d])).toFixed(1);
    allStudents[d.id] = {
      id: d.id,
      gpa: gpa === 0 || gpa === 100 ? gpa.toFixed(0) : gpa.toFixed(1),
      fullName: `${d.id.substring(0, 8)}...${d.id.substring(d.id.length - 8, d.id.length)}`,
      // fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      courses,
      learntCourseIds,
      isChecked: true,
    };
  });

  return {
    allStudents,
    allStudentIds,
    allCourses,
    allCourseIds,
    isAllCoursesSelected: true,
    isAllStudentsSelected: true,
  };
}
