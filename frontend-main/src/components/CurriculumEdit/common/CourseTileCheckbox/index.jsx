import React, { Component, PureComponent } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import config from '../config';

const configCourseTile = config.courseTile;

const useStyles = (theme) => ({
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

class CourseTileCheckbox extends PureComponent {
  handleSelect = () => {
    const { id, selectCourse } = this.props;
    selectCourse(id);
  };

  render() {
    const { classes } = this.props;
    const { name, credit, isSelected, isSelectedTemp } = this.props;

    return (
      <Button className={classes.button} variant={isSelected ? `contained` : null} disabled={isSelected} onClick={() => this.handleSelect()}>
        <Paper className={classes.paper}>
          <Box display={`flex`} justifyContent={`flex-end`} alignItems={`flex-start`}>
            <Checkbox
              className={classes.iconButton}
              inputProps={{ 'aria-label': 'primary checkbox' }}
              size={`small`}
              checked={isSelected || isSelectedTemp}
              disabled={isSelected}
            />
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
      </Button>
    );
  }
}

export default withStyles(useStyles)(CourseTileCheckbox);
