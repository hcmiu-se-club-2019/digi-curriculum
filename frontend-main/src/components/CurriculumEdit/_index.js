import { connect } from 'react-redux';

import index from './index';
import * as coursesAction from '../../redux/courses/action';
import * as curriculumAction from '../../redux/curriculums/action';

function bulkDispatch() {
  return async (dispatch, getState) => {
    const actions1 = () => {
      dispatch(coursesAction.clearData());
      dispatch(curriculumAction.clearData());
    };
    
    const actions2 = async () => {
      await dispatch(coursesAction.generateRandomData());
      const { allCourses, allCourseIds } = getState().courses;
      await dispatch(curriculumAction.generateRandomData(allCourses, allCourseIds));
    };
    
    const actions3 = () => {
      const { allYears, allYearIdsOrder } = getState().curriculums;
      let courseIdsPlaceholder = [];
      
      allYearIdsOrder.forEach((yearId) => {
        const year = allYears[yearId];
        const { allSems, allSemIdsOrder } = year;
        
        allSemIdsOrder.forEach((semId) => {
          const semester = allSems[semId];
          courseIdsPlaceholder.push(...semester.courseIds);
        });
      });
      dispatch(coursesAction.selectCourses(courseIdsPlaceholder));
      dispatch(coursesAction.addCourses());
    };
    
    await actions1();
    await actions2();
    await actions3();
  };
}

const mapStateToProps = (state, ownProps) => {
  const { errorLog: coursesErrorLog, isFetching: isCoursesFetching } = state.courses;
  const { errorLog: curriculumErrorLog, isFetching: isCurriculumFetching, allYearIdsOrder } = state.curriculums;
  const yearCount = allYearIdsOrder.length;
  return {
    coursesErrorLog,
    curriculumErrorLog,
    isCoursesFetching,
    isCurriculumFetching,
    yearCount,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    bulkDispatch: () => dispatch(bulkDispatch()),
    dragYear: (result, provider) => dispatch(curriculumAction.dragYear(result, provider)),
    dragCourse: (result, provider) => dispatch(curriculumAction.dragCourse(result, provider)),
    checkCurriculum: () => dispatch(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
