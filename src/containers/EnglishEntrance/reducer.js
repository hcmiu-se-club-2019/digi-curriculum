import { GET_ENGLIGH_ENTRANCE } from "./action";

const initState = [];
const fetchState = [
  {
    id: "lv1",
    ieltsFrom: 0,
    ieltsTo: 3.5,
    toeflFrom: 0,
    toeflTo: 150
  },
  {
    id: "lv2",
    ieltsFrom: 5,
    ieltsTo: 6.5,
    toeflFrom: 430,
    toeflTo: 500
  },
  {
    id: "lv3",
    ieltsFrom: 6.5,
    ieltsTo: 9.0,
    toeflFrom: 430,
    toeflTo: 500
  }
];

export default function englishEntrance(state = initState, action) {
  switch (action.type) {
    case GET_ENGLIGH_ENTRANCE:
      return Object.assign({}, fetchState);
    default:
      return state;
  }
}
