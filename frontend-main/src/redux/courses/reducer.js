import cloneDeep from 'lodash/cloneDeep';
import pick from 'lodash/pick';
// import isEqual from 'lodash/isEqual';

import * as Type from './constants';
import { getRandomData } from './mockCourseGenerator';

const initState = {
  allMajors: {},
  allMajorIds: [],
  allCourses: {},
  allCourseIds: [],
  errorLog: null,
  isFetching: false,
  // selectedCourseIds: [],
  selectedCourseIdsPlaceholder: [],
};

export default function courses(state = initState, action) {
  switch (action.type) {
    case Type.CLEAR_DATA: {
      return initState;
    }
    case Type.GENERATE_RANDOM_COURSE_DATA: {
      const { allMajors, allMajorIds, allCourses, allCourseIds } = getRandomData();
      return Object.assign({}, state, {
        allMajors,
        allMajorIds,
        allCourses,
        allCourseIds,
      });
    }
    case Type.SELECT_COURSE: {
      const selectedCourseIdsPlaceholder = cloneDeep(state.selectedCourseIdsPlaceholder);
      const allCourses = state.allCourses;
      const { courseId } = action.payload;

      const courseIndex = selectedCourseIdsPlaceholder.findIndex((element) => element === courseId);
      const course = cloneDeep(allCourses[courseId]);

      if (courseIndex === -1) {
        selectedCourseIdsPlaceholder.push(courseId);
        course.isSelectedTemp = true;
      } else {
        selectedCourseIdsPlaceholder.splice(courseIndex, 1);
        course.isSelectedTemp = false;
      }

      const newState = {
        selectedCourseIdsPlaceholder,
        allCourses: {
          ...allCourses,
          [courseId]: {
            ...course,
            isSelectedTemp: course.isSelectedTemp,
          },
        },
      };

      // console.log(isEqual(state, newState));

      return Object.assign({}, state, {
        ...newState,
      });
    }
    case Type.REMOVE_SELECTED_COURSE: {
      const selectedCourseIdsPlaceholder = cloneDeep(state.selectedCourseIdsPlaceholder);
      const allCourses = state.allCourses;
      const { courseId } = action.payload;

      const courseIndex = selectedCourseIdsPlaceholder.findIndex((element) => element === courseId);
      const course = cloneDeep(allCourses[courseId]);

      selectedCourseIdsPlaceholder.splice(courseIndex, 1);

      const newState = {
        selectedCourseIdsPlaceholder,
        allCourses: {
          ...allCourses,
          [courseId]: {
            ...course,
            isSelected: false,
            isSelectedTemp: false,
          },
        },
      };
      return Object.assign({}, state, {
        ...newState,
      });
    }
    case Type.REMOVE_SELECTED_COURSES: {
      const { allCourses } = state;
      const { courseIds } = action.payload;

      const filteredCourses = cloneDeep(pick(allCourses, courseIds));
      courseIds.forEach((courseId) => {
        filteredCourses[courseId].isSelected = false;
        filteredCourses[courseId].isSelectedTemp = false;
      });
      
      return Object.assign({}, state, {
        allCourses: {
          ...allCourses,
          ...filteredCourses,
        },
      });
    }
    case Type.SELECT_COURSES: {
      const selectedCourseIdsPlaceholder = cloneDeep(state.selectedCourseIdsPlaceholder);
      const allCourses = cloneDeep(state.allCourses);
      const { courseIds } = action.payload;

      selectedCourseIdsPlaceholder.push(...courseIds);
      courseIds.forEach((courseId) => {
        allCourses[courseId].isSelectedTemp = true;
      });

      return Object.assign({}, state, { selectedCourseIdsPlaceholder, allCourses });
    }
    case Type.ADD_COURSES: {
      const { selectedCourseIdsPlaceholder } = state;
      const allCourses = cloneDeep(state.allCourses);

      selectedCourseIdsPlaceholder.forEach((courseId) => {
        const course = allCourses[courseId];
        course.isSelected = true;
        course.isSelectedTemp = false;
      });

      const newState = {
        ...state,
        selectedCourseIdsPlaceholder: [],
        allCourses: allCourses,
      };

      // console.log(isEqual(state, newState));

      return Object.assign({}, state, { ...newState });
    }
    default:
      return state;
  }
}
