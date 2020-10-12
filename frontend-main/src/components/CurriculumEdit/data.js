const data = {
  majorId: 'IT',
  subMajorId: 'DS',
  programTypeId: 'IU',
  englishLevel: 'IE1',
  years: {
    year1: {
      id: 'year1',
      semesters: {
        sem1: {
          id: 1,
          courseIds: ['IT101IU', 'IT102IU', 'IT103IU', 'IT104IU', 'IT105IU'],
        },
        sem2: {
          id: 2,
          courseIds: ['IT106IU', 'IT107IU', 'IT108IU', 'IT109IU', 'IT110IU', 'IT111IU', 'IT112IU'],
        },
        sem3: {
          id: 3,
          courseIds: ['IT113IU', 'IT114IU', 'IT115IU'],
        },
      },
      semOrder: ['sem1', 'sem2', 'sem3'],
    },
    year2: {
      id: 'year2',
      semesters: {
        sem1: {
          id: 1,
          courseIds: ['IT116IU', 'IT117IU', 'IT118IU', 'IT119IU', 'IT120IU'],
        },
        sem2: {
          id: 2,
          courseIds: ['IT121IU', 'IT122IU', 'IT123IU', 'IT124IU', 'IT125IU'],
        },
        sem3: {
          id: 3,
          courseIds: ['IT126IU'],
        },
      },
      semOrder: ['sem1', 'sem2', 'sem3'],
    },
    year3: {
      id: 'year3',
      semesters: {
        sem1: {
          id: 1,
          courseIds: ['IT127IU', 'IT128IU', 'IT129IU', 'IT130IU', 'IT131IU', 'IT132IU'],
        },
        sem2: {
          id: 2,
          courseIds: ['IT133IU', 'IT134IU', 'IT135IU', 'IT136IU', 'IT137IU'],
        },
        sem3: {
          id: 3,
          courseIds: ['IT138IU', 'IT139IU', 'IT140IU'],
        },
      },
      semOrder: ['sem1', 'sem2', 'sem3'],
    },
    year4: {
      id: 'year4',
      semesters: {
        sem1: {
          id: 1,
          courseIds: ['IT141IU', 'IT142IU', 'IT143IU', 'IT144IU', 'IT145IU'],
        },
        sem2: {
          id: 2,
          courseIds: ['IT146IU', 'IT147IU', 'IT148IU'],
        },
        sem3: {
          id: 3,
          courseIds: ['IT149IU'],
        },
      },
      semOrder: ['sem1', 'sem2', 'sem3'],
    },
  },
  yearOrder: ['year1', 'year2', 'year3', 'year4'],
};

export default data;
