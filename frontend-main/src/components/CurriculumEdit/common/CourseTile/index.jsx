import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';

import config from '../config';

const configCourseTile = config.courseTile;

const useStyles = (theme) => ({
  root: {
    margin: theme.spacing(configCourseTile.margin),
    width: theme.spacing(configCourseTile.width),
    padding: theme.spacing(configCourseTile.padding),
    textAlign: 'center',
  },
  text: {
    fontSize: '0.75rem',
    fontWeight: theme.typography.fontWeightBold,
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    lineHeight: '0.75rem',
  },
  courseName: {
    height: theme.spacing(6),
  },
  credit: {
    padding: theme.spacing(0.25),
  },
  iconButton: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
    height: theme.spacing(2),
  },
  button: {
    padding: theme.spacing(0),
    margin: theme.spacing(configCourseTile.margin),
    textTransform: 'none',
    // color: Grey[500]
  },
  paper: {
    width: theme.spacing(configCourseTile.width),
    padding: theme.spacing(configCourseTile.padding),
    backgroundColor: 'inherit',
  },
});

class CourseTile extends React.PureComponent {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  handleSelect = () => {
    this.props.onSelect();
  };

  handleRemoveCourse = () => {
    const { yearId, semId, courseId } = this.props;
    const { removeCourseFromCurriculum, removeSelectedCourseFromCourseList } = this.props;
    const filteredSemId = semId;
    // const filteredSemId = semId.split(' ')[1];
    removeCourseFromCurriculum({ yearId, semId: filteredSemId, courseId });
    removeSelectedCourseFromCourseList(courseId);
  };

  render() {
    const { classes } = this.props;
    const { courseId, index, name, credit } = this.props;
    const { anchorEl } = this.state;

    return (
      <Draggable draggableId={courseId} index={index} key={courseId}>
        {(provided, snapshot) => (
          <Paper className={classes.root} ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
            <Box display={`flex`} justifyContent={`flex-end`} alignItems={`flex-start`}>
              <IconButton className={classes.iconButton} size={`small`} onClick={this.handleClick}>
                <MoreHorizIcon />
              </IconButton>
              <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={this.handleClose}>
                <MenuItem disabled onClick={this.handleClose}>
                  Detail
                </MenuItem>
                <MenuItem onClick={() => this.handleRemoveCourse()}>Remove</MenuItem>
              </Menu>
            </Box>
            <Box className={classes.courseName} display={`flex`} justifyContent={`center`} alignItems={`center`}>
              <Typography className={classes.text} variant={`body2`}>
                {name}
              </Typography>
            </Box>
            <Box className={classes.credit}>
              <Typography className={classes.text} variant={`body2`}>{`${credit} CR`}</Typography>
            </Box>
          </Paper>
        )}
      </Draggable>
    );
  }
}

export default withStyles(useStyles)(CourseTile);
