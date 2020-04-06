import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./decoration.css";
import Curriculum from "./Curriculum";
import { getEnglishEntrances } from "../../containers/EnglishEntrances/action";

// import { findCurriculums } from "../../containers/Curriculums/action";

const colorLevels = [
  {
    title: "#3D8BCD",
    content: "#DAE8FC",
  },
  {
    title: "#58B957",
    content: "#D5E8D4",
  },
  {
    title: "#DB524C",
    content: "#F8CECC",
  },
];

class Content extends Component {
  render() {
    // const { curriculums } = this.props;

    return (
      <div>
        {this.props.englishEntrances.map((english, i) => {
          //Work
          // console.log(`CONTENT ${i}`);
          // console.log(this.props.curriculums);
          // console.log(this.props.curriculums[i]);
          // console.log(english);

          return (
            <Curriculum
              key={i}
              level={i + 1}
              titleColor={colorLevels[i].title}
              contentColor={colorLevels[i].content}

              //Bug here
              curriculum={this.props.curriculums[i]}
              englishEntrance={english}
            />
          );
        })}
      </div>
    );
  }
}

// class Content extends Component {
//   render() {
//     return (
//       <div>
//         <Curriculum
//           englishEntrance="IE1"
//           titleColor="#3D8BCD"
//           contentColor="#DAE8FC"
//         />
//         <Curriculum
//           englishEntrance="IE2"
//           titleColor="#58B957"
//           contentColor="#D5E8D4"
//         />
//         <Curriculum
//           englishEntrance="AE1"
//           titleColor="#DB524C"
//           contentColor="#F8CECC"
//         />
//       </div>
//     );
//   }
// }

Content.propTypes = {
  englishEntrances: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
  curriculums: PropTypes.arrayOf(
    PropTypes.shape({
      subMajorId: PropTypes.string,
      programTypeId: PropTypes.string,
      englishEntranceId: PropTypes.string,
      years: PropTypes.arrayOf(
        PropTypes.shape({
          sem1: PropTypes.array,
          sem2: PropTypes.array,
          sem3: PropTypes.array,
        })
      ),
      electiveCourses: PropTypes.array,
    })
  ),
};

const mapStateToProps = (state) => {
  const { englishEntrances, curriculums } = state;

  return {
    englishEntrances,
    curriculums,
  };
};

// Curriculum.propTypes = {
//   subMajorId: PropTypes.string,
//   programTypeId: PropTypes.string,
//   englishEntranceid: PropTypes.string,
//   years: PropTypes.arrayOf(
//     PropTypes.shape({
//       sem1: PropTypes.array,
//       sem2: PropTypes.array,
//       sem3: PropTypes.array,
//     })
//   ),
//   electiveCourses: PropTypes.array,
// };

// const mapStateToProps = (state) => {
//   const {
//     selectedMajorId,
//     selectedSubMajorId,
//     selectedProgramTypeId,
//   } = state.components.home;
//   const { curriculums } = state;
//   return {
//     selectedMajorId,
//     selectedSubMajorId,
//     selectedProgramTypeId,
//     curriculum: curriculums,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    getEnglishEntrances: () => dispatch(getEnglishEntrances()),
  };
};

export default connect(mapStateToProps, null)(Content);
// export default Content;
