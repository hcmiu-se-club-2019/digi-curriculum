import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';
import * as d3 from 'd3';
import styled from 'styled-components';

import './style.scss';

const HeaderLabel = styled.div`
  align-self: flex-end;
  color: #cc0000;
  font-weight: bold;
  font-size: 10px;
  padding-top: ${(props) => (props.checkbox ? '0px' : '2px')};
  width: ${(props) => props.width}px;
  min-width: ${(props) => props.minWidth}px;
  height: 20px;
  display: flex;
  justify-content: center;
  margin: 1px 0px;
`;

const colorNoteValues = ['[Excellent] More than 85', '[Good] >= 70 and < 85', '[Average] >= 50 and < 70', '[Poor] Less than 50'];
const colorLegends = d3.scaleOrdinal().domain(colorNoteValues).range(['#174568', '#2E8AD0', '#8DB8D9', '#D9D9D9']);

class StatisticsGrading extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  // shouldComponentUpdate(prevProps, prevState) {
  //   if (prevProps.studentCount !== this.props.studentCount) return true;
  //   if (prevProps.courseCount !== this.props.courseCount) return true;
  //   if (prevProps.isAllStudentsSelected !== this.props.isAllStudentsSelected) return true;
  //   return false;
  // }

  render() {
    const { studentCount, courseCount, isAllStudentsSelected } = this.props;
    const { dispatch, handleSelectAllStudents } = this.props;
    return (
      <div className={'header-left'}>
        <div style={{ width: '270px', height: '178px', fontSize: '16px' }}>
          <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Note</div>
          <div style={{ padding: '10px 0px', fontSize: '14px' }}>
            {colorNoteValues.map((value) => (
              <div style={{ display: 'flex', alignItems: 'center', margin: '0px 0px 1px 0px' }} key={value}>
                <div style={{ width: '20px', height: '20px', backgroundColor: colorLegends(value) }}></div>
                <div style={{ padding: '0px 5px' }}>{value}</div>
              </div>
            ))}
          </div>
          <b>
            <div>Total students: {studentCount}</div>
            <div>Total courses: {courseCount}</div>
          </b>
        </div>
        <div className={'header-course-average-score'}>Average score</div>
        <div style={{ height: '20px', display: 'flex', margin: '5px 0px -5px 0px', alignItems: 'center' }}>
          <HeaderLabel width={30} minWidth={30}>
            No.
          </HeaderLabel>
          <HeaderLabel width={20} minWidth={20} checkbox>
            <Checkbox
              checked={isAllStudentsSelected}
              style={{ color: '#007FFF', margin: '0px', padding: '0px' }}
              size="small"
              onClick={() => dispatch(handleSelectAllStudents())}
            />
          </HeaderLabel>
          <HeaderLabel width={200} minWidth={200}>
            Fullname
          </HeaderLabel>
          <HeaderLabel width={20} minWidth={20}>
            GPA
          </HeaderLabel>
        </div>
      </div>
    );
  }
}

export default StatisticsGrading;
