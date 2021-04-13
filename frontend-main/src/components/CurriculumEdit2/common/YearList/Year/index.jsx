import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';

import SemesterList from '../../SemesterList';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    backgroundColor: `rgba(220, 220, 220, 0.7)`,
  },
}));

const Year = (props) => {
  const classes = useStyles();
  const { index, yearId, allSemIdsOrder } = props;
  return (
    <Draggable draggableId={yearId} index={index}>
      {(provided) => {
        return (
          <Paper ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} className={classes.root} elevation={5}> 
            <Typography variant={`body1`} align={`center`}>{`Year ${yearId}`}</Typography>
            <SemesterList semListId={yearId} allSemIdsOrder={allSemIdsOrder} />
          </Paper>
        );
      }}
    </Draggable>
  );
};

// CurriculumEdit.propTypes = {
//   receiveCourses: PropTypes.func.isRequired,
//   receiveCurriculums: PropTypes.func.isRequired,
// };

export default React.memo(Year);
