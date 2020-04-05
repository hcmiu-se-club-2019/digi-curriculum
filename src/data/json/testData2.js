const state = {
  subMajors: [
      {
        id: "CS",
        name: "Computer Science"
      },
      {
        id: "CE",
        name: "Computer Engineering"
      },
      {
        id: "NE",
        name: "Network Engineering"
      },
      {
        id: "DS",
        name: "Data Science"
      }
  ],
  programTypes: [
      {
        id: "IU",
        name: "International University",
        subMajorIds: ["CS", "NE", "DS"]
      },
      {
        id: "WE",
        name: "West of England University",
        subMajorIds: ["CS", "NE", "DS", "CE"]
      },
      {
        id: "UN",
        name: "Nottingham University",
        subMajorIds: ["CS", "NE", "CE"]
      },
      {
        id: "SB",
        name: "SUNY Binghamton University",
        subMajorIds: ["CE", "NE", "DS"]
      }
  ],
  englishEntrances: [
      {
        id: "lv1",
        name: "Intensive English 1",
        monogram: "IE1",
        ieltsFrom: 0,
        ieltsTo: 3.5,
        toeflFrom: 0,
        toeflTo: 150
      },
      {
        id: "lv2",
        name: "Intensive English 2",
        monogram: "IE2",
        ieltsFrom: 5,
        ieltsTo: 6.5,
        toeflFrom: 430,
        toeflTo: 500
      },
      {
        id: "lv3",
        name: "Academic English 1",
        monogram: "AE1",
        ieltsFrom: 6.5,
        ieltsTo: 9.0,
        toeflFrom: 430,
        toeflTo: 500
      }
  ],
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
  courses: [
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
    },
    {
      id: "FFFFFFF",
      name: "Testing course",
      credit: 1,
      prerequisties: ["IT102IU"]
    }
  ],
  externalLinks: [
    {
      id:'linkedin',
      url:'https://www.linkedin.com/school/international-university-vnu/'
    },
    {
      id:'facebook',
      url:'https://www.facebook.com/IUVNUHCMC'
    },
    {
      id:'youtube',
      url:'https://www.youtube.com/channel/UCTBixlLRDIIlpmR_Y7wmI3w'
    }
  ]
};

export default  state;
