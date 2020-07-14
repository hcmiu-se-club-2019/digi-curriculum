import * as Type from "./action";

import fetchState from "./data";

const initState = {};

export default function curriculums(state = initState, action) {
  switch (action.type) {
    case Type.RECEIVE_CURRICULUMS:
      return Object.assign({}, state, { ...fetchState });
    case Type.DRAG_COURSE: {
      const { source, destination } = action.payload;

      // If course is dropped out of the box or nothing changed, return current state
      if (!destination) return state;
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      )
        return state;

      const startYear = source.droppableId.split("-")[0];
      const startSem = source.droppableId.split("-")[1];
      const endYear = destination.droppableId.split("-")[0];
      const endSem = destination.droppableId.split("-")[1];

      // Prevent mutation
      let newState = Object.assign({}, state);
      const startColumn = Object.assign(
        {},
        state.years[startYear].semesters[startSem]
      );

      const endColumn = Object.assign(
        {},
        state.years[endYear].semesters[endSem]
      );

      // Pop out course from old semester column, set new popped course state
      startColumn.courseIds.splice(source.index, 1);
      newState = {
        ...newState,
        years: {
          ...newState.years,
          [startYear]: {
            ...newState.years[startYear],
            semesters: {
              ...newState.years[startYear].semesters,
              [startSem]: startColumn,
            },
          },
        },
      };

      // Insert the dragged course to new semester, set new inserted course state
      endColumn.courseIds.splice(
        destination.index,
        0,
        action.payload.draggableId
      );
      newState = {
        ...newState,
        years: {
          ...newState.years,
          [endYear]: {
            ...newState.years[endYear],
            semesters: {
              ...newState.years[endYear].semesters,
              [endSem]: endColumn,
            },
          },
        },
      };
      return newState;
    }
    default:
      return state;
  }
}
