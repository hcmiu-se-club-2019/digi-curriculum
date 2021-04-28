import * as Type from './constants';
// import * as coursesAction from '../courses/action';

export function clearData() {
  return {
    type: Type.CLEAR_DATA,
  };
}

export function generateRandomData(allCourses, allCourseIds) {
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
