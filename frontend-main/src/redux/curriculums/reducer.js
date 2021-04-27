import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';
import faker from 'faker';

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

export default function curriculums(state = initState, action) {
  switch (action.type) {
    case Type.CLEAR_DATA: {
      return initState;
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
    case Type.ADD_YEAR: {
      const { allYears, allYearIdsOrder } = cloneDeep(state);
      const newYearId = 'year' + allYearIdsOrder.length.toString() + faker.random.uuid();
      allYearIdsOrder.push(newYearId);
      allYears[newYearId] = {
        id: newYearId,
        allSems: {},
        allSemIdsOrder: [],
      };

      const currentYear = allYears[newYearId];

      for (let j = 0; j < 3; ++j) {
        const semId = 'sem' + (j + 1).toString();
        currentYear.allSemIdsOrder.push(semId);
        currentYear.allSems[semId] = {
          id: semId,
          courseIds: [],
        };
      }
      return Object.assign({}, state, { allYears, allYearIdsOrder });
    }
    case Type.REMOVE_YEAR: {
      const { allYears } = state;
      const { yearId, yearIndex } = action.payload;

      const allYearIdsOrder = cloneDeep(state.allYearIdsOrder);
      allYearIdsOrder.splice(yearIndex, 1);

      const {
        [yearId]: {},
        ...otherYears
      } = allYears;

      return Object.assign({}, state, { allYearIdsOrder, allYears: { ...otherYears } });
    }
    default:
      return state;
  }
}
