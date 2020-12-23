import React, { Component } from 'react';
import { Grid, Checkbox, Box } from '@material-ui/core';
import * as d3 from 'd3';
import styled from 'styled-components';
import { MapInteractionCSS } from 'react-map-interaction';

// import ZoomInIcon from '@material-ui/icons/ZoomIn';
// import ZoomOutIcon from '@material-ui/icons/ZoomOut';

import CourseHeaderItem from './CourseHeaderItem';
import CourseHeaderItemAll from './CourseHeaderItemAll';
import { getGeneratedGradingData, fetchStatisticByGrading } from './FakeStudentScoreGenerator';
import { HeaderOptions, SortOrder } from './SortOptions.enum';

import { ReactComponent as RoadBlockIcon } from '../../icons/roadblock.svg';
import { ReactComponent as AscendingHorizontalIcon } from '../../icons/ascending-horizontal.svg';
import { ReactComponent as DescendingHorizontalIcon } from '../../icons/descending-horizontal.svg';
import './CourseGrading.scss';

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
    return props.isChecked ? getBackgroundColor(props.gpa) : '#EEEEEE';
  }};
  color: ${(props) => {
    return props.isChecked ? getFontColor(props.gpa) : '#CCCCCC';
  }};
`;

const colorNoteValues = ['[Excellent] More than 85', '[Good] >= 70 and < 85', '[Average] >= 50 and < 70', '[Poor] Less than 50'];
const colorLegends = d3.scaleOrdinal().domain(colorNoteValues).range(['#174568', '#2E8AD0', '#8DB8D9', '#D9D9D9']);

const getBackgroundColor = d3.scaleThreshold().domain([50, 70, 85, 100]).range(['#D9D9D9', '#8DB8D9', '#2E8AD0', '#174568']);
// const getFontColor = d3.scaleLinear().domain([49.9, 50]).range(['#000000', '#FFFFFF']).clamp(true);
const getFontColor = d3.scaleThreshold().domain([50, 70, 85, 100]).range(['#808080', '#FFFFFF', '#FFFFFF', '#FFFFFF']);

class StatisticsGrading extends Component {
  constructor(props) {
    console.log('INIT');
    super(props);
    this.state = {
      allStudents: {},
      allStudentIds: [],
      allCourses: {},
      allCourseIds: [],
      maxHeightBoxHighlight: 0,
      allSortHeaders: {
        GPA: {
          order: SortOrder.DESC,
        },
        AVE_SCORE: {
          order: null,
        },
        TOP_STUDENT_SCORE: {
          order: null,
          courseId: null,
        },
        TOP_COURSE_BY_STUDENT: {
          order: null,
          studentId: null,
        },
      },
      isAllCoursesSelected: false,
      isAllStudentsSelected: false,

      selectedCourses: [],
      selectedSortCourse: null,
      selectedStudents: [],
      selectedHeader: HeaderOptions.GPA,
      // sortOrder: SortOrder.DESC,
    };
  }
  componentDidMount() {
    console.log('DID MOUNT');
    this._loadData();
    // this._loadRandomData();
  }

  async _loadData() {
    const { allCourses, allCourseIds, allStudents, allStudentIds, isAllCoursesSelected, isAllStudentsSelected } = await fetchStatisticByGrading();

    //sort by gpa by default before render
    allStudentIds.sort((prevStudentId, currentStudentId) => {
      const prevGPA = allStudents[prevStudentId].gpa;
      const currentGPA = allStudents[currentStudentId].gpa;
      return currentGPA - prevGPA || isNaN(prevGPA) - isNaN(currentGPA);
    });

    const maxHeightBoxHighlight = 67 + allStudentIds.length * 22 + Math.ceil(allStudentIds.length / 5) * 10;

    this.setState({
      allCourses,
      allCourseIds,
      allStudents,
      allStudentIds,
      isAllCoursesSelected,
      isAllStudentsSelected,
      maxHeightBoxHighlight,
    });
  }

  _loadRandomData() {
    const { allCourses, allCourseIds, allStudents, allStudentIds, isAllCoursesSelected, isAllStudentsSelected } = getGeneratedGradingData();

    //sort by gpa by default before render
    allStudentIds.sort((prevStudentId, currentStudentId) => {
      const prevGPA = allStudents[prevStudentId].gpa;
      const currentGPA = allStudents[currentStudentId].gpa;
      return currentGPA - prevGPA || isNaN(prevGPA) - isNaN(currentGPA);
    });
    // allStudentIds.sort((prevStudentId, currentStudentId) => {
    //   return allStudents[currentStudentId].fullName.localeCompare(allStudents[currentStudentId].fullName);
    // });
    // allStudentIds.forEach(studentId => console.log(allStudents[studentId].fullName))
    const maxHeightBoxHighlight = 67 + allStudentIds.length * 22 + Math.ceil(allStudentIds.length / 5) * 10;

    this.setState(
      {
        allCourses,
        allCourseIds,
        allStudents,
        allStudentIds,
        isAllCoursesSelected,
        isAllStudentsSelected,
        maxHeightBoxHighlight,
      },
      () => console.log(this.state)
    );
  }

  _sortGPA(newOrder) {
    const { allStudents, allStudentIds, allSortHeaders } = this.state;
    allSortHeaders.TOP_STUDENT_SCORE.courseId = null;
    allSortHeaders.TOP_STUDENT_SCORE.order = null;
    allSortHeaders.GPA.order = newOrder;
    if (newOrder === SortOrder.ASC) {
      allStudentIds.sort((prevStudentId, currentStudentId) => {
        const prevGPA = allStudents[prevStudentId].gpa;
        const currentGPA = allStudents[currentStudentId].gpa;
        return prevGPA - currentGPA || isNaN(prevGPA) - isNaN(currentGPA);
      });
    } else {
      allStudentIds.sort((prevStudentId, currentStudentId) => {
        const prevGPA = allStudents[prevStudentId].gpa;
        const currentGPA = allStudents[currentStudentId].gpa;
        return currentGPA - prevGPA || isNaN(prevGPA) - isNaN(currentGPA);
      });
    }
    this.setState({
      allStudentIds,
      allSortHeaders,
    });
  }

  _sortAverageScore(newOrder) {
    const { allStudentIds, allSortHeaders, allCourseIds, allCourses } = this.state;
    allSortHeaders.TOP_COURSE_BY_STUDENT.studentId = null;
    allSortHeaders.TOP_COURSE_BY_STUDENT.order = null;
    allSortHeaders.AVE_SCORE.order = newOrder;
    if (newOrder === SortOrder.ASC) {
      allCourseIds.sort((prevCourseId, currentCourseId) => {
        return allCourses[currentCourseId].averageScore <= allCourses[prevCourseId].averageScore ? 1 : -1;
      });
    } else {
      allCourseIds.sort((prevCourseId, currentCourseId) => {
        return allCourses[currentCourseId].averageScore >= allCourses[prevCourseId].averageScore ? 1 : -1;
      });
    }
    this.setState({
      allStudentIds,
      allSortHeaders,
    });
  }

  _sortScoreByOneCourse(newSelectedId, order) {
    const { allStudents, allStudentIds, allSortHeaders } = this.state;
    allSortHeaders.GPA.order = null;
    allSortHeaders.TOP_STUDENT_SCORE.order = allSortHeaders.TOP_STUDENT_SCORE.courseId !== newSelectedId ? SortOrder.DESC : order;
    allSortHeaders.TOP_STUDENT_SCORE.courseId = newSelectedId;

    if (allSortHeaders.TOP_STUDENT_SCORE.order === SortOrder.ASC) {
      allStudentIds.sort((prevStudentId, currentStudentId) => {
        const prevScore = allStudents[prevStudentId].courses[newSelectedId];
        const currentScore = allStudents[currentStudentId].courses[newSelectedId];
        return prevScore - currentScore || isNaN(prevScore) - isNaN(currentScore);
      });
    } else {
      allStudentIds.sort((prevStudentId, currentStudentId) => {
        const prevScore = allStudents[prevStudentId].courses[newSelectedId];
        const currentScore = allStudents[currentStudentId].courses[newSelectedId];
        return currentScore - prevScore || isNaN(prevScore) - isNaN(currentScore);
      });
    }

    this.setState({
      allStudentIds,
      allSortHeaders,
    });
  }

  _sortTopCourseByOneStudent(newSelectedId, order) {
    const { allCourseIds, allStudents, allStudentIds, allSortHeaders } = this.state;
    allSortHeaders.AVE_SCORE.order = null;
    allSortHeaders.TOP_COURSE_BY_STUDENT.order = allSortHeaders.TOP_COURSE_BY_STUDENT.studentId !== newSelectedId ? SortOrder.DESC : order;
    allSortHeaders.TOP_COURSE_BY_STUDENT.studentId = newSelectedId;

    if (allSortHeaders.TOP_COURSE_BY_STUDENT.order === SortOrder.ASC) {
      allCourseIds.sort((prevCourseId, currentCourseId) => {
        const prevScore = allStudents[newSelectedId].courses[prevCourseId];
        const currentScore = allStudents[newSelectedId].courses[currentCourseId];
        return prevScore - currentScore || isNaN(prevScore) - isNaN(currentScore);
      });
    } else {
      allCourseIds.sort((prevCourseId, currentCourseId) => {
        const prevScore = allStudents[newSelectedId].courses[prevCourseId];
        const currentScore = allStudents[newSelectedId].courses[currentCourseId];
        return currentScore - prevScore || isNaN(prevScore) - isNaN(currentScore);
      });
    }

    this.setState({
      allStudentIds,
      allSortHeaders,
    });
  }

  _handleSelectAllCourses() {
    const { allCourses, allCourseIds, allStudents, allStudentIds, selectedHeader, allSortHeaders, isAllStudentsSelected, isAllCoursesSelected } = this.state;

    allCourseIds.forEach((courseId, index) => {
      allCourses[courseId].isChecked = !isAllCoursesSelected;
    });

    this.setState({
      allCourses,
      isAllCoursesSelected: !isAllCoursesSelected,
    });
  }

  _handleSelectedCoursesChange(courseId) {
    const t0 = performance.now();
    const { allCourses, allCourseIds, allStudents, allStudentIds, selectedHeader, allSortHeaders, isAllCoursesSelected } = this.state;
    const { isChecked } = allCourses[courseId];
    allCourses[courseId].isChecked = !isChecked;
    this.setState({
      allCourses,
      isAllCoursesSelected: false,
    });
    const t1 = performance.now();
    console.log(t1 - t0 + 'ms');
  }

  _handleSelectAllStudents() {
    const { allCourses, allCourseIds, allStudents, allStudentIds, selectedHeader, allSortHeaders, isAllStudentsSelected } = this.state;

    allStudentIds.forEach((studentId, index) => {
      allStudents[studentId].isChecked = !isAllStudentsSelected;
    });

    this.setState({
      allStudents,
      isAllStudentsSelected: !isAllStudentsSelected,
    });
  }

  _handleSelectedStudentsChange(studentId) {
    const { allCourses, allCourseIds, allStudents, allStudentIds, selectedHeader, allSortHeaders } = this.state;
    const { isChecked } = allStudents[studentId];
    allStudents[studentId].isChecked = !isChecked;
    this.setState({
      allStudents,
      isAllStudentsSelected: false,
    });
  }

  render() {
    console.log('RENDER');
    console.log('PROPS', this.props);
    console.log('STATE', this.state);
    const {
      allCourses,
      allCourseIds,
      allStudents,
      allStudentIds,
      selectedHeader,
      allSortHeaders,
      isAllCoursesSelected,
      isAllStudentsSelected,
      maxHeightBoxHighlight,
    } = this.state;

    return (
      <div className={'statistic-grading-container'}>
        <Grid container>
          <Grid item lg={2} className={'grid-item-left'}>
            {/* Search and filter panel */}
            <Box display="flex" flexDirection="column" justifyContent="center">
              <RoadBlockIcon className={'road-block-icon'} />
              <div>This page is under development</div>
              <button onClick={() => this._loadRandomData()}>Random data</button>
              <button onClick={() => this._loadData()}>Reset data</button>
            </Box>
          </Grid>
          <Grid item lg={10} className={'grid-item-right'}>
            <div className={'zoom-box'}>
              {/* <MapInteractionCSS minScale={0.5} maxScale={5.0} defaultValue={{ scale: 1.0, translation: { x: 100, y: 100 } }}> */}
              <div
                className="all-courses-highlight-container"
                style={{
                  position: 'absolute',
                  height: `${maxHeightBoxHighlight}px`,
                  zIndex: 0,
                  // top: '160px',
                  // left: '658px',
                  top: '160px',
                  left: '301px',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                {allCourseIds.map((courseId, index) => (
                  <div
                    key={courseId}
                    style={{
                      width: '22px',
                      backgroundColor: allCourses[courseId].isChecked ? 'rgba(192, 192, 192, 0.5)' : 'rgba(255,255,255,0)',
                      margin: `1px ${(index + 1) % 5 === 0 ? 8 : 0}px 1px 0px`,
                    }}
                  ></div>
                ))}
              </div>
              {/* Header */}
              <Box className={'course-header'}>
                <div className={'header-left'}>
                  <div style={{ height: '178px', fontSize: '16px' }}>
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
                      <div>Total students: {allStudentIds.length}</div>
                      <div>Total courses: {allCourseIds.length}</div>
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
                        onClick={() => this._handleSelectAllStudents()}
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
                <div className={'course-item'}>
                  <CourseHeaderItemAll
                    isAllCoursesSelected={isAllCoursesSelected}
                    onClickAllCourses={() => this._handleSelectAllCourses()}
                    selectedHeader={selectedHeader}
                    sortGPAOrder={allSortHeaders.GPA.order}
                    sortAverageScoreOrder={allSortHeaders.AVE_SCORE.order}
                    onSortGPA={(order) => this._sortGPA(order)}
                    onSortAverageScore={(order) => this._sortAverageScore(order)}
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
                      onSortScore={(selectedId, order) => this._sortScoreByOneCourse(selectedId, order)}
                      onClick={(selectedId) => this._handleSelectedCoursesChange(selectedId)}
                    />
                  ))}
                </div>
              </Box>
              {/* Item detail */}

              <Box>
                {allStudentIds.map((studentId, studentIndex) => (
                  <Box
                    key={studentIndex}
                    className={'student-item'}
                    display="flex"
                    // flexWrap="nowrap"
                    height={`22px`}
                    alignItems="center"
                    padding={`0px 2px`}
                    margin={`${(studentIndex + 1) % 5 === 1 ? 10 : 0}px 0px 0px 0px`}
                    fontSize="10px"
                    bgcolor={allStudents[studentId].isChecked ? '#E6E6E6' : 'white'}
                  >
                    <div className={'student-index'}>{studentIndex + 1}</div>
                    <div style={{ width: '20px', minWidth: '20px' }}>
                      <Checkbox
                        style={{ color: '#007FFF', margin: '0px', padding: '0px' }}
                        size="small"
                        checked={allStudents[studentId].isChecked}
                        onClick={() => this._handleSelectedStudentsChange(studentId)}
                      />
                    </div>
                    <div className={'student-name'} style={{ color: allStudents[studentId].isChecked ? 'black' : '#CCCCCC' }}>
                      {allStudents[studentId].fullName.length <= 30
                        ? allStudents[studentId].fullName
                        : `${allStudents[studentId].fullName.substring(0, 30)}...`}
                    </div>
                    <StudentGPA gpa={allStudents[studentId].gpa} isChecked={allStudents[studentId].isChecked}>
                      {!isNaN(allStudents[studentId].gpa) ? allStudents[studentId].gpa : ''}
                    </StudentGPA>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '20px',
                        minWidth: '20px',
                        height: '20px',
                        // padding: '1px 0px 1px 5px',
                        // // margin: '1px 0px 1px 5px',
                        margin: '0px 0px 0px 5px',
                        cursor: isNaN(allStudents[studentId].gpa) ? 'auto' : 'pointer',
                      }}
                      onClick={() => {
                        if (isNaN(allStudents[studentId].gpa)) return;
                        this._sortTopCourseByOneStudent(
                          studentId,
                          allSortHeaders.TOP_COURSE_BY_STUDENT.order === SortOrder.ASC || !allSortHeaders.TOP_COURSE_BY_STUDENT.order
                            ? SortOrder.DESC
                            : SortOrder.ASC
                        );
                      }}
                    >
                      {allSortHeaders.TOP_COURSE_BY_STUDENT.studentId === studentId && allSortHeaders.TOP_COURSE_BY_STUDENT.order === SortOrder.ASC ? (
                        <AscendingHorizontalIcon />
                      ) : allSortHeaders.TOP_COURSE_BY_STUDENT.studentId === studentId && allSortHeaders.TOP_COURSE_BY_STUDENT.order === SortOrder.DESC ? (
                        <DescendingHorizontalIcon />
                      ) : !isNaN(allStudents[studentId].gpa) ? (
                        <svg width="20px" height="20px" fill="#CCCCCC">
                          <circle r={3} cx={10} cy={10} />
                        </svg>
                      ) : (
                        ''
                      )}
                    </div>
                    {allCourseIds.map((courseId, courseIndex) => (
                      <StudentScore
                        key={courseId}
                        index={courseIndex}
                        score={allStudents[studentId].courses[courseId]}
                        isChecked={allStudents[studentId].isChecked && allCourses[courseId].isChecked}
                      >
                        {allStudents[studentId].courses[courseId] ?? ''}
                      </StudentScore>
                    ))}
                  </Box>
                ))}
              </Box>
              {/* </MapInteractionCSS> */}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default StatisticsGrading;
