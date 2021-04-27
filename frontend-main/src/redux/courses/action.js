import * as Type from './constants';

export function clearData() {
  return {
    type: Type.CLEAR_DATA,
  };
}

export function generateRandomData() {
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
