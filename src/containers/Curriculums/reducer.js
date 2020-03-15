import { GET_CURRICULUMS } from "./action";

const initState = [];
const fetchState = [
  {
    subMajorId: "DS",
    programTypeId: "IU",
    englishEntranceid: "lv1",
    years: [
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"],
        sem2: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"],
        sem3: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"]
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"],
        sem2: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"],
        sem3: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"]
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"],
        sem2: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"],
        sem3: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"]
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"],
        sem2: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"],
        sem3: ["FFFFFFF", "FFFFFFF", "FFFFFFF", "FFFFFFF"]
      }
    ],
    electiveCourses: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"]
  }
];

export default function curriculums(state = initState, action) {
  switch (action.payload) {
    case GET_CURRICULUMS:
      return Object.assign({}, fetchState);
    default:
      return state;
  }
}
