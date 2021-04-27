import * as Type from './constants';
import * as coursesAction from '../courses/action';

export function bulkDispatch() {
  return async (dispatch, getState) => {
    const actions1 = () => {
      dispatch(coursesAction.clearData());
      dispatch(clearData());
    };
    await actions1();

    const actions2 = async () => {
      await dispatch(coursesAction.generateRandomData());
      const { allCourses, allCourseIds } = getState().courses;
      await dispatch(generateRandomData(allCourses, allCourseIds));
    };
    await actions2();

    const action3 = () => {
      const { allYears, allYearIdsOrder } = getState().curriculums;
      let courseIdsPlaceholder = [];

      allYearIdsOrder.forEach((yearId) => {
        const year = allYears[yearId];
        const { allSems, allSemIdsOrder } = year;

        allSemIdsOrder.forEach((semId) => {
          const semester = allSems[semId];
          courseIdsPlaceholder.push(...semester.courseIds);
        });
      });
      dispatch(coursesAction.selectCourses(courseIdsPlaceholder));
      dispatch(coursesAction.addCourses());
    };
    await action3();
  };
}

export async function loadRandomData(dispatch, getState) {
  await dispatch(clearData());
  const { allCourses, allCourseIds } = getState().courses;
  await dispatch(generateRandomData(allCourses, allCourseIds));
}

export function clearData() {
  return {
    type: Type.CLEAR_DATA,
  };
}

function generateRandomData(allCourses, allCourseIds) {
  return {
    type: Type.GENERATE_RANDOM_DATA,
    payload: {
      allCourses,
      allCourseIds,
    },
  };
}

export function dragYear(result, provider) {
  return {
    type: Type.DRAG_YEAR,
    payload: {
      result,
      provider,
    },
  };
}

export function dragCourse(result, provider) {
  return {
    type: Type.DRAG_COURSE,
    payload: {
      result,
      provider,
    },
  };
}

export function addCourses({ yearId, semId, courseIds }) {
  return {
    type: Type.ADD_COURSES,
    payload: {
      yearId,
      semId,
      courseIds,
    },
  };
}

export function removeCourse({ yearId, semId, courseId }) {
  return {
    type: Type.REMOVE_COURSE,
    payload: {
      yearId,
      semId,
      courseId,
    },
  };
}

export function addYear() {
  return {
    type: Type.ADD_YEAR,
  };
}

export function removeYear({ yearId, yearIndex }) {
  return {
    type: Type.REMOVE_YEAR,
    payload: {
      yearId,
      yearIndex,
    },
  };
}
