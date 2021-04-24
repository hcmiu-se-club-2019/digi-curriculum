import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';

import * as Type from './constants';
import { getRandomData } from './mockCurriculumGenerator';

const initState = {
  filteredCurriculum: {
    major: null,
    programType: null,
    englishEntrance: null,
  },
  allYears: {},
  allYearIdsOrder: [],
  errorLog: null,
  isFetching: false,
};

export default function curriculums2(state = initState, action) {
  switch (action.type) {
    case Type.CLEAR_DATA: {
      return Object.assign({}, state, initState);
    }
    case Type.GENERATE_RANDOM_DATA: {
      const { allCourses, allCourseIds } = action.payload;
      const { allYears, allYearIdsOrder } = getRandomData({ allCourses, allCourseIds });
      return Object.assign({}, state, { allYears: allYears, allYearIdsOrder });
    }
    case Type.DRAG_YEAR: {
      const { allYearIdsOrder } = state;
      const {
        result: { source, destination, draggableId },
      } = action.payload;

      allYearIdsOrder.splice(source.index, 1);
      allYearIdsOrder.splice(destination.index, 0, draggableId);

      return Object.assign({}, state, { allYearIdsOrder });
    }
    case Type.DRAG_COURSE: {
      const { allYears } = cloneDeep(state);
      const {
        result,
        result: { source, destination, draggableId },
      } = action.payload;

      const [startYearId, startSemId] = source.droppableId.split(' ');
      const [endYearId, endSemId] = destination.droppableId.split(' ');

      // Pop out course from old semester when dragged out
      allYears[startYearId].allSems[startSemId].courseIds.splice(source.index, 1);

      // Insert the dragged course to new semester
      allYears[endYearId].allSems[endSemId].courseIds.splice(destination.index, 0, draggableId);

      return Object.assign({}, state, { allYears });
    }
    case Type.ADD_COURSES: {
      const { allYears } = cloneDeep(state);
      const { yearId, semId, courseIds } = action.payload;

      allYears[yearId].allSems[semId].courseIds.push(...courseIds);

      const newState = {
        ...state,
        allYears,
      };

      return Object.assign({}, state, { ...newState });
    }
    case Type.REMOVE_COURSE: {
      const { allYears } = cloneDeep(state);
      const { yearId, semId, courseId } = action.payload;

      const courseIndex = allYears[yearId].allSems[semId].courseIds.findIndex((element) => element === courseId);
      if (courseIndex === -1) {
        return state;
      } else {
        allYears[yearId].allSems[semId].courseIds.splice(courseIndex, 1);
        return Object.assign({}, state, { allYears });
      }
    }
    default:
      return state;
  }
}
