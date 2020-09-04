import { connect } from "react-redux";

import CurriculumDropDestination from "./CurriculumDropDestination";
import { dragCourse } from "../../redux/curriculums/action";

// const onDragEnd = (result) => {
//   console.log("ON DRAG END");
//   console.log(result);

//   const { source, destination } = result;

//   if (!destination) return;
//   if (source === destination) return;

//   const startYear = source.droppableId.split("-")[0];
//   const startSem = source.droppableId.split("-")[1];
//   const endYear = destination.droppableId.split("-")[0];
//   const endSem = destination.droppableId.split("-")[1];

//   // console.log(startYear, startSem, endYear, endSem);

//   dragCourse(result);

//   // const startColumn = years[startYear].semesters[startSem];
//   // startColumn.courseIds.splice(source.index, 1);

//   // const endColumn = years[endYear].semesters[endSem];
//   // endColumn.courseIds.splice(destination.index, 0, result.draggableId);
// };

const mapStateToProps = (state, ownProps) => {
  const { years, yearOrder } = state.curriculums;
  return {
    years,
    yearOrder,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  onDragEnd: (result) => dispatch(dragCourse(result)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurriculumDropDestination);
