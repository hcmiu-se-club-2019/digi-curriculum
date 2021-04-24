import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { DragDropContext } from 'react-beautiful-dnd';
// import PropTypes from 'prop-types';

import CourseDragSource from './CourseDragSource/_index';
import YearList from './common/YearList/_index';
import YearHeaderList from './common/YearHeaderList';

const useStyles = (theme) => ({
  root: {
    overflowX: 'auto',
    flexGrow: 1,
  },
});

// const useStyle2 = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexFlow: 'column',
//     height: '100vh',
//   },
// }));

class CurriculumEdit extends Component {
  componentDidMount() {
    const { bulkDispatch } = this.props;
    bulkDispatch();
  }

  handleDragYear = (result, provided) => {
    const { source, destination } = result;
    const { dragYear, dragCourse } = this.props;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    switch (result.type) {
      case 'all-years': {
        dragYear(result, provided);
        return;
      }
      case 'all-courses': {
        dragCourse(result, provided);
        return;
      }
      default: {
        return;
      }
    }
  };

  render() {
    const { classes } = this.props;
    const { yearCount } = this.props;
    return (
      <Box className={classes.root} bgcolor={`whitesmoke`}>
        <CourseDragSource />
        <YearHeaderList yearCount={yearCount} />
        <DragDropContext onDragEnd={this.handleDragYear}>
          <YearList />
        </DragDropContext>
      </Box>
    );
  }
}

// CurriculumEdit.propTypes = {
//   receiveCourses: PropTypes.func.isRequired,
//   receiveCurriculums: PropTypes.func.isRequired,
// };

export default withStyles(useStyles)(CurriculumEdit);
