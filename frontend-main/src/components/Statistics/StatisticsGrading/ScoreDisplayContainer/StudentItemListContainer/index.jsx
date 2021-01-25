import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import * as d3 from 'd3';
import styled from 'styled-components';
import _ from 'lodash';

import { HeaderOptions, SortOrder } from '../../SortOptions.enum';

import { ReactComponent as AscendingHorizontalIcon } from '../../../../icons/ascending-horizontal.svg';
import { ReactComponent as DescendingHorizontalIcon } from '../../../../icons/descending-horizontal.svg';
import './style.scss';

const StudentScore = styled.div`
  width: 20px;
  min-width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => {
    return props.isChecked ? (!isNaN(props.score) ? getFontColor(props.score) : 'rgba(255,255,255,0)') : '#CCCCCC';
  }};
  background-color: ${(props) => {
    return props.isChecked ? (!isNaN(props.score) ? getBackgroundColor(props.score) : 'rgba(255,255,255,0)') : props.score ? '#EEEEEE' : 'rgba(255,255,255,0)';
  }};
  margin: 1px ${(props) => ((props.index + 1) % 5 === 0 ? 5 : 1)}px 1px ${(props) => ((props.index + 1) % 5 === 1 ? 5 : 1)}px;
  z-index: 2;
`;

const StudentGPA = styled.div`
  width: 20px;
  min-width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    return props.isChecked ? (!isNaN(props.gpa) ? getBackgroundColor(props.gpa) : 'rgba(255,255,255,0)') : props.gpa ? '#EEEEEE' : 'rgba(255,255,255,0)';
  }};
  color: ${(props) => {
    return props.isChecked ? getFontColor(props.gpa) : '#CCCCCC';
  }};
`;

const getBackgroundColor = d3.scaleThreshold().domain([50, 70, 85, 100]).range(['#D9D9D9', '#8DB8D9', '#2E8AD0', '#174568']);
const getFontColor = d3.scaleLinear().domain([49.9, 50]).range(['#808080', '#FFFFFF']).clamp(true);

class StudentItemScoreItem extends Component {
  shouldComponentUpdate(prevProps, prevState) {
    if (prevProps.index !== this.props.index) return true;
    if (!prevProps.score || !this.props.score) return false;
    if (prevProps.isChecked !== this.props.isChecked) return true;
    return false;
  }
  render() {
    const { index, score, isChecked } = this.props;
    return (
      <StudentScore index={index} score={score} isChecked={isChecked}>
        {score ?? ''}
      </StudentScore>
    );
  }
}

class StudentItem extends React.Component {
  shouldComponentUpdate(prevProps, prevState) {
    if (prevProps.index !== this.props.index) return true;
    if (prevProps.studentData.isChecked !== this.props.studentData.isChecked) return true;
    if (prevProps.sortOrder !== this.props.sortOrder) return true;
    if (prevProps.allCourseIds !== this.props.allCourseIds) return true;
    if (!(_.isEqual(prevProps.allCourses, this.props.allCourses))) return true;
    return false;
  }

  render() {
    const { studentData, allCourseIds, index, sortOrder, allCourses } = this.props;

    return (
      <Box
        className={'student-item'}
        display="flex"
        height={`22px`}
        alignItems="center"
        padding={`0px 2px`}
        margin={`0px 0px ${(index + 1) % 5 === 0 ? 10 : 0}px 0px`}
        // margin={`${(index + 1) % 10 === 1 ? 10 : 0}px 0px 0px 0px`}
        fontSize="10px"
        bgcolor={studentData.isChecked ? '#E6E6E6' : 'white'}
      >
        <div className={'student-index'}>{index + 1}</div>
        <div style={{ width: '20px', minWidth: '20px' }}>
          <Checkbox
            style={{ color: '#007FFF', margin: '0px', padding: '0px' }}
            size="small"
            checked={studentData.isChecked}
            onClick={() => this.props.onCheckboxClick(studentData.studentId)}
          />
        </div>
        <div className={'student-name'} style={{ color: studentData.isChecked ? 'black' : '#CCCCCC' }}>
          {studentData.fullName.length <= 30 ? studentData.fullName : `${studentData.fullName.substring(0, 30)}...`}
        </div>
        <StudentGPA gpa={studentData.gpa} isChecked={studentData.isChecked}>
          {!isNaN(studentData.gpa) ? studentData.gpa : ''}
        </StudentGPA>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '20px',
            minWidth: '20px',
            height: '20px',
            margin: '0px 0px 0px 5px',
            cursor: isNaN(studentData.gpa) ? 'auto' : 'pointer',
          }}
          onClick={() => {
            if (isNaN(studentData.gpa)) return;
            this.props.onSortClick(studentData.id, sortOrder === SortOrder.ASC || !sortOrder ? SortOrder.DESC : SortOrder.ASC);
          }}
        >
          {sortOrder === SortOrder.ASC ? (
            <AscendingHorizontalIcon />
          ) : sortOrder === SortOrder.DESC ? (
            <DescendingHorizontalIcon />
          ) : sortOrder === SortOrder.UNSORTED ? (
            <svg width="20px" height="20px" fill="#CCCCCC">
              <circle r={3} cx={10} cy={10} />
            </svg>
          ) : (
            ''
          )}
        </div>

        {allCourseIds.map((courseId, courseIndex) => (
          <StudentItemScoreItem
            key={courseId}
            index={courseIndex}
            score={studentData.courses[courseId]}
            isChecked={studentData.isChecked && allCourses[courseId].isChecked}
          />
        ))}
      </Box>
    );
  }
}

class StudentItemListContainer extends Component {
  constructor(props) {
    console.log('INIT');
    super(props);
  }

  render() {
    // console.log(this.props);
    const { allStudents, allStudentIds, allCourses, allCourseIds, allSortHeaders } = this.props;
    const { dispatch, handleSelectStudent, sortTopCourseByOneStudent } = this.props;

    return (
      <Box className={'student-item-list-container'} marginTop={'10px'}>
        {allStudentIds.map((studentId, studentIndex) => (
          <StudentItem
            key={studentId}
            studentData={allStudents[studentId]}
            index={studentIndex}
            allCourseIds={allCourseIds}
            allCourses={allCourses}
            sortOrder={
              allSortHeaders.TOP_COURSE_BY_STUDENT.studentId === studentId && allSortHeaders.TOP_COURSE_BY_STUDENT.order === SortOrder.ASC
                ? SortOrder.ASC
                : allSortHeaders.TOP_COURSE_BY_STUDENT.studentId === studentId && allSortHeaders.TOP_COURSE_BY_STUDENT.order === SortOrder.DESC
                ? SortOrder.DESC
                : !isNaN(allStudents[studentId].gpa)
                ? SortOrder.UNSORTED
                : null
            }
            onCheckboxClick={() => dispatch(handleSelectStudent(studentId))}
            onSortClick={(studentId, sortOrder) => {
              console.log(studentId, sortOrder);
              dispatch(sortTopCourseByOneStudent(studentId, sortOrder));
            }}
          />
        ))}
      </Box>
    );
  }
}

export default StudentItemListContainer;
