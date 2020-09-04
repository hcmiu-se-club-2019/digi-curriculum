import { GET_MAJORS } from "./action";

const initState = [];

const fetchState = [
  {
    id: "IT",
    name: "Information Technology"
  },
  {
    id: "BA",
    name: "Business Administration"
  },
  {
    id: "EE",
    name: "Electrical Engineering"
  },
  {
    id: "BME",
    name: "Bio Medical Engineering"
  }
];

export default function majors(state = initState, action) {
  switch (action.type) {
    case GET_MAJORS: {
      // console.log(Object.assign([], [...fetchState]))
      return Object.assign([], [...fetchState]);
    }
    default:
      return state;
  }
}
