import { connect } from 'react-redux';

import index from './index';
import * as coursesAction from '../../../../redux/courses/action';

const mapStateToProps = (state, ownProps) => {
  const { allCourses } = state.courses;
  const { courseId } = ownProps;
  const { name, id, credit, isSelected, isSelectedTemp } = allCourses[courseId];
  return {
    name,
    id,
    credit,
    isSelected,
    isSelectedTemp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCourse: (courseId) => dispatch(coursesAction.selectCourse(courseId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
