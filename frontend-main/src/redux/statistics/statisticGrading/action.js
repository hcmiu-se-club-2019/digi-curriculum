import * as d3 from 'd3';

import * as Type from './constants';
import data from '../../../data/en-all-14-18-hash.csv';
import { SortOrder } from './SortOptions.enum';

export function fetchStatisticGrading() {
  return async (dispatch) => {
    dispatch(fetchStatisticGradingPending());
    d3.csv(data)
      .then((res) => dispatch(fetchStatisticGradingSuccess(res)))
      .then(() => dispatch(sortGPA(SortOrder.DESC)))
      .catch((err) => dispatch(fetchStatisticGradingError(err)));
  };
}

function fetchStatisticGradingPending() {
  return {
    type: Type.FETCH_STATISTIC_GRADING_PENDING,
  };
}

function fetchStatisticGradingSuccess(data) {
  return {
    type: Type.FETCH_STATISTIC_GRADING_SUCCESS,
    payload: data,
  };
}

function fetchStatisticGradingError(error) {
  return {
    type: Type.FETCH_STATISTIC_GRADING_ERROR,
    payload: error,
  };
}

export async function loadData(dispatch) {
  await dispatch(clearData())
  await dispatch(fetchStatisticGrading());
}

export async function loadRandomData(dispatch) {
  await dispatch(clearData())
  await dispatch(generateRandomData());
  dispatch(sortGPA(SortOrder.DESC));
}

function generateRandomData() {
  return {
    type: Type.GENERATE_RANDOM_DATA,
  };
}

export function clearData() {
  return {
    type: Type.CLEAR_DATA,
  };
}

export function sortGPA(newOrder) {
  return {
    type: Type.SORT_GPA,
    payload: newOrder,
  };
}

export function sortAverageScore(newOrder) {
  return {
    type: Type.SORT_AVERAGE_SCORE,
    payload: newOrder,
  };
}

export function sortScoreByOneCourse(newSelectedId, order) {
  return {
    type: Type.SORT_SCORE_BY_ONE_COURSE,
    payload: {
      newSelectedId,
      order,
    },
  };
}

export function sortTopCourseByOneStudent(newSelectedId, order) {
  return {
    type: Type.SORT_TOP_COURSE_BY_ONE_STUDENT,
    payload: {
      newSelectedId,
      order,
    },
  };
}

export function selectStudent(studentId) {
  return {
    type: Type.SELECT_STUDENT,
    payload: studentId,
  };
}

export function selectCourse(courseId) {
  return {
    type: Type.SELECT_COURSE,
    payload: courseId,
  };
}

export function selectAllStudents() {
  return {
    type: Type.SELECT_ALL_STUDENTS,
  };
}

export function selectAllCourses() {
  return {
    type: Type.SELECT_ALL_COURSES,
  };
}
