import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import CourseTile from '../../common/CourseTile';
import CourseTileCheckbox from '../../common/CourseTileCheckbox/_index';

class CourseList extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('should update')
  //   return true
  // }

  handleSelect(courseId) {
    const { selectCourse } = this.props;
    selectCourse(courseId);
  }

  render() {
    const { allMajors, allMajorIds, allCourses, allCourseIds } = this.props;
    // console.log(this.props)
    return (
      <div>
        {allMajorIds.map((majorId) => {
          const filteredCourseIds = allCourseIds.filter((courseId) => allCourses[courseId].majorId === majorId);
          return (
            <Box key={majorId} marginBottom={3}>
              <Typography variant={`h5`}>{allMajors[majorId].name}</Typography>
              <Box display={`flex`} flexWrap={`wrap`}>
                {filteredCourseIds.map((courseId) => {
                  // const course = allCourses[courseId];
                  // console.log(course.isSelectedTemp);
                  return (
                    <CourseTileCheckbox
                      key={courseId}
                      courseId={courseId}
                      // name={course.name}
                      // credit={course.credit}
                      // isChecked={course.isSelected}
                      // isCheckedTemp={course.isSelectedTemp}
                      // onSelect={() => this.handleSelect(courseId)}
                    />
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </div>
    );
  }
}

export default CourseList;
