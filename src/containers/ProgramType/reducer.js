import { GET_PROGRAM_TYPES } from "./action";

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
    default:
      return state;
  }
}
