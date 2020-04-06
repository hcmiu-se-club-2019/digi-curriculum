export const SELECT_MAJOR = 'SELECT_MAJOR';
export const SELECT_SUB_MAJOR = 'SELECT_SUB_MAJOR';
export const SELECT_PROGRAM_TYPE = 'SELECT_PROGRAM_TYPE';

export function selectMajor(major) {
  return {
    type: SELECT_MAJOR,
    payload: major
  }
}

export function selectSubMajor(id) {
  return {
    type: SELECT_SUB_MAJOR,
    payload: id
  }
} 

export function selectProgramType(id) {
  return {
    type: SELECT_PROGRAM_TYPE,
    payload: id
  }
} 
