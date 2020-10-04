const state = {
  subMajors: {
    byId: {
      "CS": {
        id: "CS",
        name: "Computer Science"
      },
      "CE": {
        id: "CE",
        name: "Computer Engineering"
      },
      "NE": {
        id: "NE",
        name: "Network Engineering"
      },
      "DS": {
        id: "DS",
        name: "Data Science"
      }
    },
    allIds: ["CS", "CE", "NE", "DS"]
  },
  programTypes: {
    byId: {
      "IU": {
        id: "IU",
        name: "International University"
      },
      "WE": {
        id: "WE",
        name: "West of England University"
      },
      "UN": {
        id: "UN",
        name: "Nottingham University"
      },
      "SB": {
        id: "SB",
        name: "SUNY Binghamton University"
      }
    },
    allIds: ["IU", "WE", "UN", "SB"]
  },
  englishEntrances: {
    byId: {
      "lv1": {
        id: "lv1",
        ieltsFrom: 0,
        ieltsTo: 3.5,
        toeflFrom: 0,
        toeflTo: 150
      },
      "lv2": {
        id: "lv2",
        ieltsFrom: 5,
        ieltsTo: 6.5,
        toeflFrom: 430,
        toeflTo: 500
      },
      "lv3": {
        id: "lv3",
        ieltsFrom: 6.5,
        ieltsTo: 9.0,
        toeflFrom: 430,
        toeflTo: 500
      }
    },
    allIds: ["lv1", "lv2", "lv3"]
  },
  subMajorPrograms: {
    byId: [
      {
        id: "CSIU",
        subMajorId: "CS",
        programTypeId: "IU",
        name: "Computer Science for IU students"
      },
      {
        id: "DSIU",
        subMajorId: "DS",
        programTypeId: "IU",
        name: "Data Science for IU students"
      },
      {
        id: "CEWE",
        subMajorId: "CE",
        programTypeId: "WE",
        name: "Computer Engineering for WE students"
      },
      {
        id: "NEUN",
        subMajorId: "NE",
        programTypeId: "UN",
        name: "Network Engineering for UN students"
      },
      {
        id: "DSSB",
        subMajorId: "DS",
        programTypeId: "SB",
        name: "Data Science for SB students"
      }
    ],
    allIds: ["CSIU", "DSIU", "CEWE", "NEUN", "DSSB"]
  },
  curriculums: [
    {
      subMajorProgramId: "CSIU",
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
    },
    // Another curriculum
  ],
  courses: {
    byId: {
      "IT101IU": {
        id: "IT101IU",
        name: "Data Structures and Algorithms",
        credit: 4,
        prerequisties: []
      },
      "IT102IU": {
        id: "IT102IU",
        name: "Web Application",
        credit: 4,
        prerequisties: ["IT101IU", "IT103IU"]
      },
      "IT103IU": {
        id: "IT103IU",
        name: "C/C++ programming",
        credit: 4,
        prerequisties: []
      },
      "FFFFFFF": {
        id: "FFFFFFF",
        name: "Testing course",
        credit: 1,
        prerequisties: ["IT102IU"]
      }
    },
    allIds: ["IT101IU", "IT102IU", "IT103IU", "FFFFFFF"]
  }
};

export default state;