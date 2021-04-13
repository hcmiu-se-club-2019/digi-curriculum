import React from 'react';
import Box from '@material-ui/core/Box';
// import { Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Droppable } from 'react-beautiful-dnd';

import Year from './Year/_index';

const useStyles = makeStyles((theme) => ({
  yearList: {
    // padding: theme.spacing(2),
  },
}));

const YearList = (props) => {
  const classes = useStyles();
  const { allYearIdsOrder } = props;
  return (
    <Box display={`flex`} flexDirection={`column`}>
      <Droppable droppableId={'all-years'} type={`all-years`} direction={`horizonal`}>
        {(provided, snapshot) => (
          <Box
            className={classes.yearList}
            ref={provided.innerRef}
            {...provided.droppableProps}
            display={`flex`}
            flexDirection={`row`}
            alignItems={`flex-start`}
          >
            {allYearIdsOrder.map((yearId, index) => {
              return <Year key={yearId} yearId={yearId} index={index} />;
            })}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
};

// CurriculumEdit.propTypes = {
//   receiveCourses: PropTypes.func.isRequired,
//   receiveCurriculums: PropTypes.func.isRequired,
// };

// export default withStyles(useStyles)(Year);
export default YearList;
