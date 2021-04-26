import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
// import Box from '@material-ui/core/Box';
// import Paper from '@material-ui/core/Paper';
// import { Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { fade } from '@material-ui/core/styles/colorManipulator';

// console.log(colors.amber[123123]);

import config from '../../config';

const configYear = config.year;
const configCourseTile = config.courseTile;

const StyledButton = withStyles((theme) => ({
  root: {
    padding: theme.spacing(configYear.padding),
    margin: theme.spacing(configYear.margin),
    minWidth: () => {
      const courseTileFullSize = theme.spacing(configCourseTile.width) + theme.spacing(configCourseTile.padding) * 2 + theme.spacing(configCourseTile.margin);
      return courseTileFullSize * 3 + theme.spacing(configYear.padding) * 2;
    },
    color: theme.palette.getContrastText(grey[300]),
    backgroundColor: fade(grey[300], 0.7),
    '&:hover': {
      color: theme.palette.getContrastText(grey[700]),
      backgroundColor: fade(grey[700], 0.7),
    },
  },
}))(Button);

const YearAdd = (props) => {
  // const classes = useStyles();
  // const { index, yearId, allSemIdsOrder } = props;
  return (
    <StyledButton variant="contained" endIcon={<AddIcon />} onClick={() => props.onClick()}>
      Add year
    </StyledButton>
  );
};

// CurriculumEdit.propTypes = {
//   receiveCourses: PropTypes.func.isRequired,
//   receiveCurriculums: PropTypes.func.isRequired,
// };

export default React.memo(YearAdd);
