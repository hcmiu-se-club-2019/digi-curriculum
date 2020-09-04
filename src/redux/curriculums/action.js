export const RECEIVE_CURRICULUMS = "RECEIVE_CURRICULUMS";
export const DRAG_COURSE = "DRAG_COURSE";

export function receiveCurriculums() {
  return {
    type: RECEIVE_CURRICULUMS,
  };
}

export function dragCourse(result) {
  return {
    type: DRAG_COURSE,
    payload: result,
  };
}
