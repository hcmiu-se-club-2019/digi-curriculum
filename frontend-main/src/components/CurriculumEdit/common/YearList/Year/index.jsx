import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';

import SemesterList from '../../SemesterList';
import config from '../../config';

const configYear = config.year;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(configYear.padding),
    margin: theme.spacing(configYear.margin),
    backgroundColor: `rgba(220, 220, 220, 0.7)`,
  },
}));

const Year = (props) => {
  const classes = useStyles();
  const { index, yearId, allSemIdsOrder } = props;
  const { removeYear } = props

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleRemove = () => {
    removeYear();
    handleCloseMenu();
  }

  return (
    <Draggable draggableId={yearId} index={index}>
      {(provided) => {
        return (
          <Paper ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} className={classes.root} elevation={5}>
            <Box display={`flex`} justifyContent={`flex-end`} alignItems={`flex-start`}>
              <IconButton className={classes.iconButton} size={`small`} onClick={handleClickMenu}>
                <MoreHorizIcon />
              </IconButton>
              <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={() => handleCloseMenu()}>
                <MenuItem onClick={() => handleRemove()}>Remove</MenuItem>
              </Menu>
            </Box>
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
