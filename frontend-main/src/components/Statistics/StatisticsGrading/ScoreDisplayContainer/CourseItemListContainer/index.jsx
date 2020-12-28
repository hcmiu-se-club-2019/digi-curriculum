import React, { Component } from 'react';
import * as d3 from 'd3';

import CourseHeaderItem from './CourseHeaderItem';
import CourseHeaderItemAll from './CourseHeaderItemAll';
import './style.scss';

const getBackgroundColor = d3.scaleThreshold().domain([50, 70, 85, 100]).range(['#D9D9D9', '#8DB8D9', '#2E8AD0', '#174568']);
const getFontColor = d3.scaleLinear().domain([49.9, 50]).range(['#808080', '#FFFFFF']).clamp(true);

class StatisticsGrading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { allCourses, allCourseIds, selectedHeader, allSortHeaders, isAllCoursesSelected } = this.props;
    const { dispatch, handleSelectAllCourses, handleSelectCourse, sortGPA, sortAverageScore, sortScoreByOneCourse } = this.props;
    // console.log('RENDER');
    return (
      <div className={'course-item'}>
        <CourseHeaderItemAll
          isAllCoursesSelected={isAllCoursesSelected}
          selectedHeader={selectedHeader}
          sortGPAOrder={allSortHeaders.GPA.order}
          sortAverageScoreOrder={allSortHeaders.AVE_SCORE.order}
          onClickAllCourses={() => dispatch(handleSelectAllCourses())}
          onSortGPA={(order) => dispatch(sortGPA(order))}
          onSortAverageScore={(order) => dispatch(sortAverageScore(order))}
        />
        {allCourseIds.map((courseId, courseIndex) => (
          <CourseHeaderItem
            key={courseId}
            id={courseId}
            index={courseIndex + 1}
            name={allCourses[courseId].name}
            averageScore={allCourses[courseId].averageScore}
            color={allCourses[courseId].isChecked ? getFontColor(allCourses[courseId].averageScore) : '#CCCCCC'}
            backgroundColor={allCourses[courseId].isChecked ? getBackgroundColor(allCourses[courseId].averageScore) : '#EEEEEE'}
            isSelected={allCourses[courseId].isChecked}
            sortScoreOrder={allSortHeaders.TOP_STUDENT_SCORE.order}
            selectedSortId={allSortHeaders.TOP_STUDENT_SCORE.courseId === courseId ? allSortHeaders.TOP_STUDENT_SCORE.courseId : null}
            onSortScore={(selectedCourseId, order) => dispatch(sortScoreByOneCourse(selectedCourseId, order))}
            onClick={(selectedCourseId) => dispatch(handleSelectCourse(selectedCourseId))}
          />
        ))}
      </div>
    );
  }
}

export default StatisticsGrading;
