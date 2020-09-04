import { GET_SUB_MAJORS, CLEAR_SUB_MAJORS } from "./action";

const initState = [];
const fetchState = [
  {
    major: "IT",
    id: "CS",
    name: "Computer Science",
    programTypeIds: ["IU", "WE", "UN"]
  },
  {
    major: "IT",
    id: "NE",
    name: "Network Engineering",
    programTypeIds: ["IU", "WE", "UN"]
  },
  {
    major: "IT",
    id: "DS",
    name: "Data Science",
    programTypeIds: ["IU", "WE", "UN", "SB"]
  },
  {
    major: "EE",
    id: "ETE",
    name: "Electronics and Telecommunications Engineering",
    programTypeIds: ["IU"]
  },
  {
    major: "EE",
    id: "ACE",
    name: "Automation and Control Engineering",
    programTypeIds: ["IU"]
  }
];

export default function courses(state = initState, action) {
  switch (action.type) {
    case GET_SUB_MAJORS: {
      const result = fetchState.filter(
        subMajor => subMajor.major === action.payload
      );
      return Object.assign(state, [...result]);
    }
    case CLEAR_SUB_MAJORS: {
      return Object.assign([], []);
    }
    default:
      return state;
  }
}
