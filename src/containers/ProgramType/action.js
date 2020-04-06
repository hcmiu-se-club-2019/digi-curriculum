// import { store } from "../../index";

export const GET_PROGRAM_TYPES = "GET_PROGRAM_TYPES";
export const GET_PROGRAM_TYPES_BY_SUB_MAJOR = "GET_PROGRAM_TYPES_BY_SUB_MAJOR";

export function getProgramTypes() {
  return {
    type: GET_PROGRAM_TYPES
  };
}

export function getProgramTypesBySubMajor(programTypeIds) {
  // console.log("ACTION: " + programTypeIds);
  // const subMajors = store.getState().subMajors;
  
  return {
    type: GET_PROGRAM_TYPES_BY_SUB_MAJOR,
    payload: programTypeIds
  };
}
