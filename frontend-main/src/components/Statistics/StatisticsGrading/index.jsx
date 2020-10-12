import React, { Component } from 'react';
import { Grid, makeStyles, Checkbox, Box } from '@material-ui/core';
import * as d3 from 'd3';
import styled from 'styled-components';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import CourseHeaderItem from './CourseHeaderItem';
import { getGeneratedGradingData } from './FakeStudentScoreGenerator';

const HeaderLabel = styled.div`
  align-self: flex-end;
  color: #cc0000;
  font-weight: bold;
  font-size: 10px;
  /* padding-bottom: ${(props) => (props.checkbox ? '0px' : '4px')}; */
  padding-top: ${(props) => (props.checkbox ? '0px' : '2px')};
  width: ${(props) => props.width}px;
  min-width: ${(props) => props.minWidth}px;
  height: 20px;
  /* height: ${(props) => props.height}; */
  /* background-color: lightblue; */
  display: flex;
  justify-content: center;
  margin: 1px 0px;
`;

function getBackgroundColor(score) {
  const scaledValue = d3.scaleLinear().domain([49, 50, 100]).range(['#CCCCCC', '#6BB4CA', '#063C65']).clamp(true);
  return scaledValue(score);
}

function getFontColor(score) {
  const scaledValue = d3.scaleLinear().domain([49, 50]).range(['#000000', '#FFFFFF']).clamp(true);
  return scaledValue(score);
}

class StatisticsGrading extends Component {
  constructor(props) {
    console.log('INIT')
    super(props);
    this.state = {
      allStudents: {},
      allStudentIds: [],
      allCourses: {},
      allCourseIds: [],
    };
  }
  componentDidMount() {
    console.log('DID MOUNT')
    const generatedGradingData = getGeneratedGradingData();
    this.setState(
      {
        allCourses: generatedGradingData.allCourses,
        allCourseIds: generatedGradingData.allCourseIds,
        allStudents: generatedGradingData.allStudents,
        allStudentIds: generatedGradingData.allStudentIds,
      },
      () => console.log(this.state)
    );
  }
  render() {
    const { allCourses, allCourseIds, allStudents, allStudentIds } = this.state;
    return (
      <div>
        <Grid container>
          <Grid item lg={2} style={{ backgroundColor: 'whitesmoke' }}>
            Search and filter panel
          </Grid>
          <Grid item lg={10} style={{ padding: '40px', fontSize: '10px' }}>
            <div style={{ overflowX: 'auto' }}>
              {/* header */}
              <Box display="flex" flexWrap="nowrap" paddingTop={'140px'} margin={'1px'}>
                <HeaderLabel width={30} minWidth={30}>
                  Rank
                </HeaderLabel>
                <HeaderLabel width={20} minWidth={20} checkbox>
                  <Checkbox defaultChecked={true} style={{ color: '#007FFF', margin: '0px', padding: '0px' }} size="small" />
                </HeaderLabel>
                <HeaderLabel width={200} minWidth={200}>
                  Fullname
                </HeaderLabel>
                <HeaderLabel width={20} minWidth={20}>
                  GPA
                </HeaderLabel>
                <div style={{ width: '5px', minWidth: '5px' }} />
                <CourseHeaderItem header name="Course" isSelected={true} />
                {allCourseIds.map((courseId, courseIndex) => (
                  <CourseHeaderItem key={courseId} name={allCourses[courseId].name} isSelected={true} index={courseIndex + 1} />
                ))}
              </Box>
              {/* item list */}
              <Box>
                {/* Item detail */}
                {allStudentIds.map((studentId, studentIndex) => (
                  <Box
                    key={studentIndex}
                    display="flex"
                    flexWrap="nowrap"
                    height={21}
                    alignItems="center"
                    margin={`${(studentIndex + 1) % 5 === 1 ? 10 : 1}px 1px ${(studentIndex + 1) % 5 === 0 ? 10 : 1}px 1px`}
                    fontSize="10px"
                  >
                    <div style={{ fontWeight: 'bold', width: '30px', minWidth: '30px', textAlign: 'right', justifyContent: 'flex-end' }}>
                      {studentIndex + 1}
                    </div>
                    <div style={{ width: '20px', minWidth: '20px' }}>
                      <Checkbox defaultChecked={true} style={{ color: '#007FFF', margin: '0px', padding: '0px' }} size="small" />
                    </div>
                    <div
                      style={{
                        fontWeight: 'bold',
                        width: '200px',
                        minWidth: '200px',
                        padding: '0px 5px',
                        display: 'inline-flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      {allStudents[studentId].fullName}
                    </div>
                    <div
                      style={{
                        width: '20px',
                        minWidth: '20px',
                        height: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: getBackgroundColor(allStudents[studentId].gpa),
                        color: getFontColor(allStudents[studentId].gpa),
                      }}
                    >
                      {allStudents[studentId].gpa}
                    </div>
                    <div style={{ width: '25px', minWidth: '25px', height: '20px', margin: '1px' }}></div>
                    {allCourseIds.map((courseId, courseIndex) => (
                      <div
                        key={courseId}
                        style={{
                          width: '20px',
                          minWidth: '20px',
                          height: '20px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: !isNaN(allStudents[studentId].courses[courseId])
                            ? getBackgroundColor(allStudents[studentId].courses[courseId])
                            : 'white',
                          color: !isNaN(allStudents[studentId].courses[courseId]) ? getFontColor(allStudents[studentId].courses[courseId]) : 'black',
                          margin: `1px ${(courseIndex + 1) % 5 === 0 ? 5 : 1}px 1px ${(courseIndex + 1) % 5 === 1 ? 5 : 1}px`,
                        }}
                      >
                        {allStudents[studentId].courses[courseId] ?? ''}
                      </div>
                    ))}
                  </Box>
                ))}
              </Box>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default StatisticsGrading;
