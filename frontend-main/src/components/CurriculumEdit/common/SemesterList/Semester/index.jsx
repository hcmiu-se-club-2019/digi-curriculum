import React, { PureComponent } from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Droppable } from 'react-beautiful-dnd';

import CourseTile from '../../CourseTile/_index';
import CourseTileAdd from '../../CourseTileAdd';

const useStyle2 = makeStyles((theme) => ({
  courseListContainer: {
    transition: 'background-color 0.2s ease',
    backgroundColor: (props) => (props.isdraggingover === 'true' ? 'dimgray' : 'inherit'),
    '&:hover': {
      backgroundColor: 'lightslategrey',
    },
  },
}));

const CourseListContainer = React.forwardRef((props, ref) => {
  const classes = useStyle2(props);
  return (
    <Box className={classes.courseListContainer} ref={ref} {...props} display={`flex`} flexDirection={`column`}>
      {props.children}
    </Box>
  );
});

const TypographyCreditCount = withStyles((theme) => ({
  root: (props) => (props.color === 'success' ? { color: theme.palette.success.dark } : {}),
}))(Typography);

class Semester extends PureComponent {
  showDialog = ({ yearId, semId }) => {
    const { openDialog } = this.props;
    openDialog({ yearId, semId });
  };

  handleRemoveCourse = ({ yearId, semId, courseId }) => {
    const { removeCourseFromCurriculum, removeSelectedCourseFromCourseList } = this.props;
    const filteredSemId = semId.split(' ')[1];
    removeCourseFromCurriculum({ yearId, semId: filteredSemId, courseId });
    removeSelectedCourseFromCourseList(courseId);
  };

  render() {
    const { yearId, semId, index, courseIds, creditCount } = this.props;

    return (
      <Box>
        <Typography variant={`body1`} align={`center`}>
          Sem {index + 1}
        </Typography>
        <Droppable droppableId={`${yearId} ${semId}`} type={`all-courses`}>
          {(provided, snapshot) => {
            return (
              <CourseListContainer
                ref={provided.innerRef}
                {...provided.droppableProps}
                // I don't know why the warning console forces me to set "isDraggingOver"
                // to lowercase and convert boolean to string. Weird.
                display={`flex`}
                flexDirection={`column`}
                isdraggingover={snapshot.isDraggingOver.toString()}
              >
                {courseIds.map((courseId, index) => {
                  return <CourseTile key={courseId} courseId={courseId} index={index} yearId={yearId} semId={semId} />;
                })}
                {provided.placeholder}
                <CourseTileAdd onClick={() => this.showDialog({ yearId, semId })} />
              </CourseListContainer>
            );
          }}
        </Droppable>
        <TypographyCreditCount variant={`body2`} align={`center`} color={creditCount <= 24 ? `success` : `error`}>
          <Box fontWeight={`fontWeightBold`}>{`${creditCount} / ${24}`}</Box>
        </TypographyCreditCount>
      </Box>
    );
  }
}

// CurriculumEdit.propTypes = {
//   receiveCourses: PropTypes.func.isRequired,
//   receiveCurriculums: PropTypes.func.isRequired,
// };

export default Semester;
