import React, { Component } from 'react';
import * as d3 from 'd3';
import axios from 'axios';
import { Grid, Checkbox, Box } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getGeneratedStatisticByCourses, getGeneratedCourseData, fetchStatisticByCourses } from './FakeCourseOverviewGenerator';
import { useStyles } from './theme';

import { ReactComponent as RoadBlockIcon } from '../../icons/roadblock.svg';
import { ReactComponent as AscendingHorizontalIcon } from '../../icons/ascending-horizontal.svg';
import { ReactComponent as DescendingHorizontalIcon } from '../../icons/descending-horizontal.svg';
import './CourseOverview.scss';

const getBackgroundColor = d3.scaleThreshold().domain([50, 70, 85, 100]).range(['#D9D9D9', '#99CFA1', '#43925F', '#02371A']);
// const getFontColor = d3.scaleLinear().domain([49.9, 50]).range(['#000000', '#FFFFFF']).clamp(true);
const getFontColor = d3.scaleThreshold().domain([50, 70, 85, 100]).range(['#808080', '#FFFFFF', '#FFFFFF', '#FFFFFF']);
// const getHeightColor = d3.scaleThreshold().domain([99, 100]).range(['#2E8AD0', '#cb181d']);
const getHeightColor = d3.scaleThreshold().domain([50, 70, 85, 100]).range(['#8DB8D9', '#8DB8D9', '#2E8AD0', '#174568', '#cb181d']);
const getHeightColorRight = d3.scaleThreshold().domain([99, 100]).range(['#2E8AD0', '#cb181d'])

const xPointScale = d3.scaleLinear().domain([0, 100]).range([0, 600]);

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
    console.log('YEEET');
    this.loadData();
    // this.loadRandomData();
  }

  async loadData() {
    const { allSems, allSemIds } = await fetchStatisticByCourses();
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

  loadRandomData() {
    const { allSems, allSemIds } = getGeneratedCourseData();
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
    console.log('render course');
    const { allSemIds, allSems } = this.state;
    d3.select('.statistics-courses-middle').selectAll('.semester').remove();

    const updateData = d3
      .select('.statistics-courses-middle')
      .selectAll('div')
      .data(allSemIds, (d) => d.key);
    const Semester = updateData
      .enter()
      .append('div')
      .attr('class', (data) => 'semester ' + data);

    Semester.append('div')
      .append('h3')
      .text((d, i) => `Semester ${i + 1}`);
    const SemesterHeader = Semester.append('div')
      .classed('semester-header', true)
      .classed('container', true)
      .append('div')
      .classed('row', true)
      .classed('no-gutters', true);
    SemesterHeader.append('div').classed('col-sm-3', true).classed('header-course-name', true).text('Course name');
    const SortIcon = SemesterHeader.append('div').classed('col-sm-1', true).classed('header-average-score', true).text('Avg score');

    SortIcon.append('span')
      .style('padding', '0px 5px')
      .append('svg')
      .attr('width', '6px')
      .attr('height', '16px')
      .attr('viewBox', '-0.5 -0.5 7 17')
      .append('path')
      .attr('d', 'M -5 7.1 L 6.65 7.1 L 6.65 5 L 11 8 L 6.65 11 L 6.65 8.9 L -5 8.9 L -5 8 Z')
      .attr('fill', '#007fff')
      .attr('stroke', '#007fff')
      .attr('stroke-miterlimit', 10)
      .attr('transform', 'rotate(450,3,8)');

    // SortIcon.append('span')
    //   .style('padding', '0px 5px')
    //   .append('svg')
    //   .attr('width', '6px')
    //   .attr('height', '16px')
    //   .attr('viewBox', '-0.5 -0.5 7 17')
    //   .append('path')
    //   .attr('d', 'M -5 7.1 L 6.65 7.1 L 6.65 5 L 11 8 L 6.65 11 L 6.65 8.9 L -5 8.9 L -5 8 Z')
    //   .attr('fill', '#007fff')
    //   .attr('stroke', '#007fff')
    //   .attr('stroke-miterlimit', 10)
    //   .attr('transform', 'rotate(270,3,8)');

    SemesterHeader.append('div').classed('col-sm-8', true).classed('header-score-distribution', true).text('Score distribution');

    const courseData = Semester.selectAll('div').data(
      (item, index) => {
        const { allCourseIds } = allSems[item];
        const allCoursesData = allCourseIds.map((courseId) => allSems[item].allCourses[courseId]);
        // console.log(allCoursesData);
        return allCoursesData;
      },
      (d) => d.id
    );
    const CourseItem = courseData.enter().append('div').classed('course-item', true);
    const maxWidthPlot = 600;
    const maxHeightPlot = 20;

    CourseItem.on('click', (d, i) => {
      this.renderCourseDetail(d);
    });

    CourseItem.append('div')
      .classed('course-item-name', true)
      .html((item, index) => item.name);

    CourseItem.append('div')
      .classed('course-item-average-score', true)
      .style('background-color', (item, index) => getBackgroundColor(item.averageScore))
      .style('color', (item, index) => getFontColor(item.averageScore))
      .text((item, index) => item.averageScore);

    const Histogram = CourseItem.append('svg')
      .attr('viewBox', (e) => {
        return `0 0 ${maxWidthPlot} ${maxHeightPlot}`;
      })
      .selectAll('rect')
      .data(
        (item, index) => {
          const allScores = [...item.studentYear1, ...item.studentYear2, ...item.studentYear3, ...item.studentOverYear4];
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
              y: 20 - 20 * heightRatio,
              height: 20 * heightRatio,
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
      // .attr('fill', '#174568')
      .attr('fill', (d, index) => getHeightColor(d.heightPercentage))
      .attr('width', 5)
      .attr('x', (d, index) => d.x0 * 5)
      .attr('height', (d, index) => 0)
      .attr('y', (d, index) => 22)
      .transition()
      .duration((d, i) => 250 * (d.heightPercentage / 100))
      .attr('y', (d, i) => d.y)
      .attr('height', (d, i) => d.height)
      .delay((d, i) => i * 20);
  }

  renderCourseDetail(course) {
    const { id, name, averageScore, studentYear1, studentYear2, studentYear3, studentOverYear4 } = course;
    const { current } = this.rightRef;
    const totalNumberStudent = studentYear1.length + studentYear2.length + studentYear3.length + studentOverYear4.length;
    const maxPlotHeight = 280;
    const maxBarHeight = maxPlotHeight - 20;

    d3.select('.statistics-courses-right').selectAll('*').remove();
    const rootRightDom = d3.select('.statistics-courses-right');
    rootRightDom.append('div').classed('course-label', true).text(course.name);
    rootRightDom.append('div').classed('student-count', true).html(`
    <div>Number of student: <b>${totalNumberStudent}</b></div>
    `);

    console.log(d3.select('.statistics-courses-right').node().clientWidth);
    const Histogram = rootRightDom.append('svg').classed('histogram-right', true).attr('width', '100%').attr('height', maxPlotHeight);

    const HistogramData = Histogram.append('g')
      .selectAll('svg')
      .data((item, index) => {
        const allScores = [...studentYear1, ...studentYear2, ...studentYear3, ...studentOverYear4];
        const histoChart = d3.histogram();
        // allScores.sort((prevScore, currentScore) => prevScore - currentScore);
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
        console.log(newHistogramLengthData);
        return newHistogramLengthData;
      });

    let histogramWidth = d3.select('.statistics-courses-right').select('.histogram-right').node().clientWidth;

    const Bar = HistogramData.enter()
      .append('svg')
      .attr('x', (d, i) => `${i * 10}%`)
      .attr('y', 0)
      .attr('width', '10%')
      .attr('height', maxPlotHeight);

    Bar.append('rect')
      .attr('fill', '#2E8AD0')
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

    const HistogramAxis = rootRightDom.append('svg').attr('width', '100%').attr('height', 45).append('g').classed('histogram-axis', true).call(xAxis);
    HistogramAxis.select('path').remove();
    HistogramAxis.selectAll('text').attr('transform', 'rotate(-60, 15, 15)');
  }

  doSort() {
    console.log('render course');
    const { allSemIds, allSems } = this.state;
    allSems['sem1'].allCourseIds.sort((a, b) => allSems['sem1'].allCourses[b].averageScore - allSems['sem1'].allCourses[a].averageScore);
    console.log(allSems['sem1']);
    this.renderCourse();
  }

  doSort2() {}

  render() {
    console.log('RENDER');
    console.log('PROPS', this.props);
    console.log('STATE', this.state);
    const { allSems, allSemIds } = this.state;
    return (
      <div>
        <Grid container className={'statistic-course-container'}>
          <Grid item lg={2} className={'grid-item-left'}>
            {/* Search and filter panel */}
            <Box display="flex" flexDirection="column" justifyContent="center">
              <RoadBlockIcon className={'road-block-icon'} />
              <div>This page is under development</div>
              <button onClick={() => this.doSort()}>Sort by average score</button>
              <button onClick={() => this.componentDidMount()}>Random data</button>
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
