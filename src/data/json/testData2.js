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
      id: "IT090IU",
      name: "Object-Oriented Analysis and Design",
      specialization: false,
      requirement: true,
      core: true,
      elective: false,
      credit: 4,
      prerequisties: ["IT103IU"],
      textbook: "An Introduction to Object-Oriented Systems Analysis and Design with UML and the Unified Process - Stephen R. Schach",
      refs: [
        "Applying UML and Patterns – An introduction to Object-Oriented Analysis And Design - Craig Larman"
      ],
      description: [
        "This course help students learn about system life cycle development and the knowledge and skills required to develop object-oriented system. The course tries to solve the following questions:",
        "What are design approaches other than object-oriented design? What is object-oriented design?",
        "What is a good design? How do you differentiate between a good and a bad design? What are the important characteristics of a good design?"
      ],
      objectives: [
        "Use UML to describe system artefacts",
        "Know how to get requirements from customers",
        "Identify client needs based on a written or verbal specification",
        "Know how analyze and design a system with object-oriented concepts and design patterns",
        "Learn how to write a technical report and work in a team"
      ],
      outcomes: [
        {
          name: 'Knowledge',
          outs: [
            {
              courseOut: 'Use UML to describe system artefacts',
              programOut: '(a) an ability to apply knowledge of mathematics, science, and engineering'
            },
            {
              courseOut: 'Know how to get requirements from customers',
              programOut: '(c) an ability to design a system, component, or process to meet desired needs within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability, and sustainability'
            },
            {
              courseOut: 'Identify client needs based on a written or verbal specification',
              programOut: '(b) an ability to design and conduct experiments, as well as to analyze and interpret data'
            }
          ]
        },
        {
          name: 'Skill',
          outs: [
            {
              courseOut: 'Know how analyze and design a system with object-oriented concepts and design patterns',
              programOut: '(i) a recognition of the need for, and an ability to engage in life-long learning'
            },
            {
              courseOut: 'Learn how to write a technical report and work in a team',
              programOut: '(k) an ability to use the techniques, skills, and modern engineering tools necessary for engineering practice'
            }
          ]
        },
        {
          name: 'Attitude',
          outs: [
            {
              courseOut: 'To develop life-long learning attitude',
              programOut: '(i) a recognition of the need for, and an ability to engage in life-long learning'
            }
          ]
        }
      ],
      implementation: {
        times: [
          {
            type: 'Theory',
            weekNum: 15,
            periodsPerWeek: 3
          },
          {
            type: 'Practice',
            weekNum: 8,
            periodsPerWeek: 4
          }
        ],
        activities: [
          {
            type: 'Classroom activities',
            forms: 'Lectures, discussions, exercises/quizzes, presentations'
          },
          {
            type: 'Self-learning',
            forms: 'Reading, homework'
          },
          {
            type: 'Team work',
            forms: 'Project assignment'
          },
          {
            type: 'Lab sessions',
            forms: null
          }
        ],
        outlines: [
          {
            week: 1, topics: [
              'Chapter 0: Introduction',
              'Chapter 1: Modeling and Development Processes'
            ]
          },
          { week: 2, topics: [ 'Chapter 2: Requirements & Use Case Modeling' ] },
          { week: 3, topics: [ 'Chapter 3: Class Diagrams' ] },
          { week: 4, topics: [ 'Chapter 4: Finding Classes and Relationships' ] },
          { week: 5, topics: [ 'Chapter 5: Analysis to Design ' ] },
          { week: 6, topics: [ 'Chapter 6: Atomic Use Cases' ] },
          { week: 7, topics: [ 'Mid–term Exam' ] },
          { week: 8, topics: [ 'Chapter 7: Prototyping' ] },
          { week: 9, topics: [ 'Chapter 8: Interaction Diagrams' ] },
          { week: 10, topics: [ 'Chapter 9: State Machines' ] },
          { week: 11, topics: [ 'Chapter 10: Activity Diagrams' ] },
          { week: 12, topics: [ 'Chapter 11: Other Diagrams' ] },
          {
            week: 13, topics: [ 
              'Chapter 12: OCL',
              'Chapter 13: Other Modeling Techniques'
            ]
          },
          {
            week: 14, topics: [
              'Chapter 14: Software Development Methods',
              'Chapter 15: Revision'
            ]
          },
          { week: 15, topics: [ 'Final exam' ] }
        ]
      }
    },
    {
      id: "IT101IU",
      name: "Data Structures and Algorithms",
      specialization: false,
      requirement: true,
      core: true,
      elective: false,
      credit: 4,
      prerequisties: [],
      textbook: "",
      refs: [

      ],
      description: [],
      objectives: [],
      outcomes: [],
      implementation: {
        outlines: []
      }
    },
    {
      id: "IT102IU",
      name: "Web Application",
      specialization: true,
      requirement: true,
      core: false,
      elective: false,
      credit: 4,
      prerequisties: ["IT101IU", "IT103IU"],
      textbook: "Data Structures and Algorithms Made Easy - Narasimha Karumanchi",
      refs: [
        "Data Structure and Algorithmic Puzzles - Narasimha Karumanchi",
        "Data Structures and Algorithms in C++ - Adam Drozdek",
        "Introduction to Algorithms - Thomas H. Corman"
      ],
      description: [],
      objectives: [],
      outcomes: [],
      implementation: {
        outlines: []
      }
    },
    {
      id: "IT103IU",
      name: "C/C++ programming",
      specialization: false,
      requirement: true,
      core: true,
      elective: false,
      credit: 4,
      prerequisties: [],
      textbook: "",
      refs: [

      ],
      description: [],
      objectives: [],
      outcomes: [],
      implementation: {
        outlines: []
      }
    },
    {
      id: "FFFFFFF",
      name: "Testing course",
      specialization: false,
      requirement: false,
      core: false,
      elective: false,
      credit: 1,
      prerequisties: ["IT102IU"],
      textbook: "",
      refs: [

      ],
      description: [],
      objectives: [],
      outcomes: [],
      implementation: {
        outlines: []
      }
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
