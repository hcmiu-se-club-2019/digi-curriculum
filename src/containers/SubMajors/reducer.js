import { GET_SUB_MAJORS } from "./action";

const initState = [];
const fetchState = [
  {
    id: "CS",
    name: "Computer Science"
  },
  {
    id: "NE",
    name: "Network Engineering"
  },
  {
    id: "DS",
    name: "Data Science"
  }
];

export default function courses(state = initState, action) {
  switch (action.type) {
    case GET_SUB_MAJORS: {
      return Object.assign({}, fetchState);
    }
    default:
      return state;
  }
}
