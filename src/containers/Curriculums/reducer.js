import { GET_CURRICULUM, FIND_CURRICULUMS } from "./action";

const initState = [];
const fetchState = [
  {
    majorId: "IT",
    subMajorId: "CS",
    programTypeId: "IU",
    englishEntranceId: "IE1",
    years: [
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU"],
        sem2: [
          "IT101IU",
          "IT102IU",
          "IT101IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
        ],
        sem3: ["IT101IU", "IT102IU", "IT101IU"],
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU"],
        sem2: [
          "IT101IU",
          "IT102IU",
          "IT101IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
        ],
        sem3: ["IT101IU", "IT102IU", "IT101IU"],
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU"],
        sem2: [
          "IT101IU",
          "IT102IU",
          "IT101IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
        ],
        sem3: ["IT101IU", "IT102IU", "IT101IU"],
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU"],
        sem2: [
          "IT101IU",
          "IT102IU",
          "IT101IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
        ],
        sem3: ["IT101IU", "IT102IU", "IT101IU"],
      },
    ],
    electiveCourses: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"],
  },
  {
    majorId: "IT",
    subMajorId: "DS",
    programTypeId: "IU",
    englishEntranceId: "AE1",
    years: [
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU"],
        sem2: [
          "IT101IU",
          "IT102IU",
          "IT101IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
        ],
        sem3: ["IT101IU", "IT102IU", "IT101IU"],
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU"],
        sem2: [
          "IT101IU",
          "IT102IU",
          "IT101IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
        ],
        sem3: ["IT101IU", "IT102IU", "IT101IU"],
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU"],
        sem2: [
          "IT101IU",
          "IT102IU",
          "IT101IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
        ],
        sem3: ["IT101IU", "IT102IU", "IT101IU"],
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", null],
        sem2: ["IT101IU", "IT102IU", null, null],
        sem3: [],
      },
    ],
    electiveCourses: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"],
  },
  {
    majorId: "IT",
    subMajorId: "DS",
    programTypeId: "IU",
    englishEntranceId: "IE1",
    years: [
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU"],
        sem2: [
          "IT101IU",
          "IT102IU",
          "IT101IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
        ],
        sem3: ["IT101IU", "IT102IU", "IT101IU"],
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU"],
        sem2: [
          "IT101IU",
          "IT102IU",
          "IT101IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
        ],
        sem3: ["IT101IU", "IT102IU", "IT101IU"],
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU"],
        sem2: [
          "IT101IU",
          "IT102IU",
          "IT101IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
        ],
        sem3: ["IT101IU", "IT102IU", "IT101IU"],
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU"],
        sem2: [
          "IT101IU",
          "IT102IU",
          "IT101IU",
          "IT102IU",
          "IT102IU",
          null,
          null,
        ],
        sem3: ["IT101IU", "IT102IU", null],
      },
    ],
    electiveCourses: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"],
  },
  {
    majorId: "IT",
    subMajorId: "DS",
    programTypeId: "IU",
    englishEntranceId: "IE2",
    years: [
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU"],
        sem2: [
          "IT101IU",
          "IT102IU",
          "IT101IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
        ],
        sem3: ["IT101IU", "IT102IU", "IT101IU"],
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU"],
        sem2: [
          "IT101IU",
          "IT102IU",
          "IT101IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
        ],
        sem3: ["IT101IU", "IT102IU", "IT101IU"],
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU"],
        sem2: [
          "IT101IU",
          "IT102IU",
          "IT101IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
          "IT102IU",
        ],
        sem3: ["IT101IU", "IT102IU", "IT101IU"],
      },
      {
        sem1: ["IT101IU", "IT102IU", "IT101IU", null],
        sem2: ["IT101IU", "IT102IU", "IT101IU", "IT102IU", "IT102IU", null],
        sem3: ["IT101IU", "IT102IU", null],
      },
    ],
    electiveCourses: ["IT101IU", "IT102IU", "IT101IU", "IT102IU"],
  },
];

export default function curriculums(state = initState, action) {
  switch (action.type) {
    case GET_CURRICULUM: {
      const {
        majorId,
        subMajorId,
        programTypeId,
        englishEntranceid: englishEntranceId,
      } = action.payload;
      const curriculum = fetchState.find(
        (curriculum) =>
          curriculum.majorId === majorId &&
          curriculum.subMajorId === subMajorId &&
          curriculum.programTypeId === programTypeId &&
          curriculum.englishEntranceId === englishEntranceId
      );
      console.log("FOUND: ");
      console.log(curriculum);
      // const result = Object.assign([], [...curriculum]);
      // console.log(result)
      return Object.assign([], [...state], curriculum);
    }
    case FIND_CURRICULUMS: {
      // console.log("FIND CURRICULUM:");
      // console.log(action.payload);
      const {
        majorId,
        subMajorId,
        programTypeId,
        englishEntranceId,
      } = action.payload;
      // console.log("RESULT");
      const result = fetchState.filter(
        (curriculum) =>
          curriculum.majorId === majorId &&
          curriculum.subMajorId === subMajorId &&
          curriculum.programTypeId === programTypeId &&
          (englishEntranceId
            ? curriculum.englishEntranceId === englishEntranceId
            : true)
      );
      result.sort((a, b) => {
        let countA = 0,
          countB = 0;
        a.years.forEach((year) => {
          countA += year.sem1.length + year.sem2.length + year.sem3.length;
        });
        b.years.forEach((year) => {
          countB += year.sem1.length + year.sem2.length + year.sem3.length;
        });
        // console.log("COUNT A: " + countA);
        // console.log("COUNT B: " + countB);
        return countB - countA;
      });
      // console.log(result);
      return Object.assign([], [...result]);
    }
    default:
      return state;
  }
}
