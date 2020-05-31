const data = {
  years: {
    year1: {
      id: 1,
      semesters: {
        sem1: {
          id: 1,
          courseIds: ["IT101IU", "IT102IU", "IT103IU", "IT104IU", "IT105IU"],
        },
        sem2: {
          id: 2,
          courseIds: [
            "IT101IU",
            "IT102IU",
            "IT103IU",
            "IT104IU",
            "IT105IU",
            "IT106IU",
            "IT107IU",
          ],
        },
        sem3: {
          id: 3,
          courseIds: ["IT101IU", "IT102IU", "IT103IU"],
        },
      },
      semOrder: ["sem1", "sem2", "sem3"],
    },
    year2: {
      id: 2,
      semesters: {
        sem1: {
          id: 1,
          courseIds: ["IT101IU", "IT102IU", "IT103IU"],
        },
        sem2: {
          id: 2,
          courseIds: ["IT101IU", "IT102IU", "IT103IU"],
        },
        sem3: {
          id: 3,
          courseIds: ["IT101IU", "IT102IU", "IT103IU"],
        },
      },
      semOrder: ["sem1", "sem2", "sem3"],
    },
    year3: {
      id: 3,
      semesters: {
        sem1: {
          id: 1,
          courseIds: ["IT101IU", "IT102IU", "IT103IU"],
        },
        sem2: {
          id: 2,
          courseIds: ["IT101IU", "IT102IU", "IT103IU"],
        },
        sem3: {
          id: 3,
          courseIds: ["IT101IU", "IT102IU", "IT103IU"],
        },
      },
      semOrder: ["sem1", "sem2", "sem3"],
    },
    year4: {
      id: 4,
      semesters: {
        sem1: {
          id: 1,
          courseIds: ["IT101IU", "IT102IU", "IT103IU"],
        },
        sem2: {
          id: 2,
          courseIds: ["IT101IU", "IT102IU", "IT103IU"],
        },
        sem3: {
          id: 3,
          courseIds: ["IT101IU", "IT102IU", "IT103IU"],
        },
      },
      semOrder: ["sem1", "sem2", "sem3"],
    },
  },
  yearOrder: ["year1", "year2", "year3", "year4"],
};

export default data;
