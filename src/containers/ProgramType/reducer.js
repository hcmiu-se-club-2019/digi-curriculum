// import { StateFromReducersMapObject } from "redux";
import { GET_PROGRAM_TYPES, GET_PROGRAM_TYPES_BY_SUB_MAJOR } from "./action";

const initState = [];
const fetchState = [
  {
    id: "IU",
    name: "International University"
  },
  {
    id: "WE",
    name: "West of England University"
  },
  {
    id: "UN",
    name: "Nottingham University"
  },
  {
    id: "SB",
    name: "SUNY Binghamton University"
  }
];

export default function programType(state = initState, action) {
  switch (action.type) {
    case GET_PROGRAM_TYPES: {
      return Object.assign({}, fetchState);
    }
    case GET_PROGRAM_TYPES_BY_SUB_MAJOR: {
      // console.log(action.payload);
      const inputList = [...action.payload];
      const getSelectedProgramTypes = inputList.map(subMajorId =>
        fetchState.find(programType => programType.id === subMajorId)
      );
      // console.log(getSelectedProgramTypes);

      // return Object.assign([], getSelectedProgramTypes);
      return getSelectedProgramTypes
    }
    default:
      return state;
  }
}
