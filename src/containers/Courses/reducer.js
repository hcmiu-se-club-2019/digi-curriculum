import { GET_COURSES } from "./action";

const initState = [];
const fetchState = [
  {
    id: "IT101IU",
    name: "Data Structures and Algorithms",
    credit: 4,
    prerequisties: []
  },
  {
    id: "IT102IU",
    name: "Web Application",
    credit: 4,
    prerequisties: ["IT101IU", "IT103IU"]
  },
  {
    id: "IT103IU",
    name: "C/C++ programming",
    credit: 4,
    prerequisties: []
  }
];

export default function courses(state = initState, action) {
  switch (action.type) {
    case GET_COURSES: {
      return Object.assign({}, fetchState);
    }
    default:
      return state;
  }
}
