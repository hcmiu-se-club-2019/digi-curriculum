import React, { Component } from 'react';

import './style.scss';

class VerticalHighlightItem extends React.PureComponent {
  render() {
    const { index, isChecked } = this.props;
    return (
      <div
        style={{
          width: '22px',
          backgroundColor: isChecked ? 'rgba(192, 192, 192, 0.5)' : 'rgba(255,255,255,0)',
          margin: `1px ${(index + 1) % 5 === 0 ? 8 : 0}px 1px 0px`,
        }}
      />
    );
  }
}

class VerticalHighlightContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { maxHeightBoxHighlight, allCourses, allCourseIds } = this.props;
    return (
      <div
        className="all-courses-highlight-container"
        style={{
          position: 'absolute',
          height: `${maxHeightBoxHighlight}px`,
          zIndex: 0,
          // top: '160px',
          // left: '658px',
          top: '200px',
          left: '341px',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {allCourseIds.map((courseId, index) => (
          // <div
          //   key={courseId}
          //   style={{
          //     width: '22px',
          //     backgroundColor: allCourses[courseId].isChecked ? 'rgba(192, 192, 192, 0.5)' : 'rgba(255,255,255,0)',
          //     margin: `1px ${(index + 1) % 5 === 0 ? 8 : 0}px 1px 0px`,
          //   }}
          // />
          <VerticalHighlightItem key={courseId} index={index} isChecked={allCourses[courseId].isChecked} />
        ))}
      </div>
    );
  }
}

export default VerticalHighlightContainer;
