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
          courseIds: ['CH011IU', 'CH012IU', 'EN007IU', 'EN008IU', 'IT135IU', 'MA001IU', 'PE015IU', 'PH013IU', 'PT001IU'],
        },
        sem2: {
          id: 2,
          courseIds: ['EN011IU', 'EN012IU', 'IT136IU', 'IT149IU', 'IT151IU', 'MA003IU', 'PH014IU', 'PT002IU'],
        },
        sem3: {
          id: 3,
          courseIds: [],
        },
      },
      semOrder: ['sem1', 'sem2', 'sem3'],
    },
    year2: {
      id: 'year2',
      semesters: {
        sem1: {
          id: 1,
          courseIds: ['IT069IU', 'IT137IU', 'IT155IU', 'PE014IU', 'PE016IU'],
        },
        sem2: {
          id: 2,
          courseIds: ['IT013IU', 'IT079IU', 'IT090IU', 'IT138IU', 'PE017IU'],
        },
        sem3: {
          id: 3,
          courseIds: [],
        },
      },
      semOrder: ['sem1', 'sem2', 'sem3'],
    },
    year3: {
      id: 'year3',
      semesters: {
        sem1: {
          id: 1,
          courseIds: ['IT139IU', 'IT140IU', 'MA026IU', 'PE008IU', 'PE018IU'],
        },
        sem2: {
          id: 2,
          courseIds: ['IT097IU', 'IT132IU', 'IT142IU', 'ITDS1', 'PE019IU'],
        },
        sem3: {
          id: 3,
          courseIds: ['IT082IU'],
        },
      },
      semOrder: ['sem1', 'sem2', 'sem3'],
    },
    year4: {
      id: 'year4',
      semesters: {
        sem1: {
          id: 1,
          courseIds: ['IT083IU', 'IT143IU', 'ITDS2', 'ITDS3'],
        },
        sem2: {
          id: 2,
          courseIds: ['IT058IU'],
        },
        sem3: {
          id: 3,
          courseIds: [],
        },
      },
      semOrder: ['sem1', 'sem2', 'sem3'],
    },
  },
  yearOrder: ['year1', 'year2', 'year3', 'year4'],
};

export default data;
