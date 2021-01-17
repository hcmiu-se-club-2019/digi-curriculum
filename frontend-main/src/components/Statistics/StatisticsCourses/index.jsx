import React, { Component } from 'react';
import * as d3 from 'd3';
import { Grid, Box } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getGeneratedCourseData, fetchStatisticByCourses } from './mockDataGenerator';

import { ReactComponent as RoadBlockIcon } from '../../icons/roadblock.svg';
import './style.scss';

// const getBackgroundColor = d3.scaleThreshold().domain([50, 70, 85, 100]).range(['#D9D9D9', '#99CFA1', '#43925F', '#02371A']);
const getBackgroundColor = d3.scaleThreshold().domain([50, 70, 85, 100]).range(['#D9D9D9', '#8DB8D9', '#2E8AD0', '#174568']);
const getFontColor = d3.scaleThreshold().domain([50, 70, 85, 100]).range(['#808080', '#FFFFFF', '#FFFFFF', '#FFFFFF']);
// const getHeightColor = d3.scaleThreshold().domain([99, 100]).range(['#2E8AD0', '#cb181d']);
const getHeightColor = d3.scaleThreshold().domain([50, 70, 85, 100]).range(['#8DB8D9', '#8DB8D9', '#8DB8D9', '#8DB8D9', '#cb181d']);

const semTitleHeight = 30;
const semHeaderHeight = 40;
const courseItemHeight = 22;
const courseItemPosYScale = courseItemHeight + 5;
const courseItemNameWidth = 240;
const courseItemAvgScorePosX = courseItemNameWidth;
const courseItemAvgScoreWidth = 90;
const courseItemScoreDistributionPosX = courseItemAvgScorePosX + courseItemAvgScoreWidth + 5;
const courseItemScoreDistributionWidth = 520;
const totalCourseItemWidth = courseItemNameWidth + courseItemAvgScoreWidth + courseItemScoreDistributionWidth + 5;

class StatisticsCourses extends Component {
  constructor(props) {
    super(props);
    this.middleRef = React.createRef();
    this.rightRef = React.createRef();
    this.state = {
      allSems: {},
      allSemIds: [],
    };
  }
  componentDidMount() {
    this._loadData();
  }

  async _loadData() {
    const { allSems, allSemIds } = await fetchStatisticByCourses();
    d3.select('.statistics-courses-middle').selectAll('*').remove();
    d3.select('.statistics-courses-right').selectAll('*').remove();
    this.setState(
      {
        allSems,
        allSemIds,
      },
      () => {
        this.renderCourse();
        console.log(this.middleRef.current.offsetWidth);
        console.log(this.rightRef.current.offsetWidth);
      }
    );
  }

  _loadRandomData() {
    const { allSems, allSemIds } = getGeneratedCourseData();
    d3.select('.statistics-courses-middle').selectAll('*').remove();
    d3.select('.statistics-courses-right').selectAll('*').remove();
    this.setState(
      {
        allSems,
        allSemIds,
      },
      () => {
        this.renderCourse();
        console.log(this.middleRef.current.offsetWidth);
        console.log(this.rightRef.current.offsetWidth);
      }
    );
  }

  renderCourse() {
    const { allSemIds, allSems } = this.state;
    const maxWidthPlot = 600;
    const maxHeightPlot = 22;

    d3.select('.statistics-courses-middle').selectAll('.semester').remove();

    const updateData = d3
      .select('.statistics-courses-middle')
      .selectAll('div')
      .data(allSemIds, (d) => d.key);
    const Semester = updateData
      .enter()
      .append('svg')
      .attr('class', (data) => 'semester ' + data)
      .attr('width', totalCourseItemWidth)
      .attr('height', (d, i) => {
        const { allCourseIds } = allSems[d];
        return allCourseIds.length * courseItemPosYScale + semTitleHeight + semHeaderHeight + 40;
      });

    Semester.append('text')
      .style('font-size', semTitleHeight)
      .style('font-weight', 'bold')
      .attr('x', 0)
      .attr('y', semTitleHeight)
      .text((d, i) => `Semester ${i + 1}`);

    const SemesterHeader = Semester.append('svg')
      .classed('sem-header', true)
      .attr('y', semTitleHeight)
      .attr('width', totalCourseItemWidth)
      .attr('height', semHeaderHeight);

    // #region sem-header-avg-score
    SemesterHeader.append('svg')
      .classed('sem-header-course-name', true)
      .attr('width', courseItemNameWidth)
      .attr('height', semHeaderHeight)
      .append('text')
      .style('font-size', 12)
      .style('font-weight', 'bold')
      .attr('x', '50%')
      .attr('y', '50%')
      .attr('dominant-baseline', 'central')
      .attr('text-anchor', 'middle')
      .attr('fill', 'black')
      .text('Course name');
    // #endregion

    // #region sem-header-avg-score
    SemesterHeader.append('svg')
      .classed('sem-header-avg-score', true)
      .attr('x', courseItemNameWidth)
      .attr('y', 0)
      .attr('width', courseItemAvgScoreWidth)
      .attr('height', semHeaderHeight)
      .append('text')
      .style('font-size', 12)
      .style('font-weight', 'bold')
      .attr('x', '50%')
      .attr('y', '50%')
      .attr('dominant-baseline', 'central')
      .attr('text-anchor', 'middle')
      .attr('fill', 'black')
      .text('Avg score');

    SemesterHeader.select('.sem-header-avg-score')
      .append('svg')
      .classed('sort-avg-score-none', true)
      .attr('x', '85%')
      .attr('y', '35%')
      .attr('width', '15px')
      .attr('height', '16px')
      .append('path')
      .attr('d', 'M 2 6.46 L 11.5 6.46 L 11.5 4 L 16 7 L 11.5 10 L 11.5 7.54 L 2 7.54 L 2 7 Z')
      .attr('fill', '#b3b3b3')
      .attr('stroke', '#b3b3b3')
      .attr('stroke-miterlimit', 10)
      .attr('transform', 'rotate(270,9,7)');

    SemesterHeader.select('.sem-header-avg-score')
      .select('.sort-avg-score-none')
      .append('path')
      .attr('d', 'M -4 6.46 L 5.5 6.46 L 5.5 4 L 10 7 L 5.5 10 L 5.5 7.54 L -4 7.54 L -4 7 Z')
      .attr('fill', '#b3b3b3')
      .attr('stroke', '#b3b3b3')
      .attr('stroke-miterlimit', 10)
      .attr('transform', 'rotate(450,3,7)');

    SemesterHeader.select('.sem-header-avg-score')
      .append('rect')
      .style('cursor', 'pointer')
      .attr('width', courseItemAvgScoreWidth)
      .attr('height', semHeaderHeight)
      .attr('fill', 'rgba(0,0,0,0)');

    SemesterHeader.select('.sem-header-avg-score')
      .style('cursor', 'pointer')
      .on('click', () => sortByAvgScore('sort-avg-score-desc'));
    // #endregion

    // #region sem-header-score-distribution
    SemesterHeader.append('svg')
      .classed('sem-header-score-distribution', true)
      .attr('x', courseItemScoreDistributionPosX)
      .attr('y', 0)
      .attr('width', courseItemScoreDistributionWidth)
      .attr('height', semHeaderHeight)
      .append('text')
      .style('font-size', 12)
      .style('font-weight', 'bold')
      .attr('x', '50%')
      .attr('y', '25%')
      .attr('dominant-baseline', 'central')
      .attr('text-anchor', 'middle')
      .attr('fill', 'black')
      .text('Score distribution');

    const xscale = d3.scaleLinear().domain([0, 100]).range([0, 500]);

    const xAxisSVG = Semester.append('svg')
      .attr('width', totalCourseItemWidth)
      .attr('height', (d, i) => {
        const { allCourseIds } = allSems[d];
        return allCourseIds.length * courseItemPosYScale + semTitleHeight + semHeaderHeight + 40;
      });

    const x_axis = d3.axisTop(xscale).tickSize(0);
    xAxisSVG
      .append('g')
      .style('z-index', 100)
      .attr('transform', `translate(${courseItemScoreDistributionPosX + 2},65)`)
      .call(x_axis);
    xAxisSVG.select('g').select('path').remove();

    Semester.append('svg')
      .attr('width', totalCourseItemWidth)
      .attr('height', (d, i) => {
        const { allCourseIds } = allSems[d];
        return allCourseIds.length * courseItemPosYScale + semTitleHeight + semHeaderHeight + 40;
      })
      .attr('x', courseItemScoreDistributionPosX + 2)
      .attr('y', semHeaderHeight)
      .selectAll('line')
      .data((d, i) => {
        const scaleTick = d3.scaleLinear().domain([0, 100]).range([0, 500]);
        const xAxisTicks = d3.ticks(0, 100, 10);
        const courseCount = allSems[d].allCourseIds.length;

        return xAxisTicks.map((d) => ({
          x: scaleTick(d),
          y2: courseCount * courseItemPosYScale + courseItemPosYScale,
        }));
      })
      .enter()
      .append('line')
      .attr('stroke', '#CBCBCB')
      .attr('x1', (d, i) => d.x + 1)
      .attr('y1', (d, i) => 30)
      .attr('x2', (d, i) => d.x + 1)
      .attr('y2', (d, i) => d.y2);
    // #endregion

    const courseData = Semester.append('svg')
      .attr('y', 70)
      .attr('width', totalCourseItemWidth)
      .attr('height', (d, i) => {
        const { allCourseIds } = allSems[d];
        return allCourseIds.length * courseItemPosYScale;
      })
      .selectAll('svg')
      .data(
        (item, index) => {
          const { allCourseIds } = allSems[item];
          const allCoursesData = allCourseIds.map((courseId) => allSems[item].allCourses[courseId]);
          return allCoursesData;
        },
        (d) => d.id
      );

    function sortByAvgScore(mode) {
      SemesterHeader.select('.sem-header-avg-score').select('svg').remove();
      switch (mode) {
        case 'sort-avg-score-none': {
          SemesterHeader.select('.sem-header-avg-score')
            .append('svg')
            .classed('sort-none', true)
            .on('click', () => sortByAvgScore('sort-avg-score-desc'));
          break;
        }
        case 'sort-avg-score-asc': {
          d3.selectAll('.semester')
            .selectAll('.course-item')
            .sort((a, b) => d3.ascending(a.averageScore, b.averageScore))
            .transition()
            .duration(1000)
            .delay((d, i) => i * 50)
            .attr('y', (d, i) => i * courseItemPosYScale);
          SemesterHeader.select('.sem-header-avg-score')
            .append('svg')
            .attr('x', '85%')
            .attr('y', '35%')
            .attr('width', '6px')
            .attr('height', '16px')
            .append('path')
            .attr('d', 'M -5 7.1 L 6.65 7.1 L 6.65 5 L 11 8 L 6.65 11 L 6.65 8.9 L -5 8.9 L -5 8 Z')
            .attr('fill', '#007fff')
            .attr('stroke', '#007fff')
            .attr('stroke-miterlimit', 10)
            .attr('transform', 'rotate(270,3,8)');
          SemesterHeader.select('.sem-header-avg-score').on('click', () => sortByAvgScore('sort-avg-score-desc'));
          break;
        }
        case 'sort-avg-score-desc': {
          d3.selectAll('.semester')
            .selectAll('.course-item')
            .sort((a, b) => d3.descending(a.averageScore, b.averageScore))
            .transition()
            .duration(1000)
            .delay((d, i) => i * 50)
            .attr('y', (d, i) => i * courseItemPosYScale);
          SemesterHeader.select('.sem-header-avg-score')
            .append('svg')
            .attr('x', '85%')
            .attr('y', '35%')
            .attr('width', '6px')
            .attr('height', '16px')
            .append('path')
            .attr('d', 'M -5 7.1 L 6.65 7.1 L 6.65 5 L 11 8 L 6.65 11 L 6.65 8.9 L -5 8.9 L -5 8 Z')
            .attr('fill', '#007fff')
            .attr('stroke', '#007fff')
            .attr('stroke-miterlimit', 10)
            .attr('transform', 'rotate(450,3,8)');
          SemesterHeader.select('.sem-header-avg-score').on('click', () => sortByAvgScore('sort-avg-score-asc'));
          break;
        }
        default: {
          SemesterHeader.select('.sem-header-avg-score')
            .append('svg')
            .classed('sort-none', true)
            .on('click', () => sortByAvgScore('sort-avg-score-desc'));
          break;
        }
      }
    }

    const CourseItem = courseData
      .enter()
      .append('svg')
      .classed('course-item', true)
      .attr('width', totalCourseItemWidth)
      .attr('height', courseItemHeight)
      .attr('y', (d, i) => i * courseItemPosYScale)
      .style('font-size', 12)
      .style('user-select', 'none');

    CourseItem.append('rect')
      .classed('course-item-rect', true)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', 'rgba(0,0,0,0)')
      .on('mouseover', function (d, i) {
        d3.select(this).attr('fill', 'rgba(220, 220, 220, 0.5)');
      })
      .on('mouseout', function (d, i) {
        d3.select(this).attr('fill', 'rgba(0,0,0,0)');
      });

    CourseItem.append('svg')
      .classed('course-item-name', true)
      .attr('width', courseItemNameWidth)
      .attr('height', courseItemHeight)
      .append('text')
      .attr('y', '50%')
      .attr('dominant-baseline', 'central')
      .text((item, index) => item.name)
      .on('mouseover', function (d, i) {
        const parent = d3.select(this).node().parentNode.parentNode;
        d3.select(parent).select('.course-item-rect').attr('fill', 'rgba(220, 220, 220, 0.5)');
      })
      .on('mouseout', function (d, i) {
        const parent = d3.select(this).node().parentNode.parentNode;
        d3.select(parent).select('.course-item-rect').attr('fill', 'rgba(0, 0, 0, 0)');
      });

    const renderCourseDetail = (course) => this.renderCourseDetail(course);

    CourseItem.on('click', function (d, i) {
      // CourseItem.classed('selected', false);
      // d3.select(this).classed('selected', true);
      // d3.select(this).select('.course-item-rect')
      //   .attr('fill', 'rgba(220, 220, 220, 0.5)')
      //   .on('mouseout', function (d, i) {
      //     const parent = d3.select(this).node().parentNode.parentNode;
      //     d3.select(parent).select('.course-item-rect').attr(d3.select(this).classed('selected') ? 'rgba(220, 220, 220, 0.5)' : 'rgba(0, 0, 0, 0)');
      //   });
      renderCourseDetail(d);
    });

    const AverageScore = CourseItem.append('svg')
      .attr('width', courseItemAvgScoreWidth)
      .attr('height', courseItemHeight)
      .attr('x', courseItemAvgScorePosX)
      .on('mouseover', function (d, i) {
        const parent = d3.select(this).node().parentNode;
        d3.select(parent).select('.course-item-rect').attr('fill', 'rgba(220, 220, 220, 0.5)');
      })
      .on('mouseout', function (d, i) {
        const parent = d3.select(this).node().parentNode;
        d3.select(parent).select('.course-item-rect').attr('fill', 'rgba(0, 0, 0, 0)');
      });

    AverageScore.append('rect')
      .classed('course-item-average-score', true)
      .attr('x', courseItemAvgScoreWidth * 0.37)
      .attr('width', courseItemHeight)
      .attr('height', courseItemHeight)
      .attr('fill', (d, i) => getBackgroundColor(d.averageScore));

    AverageScore.append('text')
      .attr('x', '50%')
      .attr('y', '50%')
      .attr('fill', (d, i) => getFontColor(d.averageScore))
      .attr('dominant-baseline', 'central')
      .attr('text-anchor', 'middle')
      .text((d, i) => d.averageScore);

    const Histogram = CourseItem.append('svg')
      .attr('x', courseItemScoreDistributionPosX)
      .attr('width', maxWidthPlot)
      .attr('height', maxHeightPlot)
      .selectAll('rect')
      .data(
        (item, index) => {
          const allScores = [...item.studentYear1, ...item.studentYear2, ...item.studentYear3, ...item.studentYear4, ...item.studentYearOther];
          allScores.sort((prevScore, currentScore) => prevScore - currentScore);

          const histoChart = d3.histogram();
          histoChart
            .domain([0, 100])
            .thresholds(d3.ticks(0, 100, 100))
            .value((d) => d);

          // Scale height if density is too big
          const histogramData = histoChart(allScores);
          const maxDensity = d3.max(histogramData, (d) => d.length);
          const newHistogramLengthData = histogramData.map((d) => {
            let heightRatio = d.length / maxDensity;
            return {
              x0: d.x0,
              x1: d.x1,
              y: maxHeightPlot - maxHeightPlot * heightRatio,
              height: maxHeightPlot * heightRatio,
              heightPercentage: heightRatio * 100,
              length: d.length,
            };
          });

          return newHistogramLengthData;
        },
        (d) => d.key
      );

    Histogram.enter()
      .append('rect')
      .attr('fill', (d, index) => getHeightColor(d.heightPercentage))
      .attr('width', 5)
      .attr('x', (d, index) => d.x0 * 5)
      .attr('height', (d, index) => 0)
      .attr('y', (d, index) => maxHeightPlot)
      .on('mouseover', function (d, i) {
        const parent = d3.select(this).node().parentNode.parentNode;
        d3.select(parent).select('.course-item-rect').attr('fill', 'rgba(220, 220, 220, 0.5)');
      })
      .on('mouseout', function (d, i) {
        const parent = d3.select(this).node().parentNode.parentNode;
        d3.select(parent).select('.course-item-rect').attr('fill', 'rgba(0, 0, 0, 0)');
      })
      .transition()
      .duration((d, i) => 250 * (d.heightPercentage / 100))
      .attr('y', (d, i) => d.y)
      .attr('height', (d, i) => d.height)
      .delay((d, i) => i * 20);
  }

  renderCourseDetail(course) {
    const { id, name, averageScore, studentYear1, studentYear2, studentYear3, studentYear4, studentYearOther, allLecturers, allLecturerIds } = course;
    // console.log('COURSE DETAIL', course);
    const totalNumberStudent = studentYear1.length + studentYear2.length + studentYear3.length + studentYear4.length + studentYearOther.length;
    const maxPlotHeight = 280;
    const maxBarHeight = maxPlotHeight - 20;

    d3.select('.statistics-courses-right').selectAll('*').remove();
    const rootRightDom = d3.select('.statistics-courses-right');
    rootRightDom.append('div').classed('course-label', true).text(course.name);
    rootRightDom.append('div').classed('student-count', true).html(`
        <div>Number of student: <b>${totalNumberStudent}</b></div>
      `);

    function renderOption(option = null) {
      if (!option) return;
      rootRightDom.select('.option-content').remove();
      switch (option) {
        case 'SCORE_DISTRIBUTION_GENERAL': {
          renderOptionScoreDistributionGeneral();
          break;
        }
        case 'LIST_OF_STUDENTS_AND_LECTURERS': {
          renderOptionListStudentLecturer();
          break;
        }
        default:
          break;
      }
    }

    function renderOptionScoreDistributionGeneral() {
      const OptionContent = rootRightDom.append('div').classed('option-content', true);
      const Histogram = OptionContent.append('svg').classed('histogram-right', true).attr('width', '100%').attr('height', maxPlotHeight);
      const HistogramData = Histogram.append('g')
        .classed('histogram-distribution-overview', true)
        .selectAll('svg')
        .data((item, index) => {
          const allScores = [...studentYear1, ...studentYear2, ...studentYear3, ...studentYear4, ...studentYearOther];
          const histoChart = d3.histogram();
          histoChart
            .domain([0, 100])
            .thresholds(d3.ticks(0, 90, 10))
            .value((d) => d);

          // Scale height if density is too big
          const histogramData = histoChart(allScores);
          const maxDensity = d3.max(histogramData, (d) => d.length);
          const newHistogramLengthData = histogramData.map((d) => {
            let heightRatio = d.length / maxDensity;
            return {
              x0: d.x0,
              x1: d.x1,
              y: maxPlotHeight - maxBarHeight * heightRatio,
              height: maxBarHeight * heightRatio,
              heightPercentage: heightRatio * 100,
              length: d.length,
            };
          });
          return newHistogramLengthData;
        });

      //#region course-item-histogram-bar
      let histogramWidth = d3.select('.statistics-courses-right').select('.histogram-right').node().clientWidth;

      const Bar = HistogramData.enter()
        .append('svg')
        .attr('x', (d, i) => `${i * 10}%`)
        .attr('y', 0)
        .attr('width', '10%')
        .attr('height', maxPlotHeight);

      Bar.append('rect')
        .attr('fill', 'rgba(46,138,208,0.5)')
        .attr('width', '100%')
        .attr('stroke', 'white')
        .attr('stroke-width', 1)
        .attr('height', (d, index) => 0)
        .attr('y', (d, i) => maxPlotHeight)
        .transition()
        .duration((d, i) => 500 * (d.heightPercentage / 100))
        .attr('y', (d, i) => d.y)
        .attr('height', (d, i) => d.height)
        .delay((d, i) => i * 40);

      Bar.append('text')
        .attr('dominant-baseline', 'middle')
        .attr('text-anchor', 'middle')
        .attr('x', (d, i) => `50%`)
        .attr('y', (d, i) => maxPlotHeight - 10)
        .text((d, i) => d.length)
        .transition()
        .duration((d, i) => 500 * (d.heightPercentage / 100))
        .attr('y', (d, i) => d.y - 10)
        .delay((d, i) => i * 40);

      // Create scale
      let scale = d3
        .scaleLinear()
        .domain([0, 90])
        .range([histogramWidth * 0.05, histogramWidth * 0.95]);

      // Add scales to axis
      let xAxis = d3
        .axisBottom()
        .scale(scale)
        .tickSize(2)
        .tickFormat((d, i) => (d !== 90 ? `${d} - ${d + 9}` : '90 - 100'));

      const HistogramAxis = OptionContent.append('svg').attr('width', '100%').attr('height', 45).append('g').classed('histogram-axis', true).call(xAxis);
      HistogramAxis.select('path').remove();
      HistogramAxis.selectAll('text').attr('transform', 'rotate(-60, 15, 15)');

      const HistogramFilter = OptionContent.append('div').classed('btn-toolbar', true).classed('distribution-filter-btn-toolbar', true);
      HistogramFilter.append('button').classed('btn btn-outline-primary distribution-filter-btn active', true).attr('id', 'year1').text('Year 1');
      HistogramFilter.append('button').classed('btn btn-outline-primary distribution-filter-btn', true).attr('id', 'year2').text('Year 2');
      HistogramFilter.append('button').classed('btn btn-outline-primary distribution-filter-btn', true).attr('id', 'year3').text('Year 3');
      HistogramFilter.append('button').classed('btn btn-outline-primary distribution-filter-btn', true).attr('id', 'year4').text('Year 4');
      HistogramFilter.append('button').classed('btn btn-outline-primary distribution-filter-btn', true).attr('id', 'yearOther').text('Other');
      HistogramFilter.selectAll('button').on('click', function () {
        handleDistributionButtonChange.bind(this)();
      });

      renderHistogramnByYear('year1');

      const StudentCountTable = OptionContent.append('div')
        .classed('table-responsive-sm', true)
        .classed('student-count-table', true)
        .append('table')
        .classed('table table-sm table-borderless', true);
      const StudentCountTableHeader = StudentCountTable.append('thead').append('tr');
      StudentCountTableHeader.append('th').classed('thead-year', true).text('Year');
      StudentCountTableHeader.append('th').classed('thead-avg-score', true).text('Avg score');
      StudentCountTableHeader.append('th').classed('thead-student-count', true).text('Number of students');
      const studentCountData = StudentCountTable.append('tbody')
        .selectAll('tr')
        .data((d, i) => {
          const maxStudentDensity = d3.max([studentYear1.length, studentYear2.length, studentYear3.length, studentYear4.length, studentYearOther.length]);
          return [
            {
              name: 'Year 1',
              averageScore: studentYear1.length === 0 ? 0 : (+d3.mean(studentYear1)).toFixed(0),
              studentCount: studentYear1.length,
              widthPercentage: (studentYear1.length / maxStudentDensity) * 100,
            },
            {
              name: 'Year 2',
              averageScore: studentYear2.length === 0 ? 0 : (+d3.mean(studentYear2)).toFixed(0),
              studentCount: studentYear2.length,
              widthPercentage: (studentYear2.length / maxStudentDensity) * 100,
            },
            {
              name: 'Year 3',
              averageScore: studentYear3.length === 0 ? 0 : (+d3.mean(studentYear3)).toFixed(0),
              studentCount: studentYear3.length,
              widthPercentage: (studentYear3.length / maxStudentDensity) * 100,
            },
            {
              name: 'Year 4',
              averageScore: studentYear4.length === 0 ? 0 : (+d3.mean(studentYear4)).toFixed(0),
              studentCount: studentYear4.length,
              widthPercentage: (studentYear4.length / maxStudentDensity) * 100,
            },
            {
              name: 'Other',
              averageScore: studentYearOther.length === 0 ? 0 : (+d3.mean(studentYearOther)).toFixed(0),
              studentCount: studentYearOther.length,
              widthPercentage: (studentYearOther.length / maxStudentDensity) * 100,
            },
          ];
        });
      const StudentCountTableRow = studentCountData.enter().append('tr');
      StudentCountTableRow.append('td')
        .classed('align-middle tbody-year', true)
        .text((d, i) => d.name);
      StudentCountTableRow.append('td')
        .classed('align-middle tbody-avg-score', true)
        .append('div')
        .style('width', '30px')
        .style('height', '30px')
        .style('background-color', (d, i) => (!d.studentCount ? 'rgba(255,255,255,0)' : getBackgroundColor(d.averageScore)))
        .style('color', (d, i) => getFontColor(d.averageScore))
        .text((d, i) => (!d.studentCount ? '' : d.averageScore));
      const StudentCountBarChart = StudentCountTableRow.append('td')
        .classed('align-middle tbody-student-count', true)
        .append('svg')
        .attr('width', '100%')
        .attr('height', 30);
      StudentCountBarChart.append('rect')
        .attr('x', 0)
        .attr('fill', '#2E8AD0')
        .attr('width', 0)
        .attr('height', '100%')
        .transition()
        .duration((d, i) => 500 * (d.widthPercentage / 100))
        .attr('width', (d, i) => `calc(${d.widthPercentage * 0.9}%)`)
        .delay((d, i) => i * 20);

      StudentCountBarChart.append('text')
        .attr('x', 0)
        .attr('y', 20)
        .text((d, i) => d.studentCount)
        .transition()
        .duration((d, i) => 500 * (d.widthPercentage / 100))
        .attr('x', (d, i) => `calc(${d.widthPercentage * 0.9}%)`)
        .attr('dx', (d, i) => (d.studentCount !== 0 ? 5 : 0))
        .delay((d, i) => i * 20);

      function handleDistributionButtonChange() {
        HistogramFilter.selectAll('button').classed('active', false);
        const btnNode = d3.select(this);
        btnNode.classed('active', true);
        renderHistogramnByYear(d3.select(this).attr('id'));
      }

      function renderHistogramnByYear(year) {
        Histogram.select('.histogram-distribution-by-year').remove();
        OptionContent.select('.score-distribution-by-year-tooltip').remove();
        const Tooltip = OptionContent.append('div')
          .classed('score-distribution-by-year-tooltip', true)
          .style('position', 'absolute')
          .style('border', '3px solid grey')
          .style('border-radius', '10px')
          .style('background-color', 'white')
          .style('width', '100px')
          .style('height', '40px')
          .style('display', 'flex')
          .style('justify-content', 'center')
          .style('align-items', 'center')
          .style('visibility', 'hidden')
          .text('YEEEEEEEEEEEET');
        const allScores = [...studentYear1, ...studentYear2, ...studentYear3, ...studentYear4, ...studentYearOther];
        let filteredScore = [];

        switch (year) {
          case 'year1': {
            filteredScore = [...studentYear1];
            break;
          }
          case 'year2': {
            filteredScore = [...studentYear2];
            break;
          }
          case 'year3': {
            filteredScore = [...studentYear3];
            break;
          }
          case 'year4': {
            filteredScore = [...studentYear4];
            break;
          }
          case 'yearOther': {
            filteredScore = [...studentYearOther];
            break;
          }
          default:
            break;
        }

        const HistogramDataByYear = Histogram.append('g')
          .classed('histogram-distribution-by-year', true)
          .selectAll('svg')
          .data((item, index) => {
            const histoChart = d3.histogram();
            histoChart
              .domain([0, 100])
              .thresholds(d3.ticks(0, 90, 10))
              .value((d) => d);

            // Scale height if density is too big
            const histogramDataOverview = histoChart(allScores);
            const histogramDataByYear = histoChart(filteredScore);
            const maxDensity = d3.max(histogramDataOverview, (d) => d.length);
            const newHistogramLengthData = histogramDataByYear.map((d) => {
              let heightRatio = d.length / maxDensity;
              return {
                x0: d.x0,
                x1: d.x1,
                y: maxPlotHeight - maxBarHeight * heightRatio,
                height: maxBarHeight * heightRatio,
                heightPercentage: heightRatio * 100,
                length: d.length,
              };
            });
            return newHistogramLengthData;
          });

        //#region course-item-histogram-bar
        const Bar = HistogramDataByYear.enter()
          .append('svg')
          .attr('x', (d, i) => `${i * 10}%`)
          .attr('y', 0)
          .attr('width', '10%')
          .attr('height', maxPlotHeight);

        Bar.append('rect')
          .attr('fill', 'rgba(46,138,208,1.0)')
          .attr('width', '100%')
          .attr('stroke', 'white')
          .attr('stroke-width', 1)
          .attr('height', (d, index) => 0)
          .attr('y', (d, i) => maxPlotHeight)
          .on('mouseover', function (d, i) {
            Tooltip.style('visibility', 'visible');
            Tooltip.text(d.length);
            d3.select(this).attr('fill', '#174568');
          })
          .on('mousemove', function () {
            Tooltip.style('left', `${d3.event.pageX - 100}px`).style('top', `${d3.event.pageY - 50}px`);
          })
          .on('mouseout', function () {
            Tooltip.style('visibility', 'hidden');
            d3.select(this).attr('fill', 'rgba(46,138,208,1.0)');
          })
          .transition()
          .duration((d, i) => 500 * (d.heightPercentage / 100))
          .attr('y', (d, i) => d.y)
          .attr('height', (d, i) => d.height)
          .delay((d, i) => i * 40);
        //#endregion
      }
    }

    function renderOptionListStudentLecturer() {
      const OptionContent = rootRightDom.append('div').classed('option-content', true);
      const CourseTable = OptionContent.append('div')
        .classed('table-responsive-xl', true)
        .style('margin-top', '20px')
        .append('table')
        .classed('table', true)
        .classed('table-bordered', true)
        .classed('table-hover', true);
      const CourseTableHead = CourseTable.append('thead')
        .append('tr')
        .style('background-color', '#2E8AD0')
        .style('color', 'white')
        .style('text-align', 'center');
      CourseTableHead.append('th').text('Lecturer');
      CourseTableHead.append('th').text('Theory');
      CourseTableHead.append('th').text('Practice');
      const CourseTableBody = CourseTable.append('tbody').selectAll('tr');
      const lecturerData = CourseTableBody.data(
        () => {
          return allLecturerIds;
        },
        (d, i) => allLecturerIds[i]
      );
      const LecturerItem = lecturerData.enter().append('tr');

      LecturerItem.append('td').text((d, i) => allLecturers[d].fullName);
      LecturerItem.append('td')
        .style('text-align', 'center')
        .text((d, i) => (allLecturers[d].isTeachingTheory ? 'x' : ''));
      LecturerItem.append('td')
        .style('text-align', 'center')
        .text((d, i) => (allLecturers[d].isTeachingPractice ? 'x' : ''));
    }

    const DropdownContainer = rootRightDom.append('form').append('div').classed('form-group', true);
    const DropdownMenu = DropdownContainer.append('select')
      .classed('form-control', true)
      .attr('id', 'formControlSelectDropdown')
      .on('change', function () {
        renderOption(d3.select(this).property('value'));
      });
    DropdownMenu.append('option').attr('value', 'SCORE_DISTRIBUTION_GENERAL').text('Score distribution');
    DropdownMenu.append('option').attr('value', 'LIST_OF_STUDENTS_AND_LECTURERS').text('List of students and lecturers');

    rootRightDom.append('div').classed('option-content', true);
    renderOption('SCORE_DISTRIBUTION_GENERAL');
  }

  render() {
    console.log('RENDER');
    console.log('PROPS', this.props);
    console.log('STATE', this.state);
    return (
      <div>
        <Grid container className={'statistic-course-container'}>
          <Grid item lg={2} className={'grid-item-left'}>
            {/* Search and filter panel */}
            <Box display="flex" flexDirection="column" justifyContent="center">
              <RoadBlockIcon className={'road-block-icon'} />
              <div>This page is under development</div>
              <button onClick={() => this._loadRandomData()}>Random data</button>
              <button onClick={() => this._loadData()}>Reset data</button>
            </Box>
          </Grid>
          <Grid item lg={6} className={'grid-item-middle'} ref={this.middleRef}>
            <div className="statistics-courses-middle" />
          </Grid>
          <Grid item lg={4} className={'grid-item-right'} ref={this.rightRef}>
            <div className="statistics-courses-right" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default StatisticsCourses;
