import { GET_ENGLIGH_ENTRANCES } from "./action";

const initState = [];
const fetchState = [
  {
    id: "IE1",
    name: "Intermediate English 1",
    ieltsFrom: 0,
    ieltsTo: 3.5,
    toeflFrom: 0,
    toeflTo: 150
  },
  {
    id: "IE2",
    name: "Intermediate English 2",
    ieltsFrom: 5,
    ieltsTo: 6.5,
    toeflFrom: 430,
    toeflTo: 500
  },
  {
    id: "AE1",
    name: "Academic English 1",
    ieltsFrom: 6.5,
    ieltsTo: 9.0,
    toeflFrom: 430,
    toeflTo: 500
  }
];

export default function englishEntrances(state = initState, action) {
  switch (action.type) {
    case GET_ENGLIGH_ENTRANCES:
      return Object.assign([], [...fetchState]);
    default:
      return state;
  }
}
