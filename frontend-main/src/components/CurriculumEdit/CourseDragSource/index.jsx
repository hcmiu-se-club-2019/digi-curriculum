import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import SearchForm from './SearchForm';
import CourseList from './CourseList/_index';

const useStyles = (theme) => ({
  root: {
    // display: 'block',
    // maxHeight: '100vh',
    // overflowY: 'auto',
  },
  searchBox: {
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  courseList: {
    // maxHeight: '100%',
  },
});

class CourseDragSource extends Component {
  handleClose = () => {
    const { classes, isOpen, closeDialog } = this.props;
    closeDialog();
  };

  handleConfirm = () => {
    const { classes, isOpen, closeDialog, yearId, semId, allCourses, allCourseIds, addCoursesToCourseList, addCoursesToSemester } = this.props;
    let courseIdsTemp = allCourseIds.filter((courseId) => allCourses[courseId].isSelectedTemp === true);
    closeDialog();
    addCoursesToSemester({ yearId, semId, courseIds: courseIdsTemp });
    addCoursesToCourseList();
  };
  render() {
    const { classes, isOpen, closeDialog } = this.props;
    return (
      <Dialog
        open={isOpen}
        onClose={() => this.handleClose()}
        scroll={`paper`}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Add Courses</DialogTitle>
        <DialogContent>
          <Box padding={2} className={classes.searchBox}>
            <SearchForm />
          </Box>
          <Box padding={2} className={classes.courseList}>
            <CourseList />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button color={`primary`} onClick={() => this.handleClose()}>
            Cancel
          </Button>
          <Button color={`primary`} onClick={() => this.handleConfirm()}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(useStyles)(CourseDragSource);
