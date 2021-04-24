import * as Type from './constants';

import { loadRandomData as loadRandomCurriculum } from '../curriculums/action';

export async function loadRandomData(dispatch) {
  await dispatch(clearData());
  await dispatch(generateRandomData());
}

export function bulkDispatch() {
  return async (dispatch, getState) => {
    await loadRandomData(dispatch);
    await loadRandomCurriculum(dispatch, getState);

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

    dispatch(selectCourses(courseIdsPlaceholder));
    dispatch(addCourses());
  };
}

function clearData() {
  return {
    type: Type.CLEAR_REDUCER_COURSE,
  };
}

function generateRandomData() {
  return {
    type: Type.GENERATE_RANDOM_COURSE_DATA,
  };
}

export function selectCourse(courseId) {
  return {
    type: Type.SELECT_COURSE,
    payload: {
      courseId,
    },
  };
}

export function removeSelectedCourse(courseId) {
  return {
    type: Type.REMOVE_SELECTED_COURSE,
    payload: {
      courseId,
    },
  };
}

export function selectCourses(courseIds) {
  return {
    type: Type.SELECT_COURSES,
    payload: {
      courseIds,
    },
  };
}

export function addCourses() {
  return {
    type: Type.ADD_COURSES,
  };
}
