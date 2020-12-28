import React, { Component } from 'react';
import Box from '@material-ui/core/Box';

import './style.scss';
import HeaderLeft from './HeaderLeft/_index';
import CourseItemListContainer from './CourseItemListContainer/_index';
import VerticalHighlightContainer from './VerticalHighlightContainer/_index';
import StudentItemListContainer from './StudentItemListContainer/_index'

class ScoreDisplayContainer extends Component {
  render() {
    return (
      <div className={'score-display-content-background'}>
        <div className={'score-display-content'}>
          <Box className={'course-header'}>
            <HeaderLeft />
            <CourseItemListContainer />
          </Box>
          <div className="all-courses-highlight-container">
            <VerticalHighlightContainer />
          </div>
          <StudentItemListContainer />
        </div>
      </div>
    );
  }
}

export default ScoreDisplayContainer;
