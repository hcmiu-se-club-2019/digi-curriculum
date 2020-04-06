export const GET_CURRICULUM = "GET_CURRICULUM";
export const FIND_CURRICULUMS = "FIND_CURRICULUMS";

export function getCurriculum(
  majorId,
  subMajorId,
  programTypeId,
  englishEntranceId
) {
  return {
    type: GET_CURRICULUM,
    payload: {
      majorId,
      subMajorId,
      programTypeId,
      englishEntranceId,
    },
  };
}

export function findCurriculums(
  majorId,
  subMajorId,
  programTypeId,
  englishEntranceId = null
) {
  return {
    type: FIND_CURRICULUMS,
    payload: {
      majorId,
      subMajorId,
      programTypeId,
      englishEntranceId,
    },
  };
}
