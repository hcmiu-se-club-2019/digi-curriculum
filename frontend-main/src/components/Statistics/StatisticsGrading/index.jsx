import React, { Component } from 'react';
import { Grid, makeStyles, Checkbox, Box } from '@material-ui/core';
import * as d3 from 'd3';
import styled from 'styled-components';
import { MapInteractionCSS } from 'react-map-interaction';

// import ZoomInIcon from '@material-ui/icons/ZoomIn';
// import ZoomOutIcon from '@material-ui/icons/ZoomOut';

import CourseHeaderItem from './CourseHeaderItem';
import CourseHeaderItemAll from './CourseHeaderItemAll';
import { getGeneratedGradingData } from './FakeStudentScoreGenerator';

import { ReactComponent as RoadBlockIcon } from '../../icons/roadblock.svg';
import { ReactComponent as AscendingHorizontalIcon } from '../../icons/ascending-horizontal.svg';
import { ReactComponent as DescendingHorizontalIcon } from '../../icons/descending-horizontal.svg';
import { ReactComponent as AscendingVerticalIcon } from '../../icons/ascending-vertical.svg';
import { ReactComponent as DescendingVerticalIcon } from '../../icons/descending-vertical.svg';

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
const colorLegends = d3.scaleOrdinal().domain(colorNoteValues).range(['#063C65', '#206091', '#6BB4CA', '#CCCCCC']);

const getBackgroundColor = d3.scaleThreshold().domain([50, 70, 85, 100]).range(['#CCCCCC', '#6BB4CA', '#206091', '#063C65']);
const getFontColor = d3.scaleLinear().domain([49.9, 50]).range(['#000000', '#FFFFFF']).clamp(true);

class StatisticsGrading extends Component {
  constructor(props) {
    console.log('INIT');
    super(props);
    this.state = {
      allStudents: {},
      allStudentIds: [],
      allCourses: {},
      allCourseIds: [],
    };
  }
  componentDidMount() {
    console.log('DID MOUNT');
    const generatedGradingData = getGeneratedGradingData();

    //sort by gpa before render
    let allCourses = generatedGradingData.allCourses,
      allCourseIds = generatedGradingData.allCourseIds,
      allStudents = generatedGradingData.allStudents,
      allStudentIds = generatedGradingData.allStudentIds;

    allStudentIds.sort((studentId1, studentId2) => {
      if (allStudents[studentId1].gpa <= allStudents[studentId2].gpa) {
        return 1;
      } else return -1;
    });

    this.setState(
      {
        allCourses,
        allCourseIds,
        allStudents,
        allStudentIds,
      },
      () => console.log(this.state)
    );
  }
  render() {
    console.log('RENDER');
    const { allCourses, allCourseIds, allStudents, allStudentIds } = this.state;

    return (
      <div>
        <Grid container>
          <Grid item lg={2} style={{ backgroundColor: 'whitesmoke', padding: '40px' }}>
            {/* Search and filter panel */}
            <Box display="flex" flexDirection="column" justifyContent="center">
              <RoadBlockIcon style={{ width: '40px', height: '40px', fill: 'grey', display: 'block', margin: 'auto' }} />
              <div>This page is under development</div>
            </Box>
          </Grid>
          <Grid item lg={10} style={{ padding: '40px', fontSize: '10px', backgroundColor: '#525659' }}>
            <div style={{ overflowX: 'auto', backgroundColor: 'white' }}>
              <MapInteractionCSS minScale={0.25} maxScale={3.0} defaultValue={{ scale: 1.0, translation: { x: 100, y: 100 } }}>
                {/* header */}
                <Box display="flex" flexWrap="nowrap" margin={'1px 1px 1px 1px'}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: '178px', fontSize: '16px' }}>
                      <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Note</div>
                      <div style={{ padding: '10px 0px', fontSize: '14px' }}>
                        {colorNoteValues.map((value) => (
                          <div style={{ display: 'flex', alignItems: 'center', margin: '0px 0px 1px 0px' }}>
                            <div style={{ width: '20px', height: '20px', backgroundColor: colorLegends(value) }}></div>
                            <div style={{ padding: '0px 5px' }}>{value}</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ fontWeight: 'bold' }}>
                        <div>Total students: {allStudentIds.length}</div>
                        <div>Total courses: {allCourseIds.length}</div>
                      </div>
                    </div>
                    <div
                      style={{
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        color: '#cc0000',
                        fontWeight: 'bold',
                        margin: '1px 0px',
                      }}
                    >
                      Average score
                    </div>
                    <div style={{ height: '20px', display: 'flex', margin: '5px 0px -5px 0px', alignItems: 'center' }}>
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
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignSelf: 'flex-end', paddingTop: '50px' }}>
                    <CourseHeaderItemAll isSelected={true} />
                    {allCourseIds.map((courseId, courseIndex) => (
                      <CourseHeaderItem
                        key={courseId}
                        name={allCourses[courseId].name}
                        isSelected={true}
                        index={courseIndex + 1}
                        averageScore={allCourses[courseId].averageScore}
                        backgroundColor={getBackgroundColor(allCourses[courseId].averageScore)}
                        color={getFontColor(allCourses[courseId].averageScore)}
                      />
                    ))}
                  </div>
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
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '20px',
                          minWidth: '20px',
                          height: '20px',
                          margin: '1px 0px 1px 5px',
                        }}
                      >
                        <svg width="20px" height="20px" fill="#CCCCCC">
                          <circle r={3} cx={10} cy={10} />
                        </svg>
                      </div>
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
              </MapInteractionCSS>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default StatisticsGrading;
