import { GET_COURSES } from "./action";

const initState = [];
const fetchState = [
  {
    id: "IT101IU",
    name: "Data Structures and Algorithms",
    majors: "IT",
    credit: 4,
    prerequisites: [],
    selected: false
  },
  {
    id: "IT102IU",
    name: "Web Application",
    majors: "IT",
    credit: 4,
    prerequisites: ["IT101IU", "IT103IU"],
    selected: false
  },
  {
    id: "IT103IU",
    name: "C/C++ Programming",
    majors: "BA",
    credit: 4,
    prerequisites: [],
    selected: false
  },
  {
    id: "IT104IU",
    name: "Revolutionary Lines of Vietnamese Communist Party",
    majors: "EE",
    credit: 2,
    prerequisites: [],
    selected: false
  },
  {
    id: "IT104IU",
    name: "Revolutionary Lines of Vietnamese Communist Party",
    credit: 2,
    prerequisites: [],
    selected: false
  },
  {
    id: "IT105IT",
    name: "Military Education",
    credit: 0,
    prerequisites: [],
    selected: false
  },
];

export default function courses(state = initState, action) {
  switch (action.type) {
    case GET_COURSES: {
      return Object.assign([], [...fetchState]);
    }
    default:
      return state;
  }
}
