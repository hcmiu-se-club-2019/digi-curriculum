import React, { Component, PureComponent } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Semester from './Semester/_index';

const useStyles = makeStyles((theme) => ({
  semList: {
    // padding: theme.spacing(2),
    // margin: theme.spacing(3),
  },
}));

class SemesterList extends PureComponent {
  // const classes = useStyles();
  render() {
    const { semListId, allSemIdsOrder } = this.props;
    return (
      <Box display={`flex`} flexDirection={`row`}>
        {allSemIdsOrder.map((semId, index) => {
          return (
            <Semester
              key={`${semListId} ${semId}`}
              index={index}
              yearId={semListId}
              semId={`${semId}`}
              //
            />
          );
        })}
      </Box>
    );
  }
}

// CurriculumEdit.propTypes = {
//   receiveCourses: PropTypes.func.isRequired,
//   receiveCurriculums: PropTypes.func.isRequired,
// };

export default SemesterList;
