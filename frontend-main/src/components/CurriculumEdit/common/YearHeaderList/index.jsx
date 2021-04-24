import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import config from '../config';

const configYear = config.year;
// const configSemester = config.semester;
const configCourseTile = config.courseTile;

const useStyles = makeStyles((theme) => ({
  yearList: {
    // padding: theme.spacing(2),
  },
  year: {
    padding: theme.spacing(configYear.padding),
    paddingBottom: 0,
    margin: theme.spacing(configYear.margin),
    marginBottom: 0,
    minWidth: () => {
      const courseTileFullSize = theme.spacing(configCourseTile.width) + theme.spacing(configCourseTile.padding) * 2 + theme.spacing(configCourseTile.margin);
      // console.log(theme.spacing(configCourseTile.width), theme.spacing(configCourseTile.padding), theme.spacing(configCourseTile.margin));
      // console.log(courseTileFullSize);
      // console.log(courseTileFullSize * 3);
      // console.log(courseTileFullSize * 3 + theme.spacing(configYear.padding) * 2);
      // console.log('');
      return courseTileFullSize * 3 + theme.spacing(configYear.padding) * 2;
    },
  },
}));

// console.log(theme.spacing())

const YearHeaderList = (props) => {
  const classes = useStyles();
  const { yearCount } = props;
  const allYears = Array.from({ length: yearCount });

  return (
    <Box display={`flex`} flexDirection={`row`} alignItems={`flex-start`}>
      {allYears.map((element, index) => (
        <Box key={'year-header' + index} className={classes.year}>
          <Typography variant={`h5`} align={`center`}>
            Year {index + 1}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default YearHeaderList;
