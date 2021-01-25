import faker from 'faker';
import * as d3 from 'd3';
import _ from 'lodash';

import * as Type from './constants';
import { HeaderOptions, SortOrder } from './SortOptions.enum';

const initState = {
  allStudents: {},
  allStudentIds: [],
  allCourses: {},
  allCourseIds: [],
  maxHeightBoxHighlight: 0,
  allSortHeaders: {
    GPA: {
      order: SortOrder.DESC,
    },
    AVE_SCORE: {
      order: null,
    },
    TOP_STUDENT_SCORE: {
      order: null,
      courseId: null,
    },
    TOP_COURSE_BY_STUDENT: {
      order: null,
      studentId: null,
    },
  },
  isAllCoursesSelected: true,
  isAllStudentsSelected: true,
  errorLog: null,
  isFetching: false,
};

export default function statisticsGrading(state = initState, action) {
  switch (action.type) {
    case Type.FETCH_STATISTIC_GRADING_PENDING: {
      return Object.assign({}, state, {
        isFetching: true,
      });
    }
    case Type.FETCH_STATISTIC_GRADING_SUCCESS: {
      const { allStudents, allStudentIds, allCourses, allCourseIds } = mapDataAfterFetch(action.payload);
      // const maxHeightBoxHighlight = 67 + allStudentIds.length * 22 + Math.ceil(allStudentIds.length / 10) * 10;
      const maxHeightBoxHighlight = 67 + allStudentIds.length * 22 + Math.ceil(allStudentIds.length / 5) * 10;

      return Object.assign({}, state, {
        isFetching: false,
        allStudents,
        allStudentIds,
        allCourses,
        allCourseIds,
        isAllCoursesSelected: true,
        isAllStudentsSelected: true,
        maxHeightBoxHighlight,
      });
    }
    case Type.FETCH_STATISTIC_GRADING_ERROR: {
      return Object.assign({}, state, {
        isFetching: false,
        errorLog: action.payload,
      });
    }
    case Type.GENERATE_RANDOM_DATA: {
      const { allStudents, allStudentIds, allCourses, allCourseIds } = getRandomData();
      // const maxHeightBoxHighlight = 67 + allStudentIds.length * 22 + Math.ceil(allStudentIds.length / 10) * 10;
      const maxHeightBoxHighlight = 67 + allStudentIds.length * 22 + Math.ceil(allStudentIds.length / 5) * 10;
      return Object.assign({}, state, {
        isFetching: false,
        allStudents,
        allStudentIds,
        allCourses,
        allCourseIds,
        isAllCoursesSelected: true,
        isAllStudentsSelected: true,
        maxHeightBoxHighlight,
      });
    }
    case Type.CLEAR_DATA: {
      return Object.assign({}, initState);
    }
    case Type.SORT_GPA: {
      const newOrder = action.payload;
      const { allStudents, allStudentIds, allSortHeaders } = _.cloneDeep(state);
      allSortHeaders.TOP_STUDENT_SCORE.courseId = null;
      allSortHeaders.TOP_STUDENT_SCORE.order = null;
      allSortHeaders.GPA.order = newOrder;
      if (newOrder === SortOrder.ASC) {
        allStudentIds.sort((prevStudentId, currentStudentId) => {
          const prevGPA = allStudents[prevStudentId].gpa;
          const currentGPA = allStudents[currentStudentId].gpa;
          return prevGPA - currentGPA || isNaN(prevGPA) - isNaN(currentGPA);
        });
      } else {
        allStudentIds.sort((prevStudentId, currentStudentId) => {
          const prevGPA = allStudents[prevStudentId].gpa;
          const currentGPA = allStudents[currentStudentId].gpa;
          return currentGPA - prevGPA || isNaN(prevGPA) - isNaN(currentGPA);
        });
      }
      return Object.assign({}, state, { allStudentIds, allSortHeaders });
    }
    case Type.SORT_AVERAGE_SCORE: {
      const newOrder = action.payload;
      const { allSortHeaders, allCourseIds, allCourses } = _.cloneDeep(state);
      allSortHeaders.TOP_COURSE_BY_STUDENT.studentId = null;
      allSortHeaders.TOP_COURSE_BY_STUDENT.order = null;
      allSortHeaders.AVE_SCORE.order = newOrder;
      if (newOrder === SortOrder.ASC) {
        allCourseIds.sort((prevCourseId, currentCourseId) => {
          return allCourses[currentCourseId].averageScore <= allCourses[prevCourseId].averageScore ? 1 : -1;
        });
      } else {
        allCourseIds.sort((prevCourseId, currentCourseId) => {
          return allCourses[currentCourseId].averageScore >= allCourses[prevCourseId].averageScore ? 1 : -1;
        });
      }
      console.log(allCourseIds.map((courseId) => allCourses[courseId].averageScore));
      return Object.assign({}, state, { allCourseIds, allSortHeaders });
    }
    case Type.SORT_SCORE_BY_ONE_COURSE: {
      const { newSelectedId, order } = action.payload;
      const { allStudents, allStudentIds, allCourses, allCourseIds, allSortHeaders } = _.cloneDeep(state);
      allSortHeaders.GPA.order = null;
      allSortHeaders.TOP_STUDENT_SCORE.order = allSortHeaders.TOP_STUDENT_SCORE.courseId !== newSelectedId ? SortOrder.DESC : order;
      allSortHeaders.TOP_STUDENT_SCORE.courseId = newSelectedId;

      if (allSortHeaders.TOP_STUDENT_SCORE.order === SortOrder.ASC) {
        allStudentIds.sort((prevStudentId, currentStudentId) => {
          const prevScore = allStudents[prevStudentId].courses[newSelectedId];
          const currentScore = allStudents[currentStudentId].courses[newSelectedId];
          return prevScore - currentScore || isNaN(prevScore) - isNaN(currentScore);
        });
      } else {
        allStudentIds.sort((prevStudentId, currentStudentId) => {
          const prevScore = allStudents[prevStudentId].courses[newSelectedId];
          const currentScore = allStudents[currentStudentId].courses[newSelectedId];
          return currentScore - prevScore || isNaN(prevScore) - isNaN(currentScore);
        });
      }

      allCourseIds.forEach((courseId) => {
        allCourses[courseId].isChecked = false;
      });

      allCourses[newSelectedId].isChecked = true;

      return Object.assign({}, state, {
        allStudentIds,
        allStudents,
        allCourses,
        allSortHeaders,
        isAllCoursesSelected: false,
      });
    }
    case Type.SORT_TOP_COURSE_BY_ONE_STUDENT: {
      const { newSelectedId, order } = action.payload;
      const { allCourseIds, allStudents, allStudentIds, allSortHeaders } = _.cloneDeep(state);
      allSortHeaders.AVE_SCORE.order = null;
      allSortHeaders.TOP_COURSE_BY_STUDENT.order = allSortHeaders.TOP_COURSE_BY_STUDENT.studentId !== newSelectedId ? SortOrder.DESC : order;
      allSortHeaders.TOP_COURSE_BY_STUDENT.studentId = newSelectedId;

      if (allSortHeaders.TOP_COURSE_BY_STUDENT.order === SortOrder.ASC) {
        allCourseIds.sort((prevCourseId, currentCourseId) => {
          const prevScore = allStudents[newSelectedId].courses[prevCourseId];
          const currentScore = allStudents[newSelectedId].courses[currentCourseId];
          return prevScore - currentScore || isNaN(prevScore) - isNaN(currentScore);
        });
      } else {
        allCourseIds.sort((prevCourseId, currentCourseId) => {
          const prevScore = allStudents[newSelectedId].courses[prevCourseId];
          const currentScore = allStudents[newSelectedId].courses[currentCourseId];
          return currentScore - prevScore || isNaN(prevScore) - isNaN(currentScore);
        });
      }

      allStudentIds.forEach((studentId) => {
        allStudents[studentId].isChecked = false;
      });

      allStudents[newSelectedId].isChecked = true;

      return Object.assign({}, state, {
        allStudentIds,
        allStudents,
        allCourseIds,
        allSortHeaders,
        isAllStudentsSelected: false,
      });
    }
    case Type.SELECT_STUDENT: {
      const studentId = action.payload;
      const cloneState = _.cloneDeep(state);
      const { allStudents } = cloneState;
      const { isChecked } = allStudents[studentId];
      allStudents[studentId].isChecked = !isChecked;

      return Object.assign({}, state, {
        allStudents,
        isAllStudentsSelected: false,
      });
    }
    case Type.SELECT_COURSE: {
      const courseId = action.payload;
      const cloneState = _.cloneDeep(state);
      const { allCourses } = cloneState;
      const { isChecked } = allCourses[courseId];
      allCourses[courseId].isChecked = !isChecked;

      return Object.assign({}, state, {
        allCourses,
        isAllCoursesSelected: false,
      });
    }
    case Type.SELECT_ALL_STUDENTS: {
      const { allStudents, allStudentIds, isAllStudentsSelected } = _.cloneDeep(state);
      allStudentIds.forEach((studentId, index) => {
        allStudents[studentId].isChecked = !isAllStudentsSelected;
      });
      return Object.assign({}, state, {
        allStudents,
        isAllStudentsSelected: !isAllStudentsSelected,
      });
    }
    case Type.SELECT_ALL_COURSES: {
      const { allCourses, allCourseIds, isAllCoursesSelected } = _.cloneDeep(state);
      allCourseIds.forEach((courseId, index) => {
        allCourses[courseId].isChecked = !isAllCoursesSelected;
      });
      return Object.assign({}, state, {
        allCourses,
        isAllCoursesSelected: !isAllCoursesSelected,
      });
    }
    default:
      return state;
  }
}

function mapDataAfterFetch(getData) {
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
  // console.log(allStudentIds);
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
  };
}

function getRandomData() {
  let studentCount = faker.random.number({ min: 10, max: 200 });
  // let studentCount = faker.random.number({ min: 20, max: 60 });
  let courseCount = faker.random.number({ min: 10, max: 60 });
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
    let learningCount = faker.random.number({ min: 0, max: courseCount }),
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
  };
}
