export const GET_SUB_MAJORS = "GET_SUB_MAJORS";
export const CLEAR_SUB_MAJORS = "CLEAR_SUB_MAJORS";

export function getSubMajors(id) {
  return {
    type: GET_SUB_MAJORS,
    payload: id
  };
}

export function clearSubMajors() {
  return {
    type: CLEAR_SUB_MAJORS
  }
}
