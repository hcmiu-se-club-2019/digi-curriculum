import { SELECT_MAJOR, SELECT_PROGRAM_TYPE, SELECT_SUB_MAJOR } from "./action";

const initState = {
  selectedMajorId: null,
  selectedMajorName: null,
  selectedSubMajorId: null,
  selectedProgramTypeId: null
};

export default function homeSelector(state = initState, action) {
  switch (action.type) {
    case SELECT_MAJOR: {
      return Object.assign({}, state, {
        selectedMajorId: action.payload.id,
        selectedMajorName: action.payload.name
      });
    }
    case SELECT_SUB_MAJOR: {
      return Object.assign({}, state, {
        selectedSubMajorId: action.payload
      });
    }
    case SELECT_PROGRAM_TYPE:
      return Object.assign({}, state, {
        selectedProgramTypeId: action.payload
      });
    default:
      return state;
  }
}
