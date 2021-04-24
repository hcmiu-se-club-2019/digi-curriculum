import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import config from '../config';

const configCourseTile = config.courseTile;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(configCourseTile.margin),
    width: theme.spacing(configCourseTile.width),
    padding: theme.spacing(configCourseTile.padding),
  },
}));

const CourseTileAdd = (props) => {
  const classes = useStyles();

  const handleClick = () => {
    return props.onClick();
  };

  return (
    <Button className={classes.root} variant={`contained`} color={`default`} onClick={() => handleClick()}>
      <AddIcon />
    </Button>
  );
};

export default React.memo(CourseTileAdd);
