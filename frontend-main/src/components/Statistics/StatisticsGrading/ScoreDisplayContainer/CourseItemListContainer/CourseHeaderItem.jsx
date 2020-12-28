import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SortOrder } from '../../SortOptions.enum';

import { ReactComponent as AscendingVerticalIcon } from '../../../../icons/ascending-vertical.svg';
import { ReactComponent as DescendingVerticalIcon } from '../../../../icons/descending-vertical.svg';

const StyledContainer = styled.div`
  width: 20px;
  height: 170px;
  display: flex;
  flex-direction: column;
  margin: 1px ${(props) => (props.index % 5 === 0 ? 5 : 1)}px 1px ${(props) => (props.index % 5 === 1 ? 5 : 1)}px;
  justify-content: flex-end;
`;

const StyledCourseName = styled.div`
  width: 180px;
  height: 20px;
  transform: rotate(-60deg) translate(42px, -69px);
  font-size: 10px;
  color: ${(props) => (props.isSelected ? 'black' : '#CCCCCC')};
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.isSelected ? 'pointer' : 'auto')};
`;

const StyledAverageScore = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px 0px;
  z-index: 2;
`;

class CourseHeaderItem extends Component {
  shouldComponentUpdate(prevProps, prevState) {
    if (prevProps.index !== this.props.index) return true;
    if (prevProps.isSelected !== this.props.isSelected) return true;
    if (prevProps.sortScoreOrder !== this.props.sortScoreOrder) return true;
    return false;
  }

  changeSortMode(headerOptions, id) {
    this.props.onChangeSortMode(headerOptions, id);
  }
  render() {
    const { id, index, name, averageScore, color, backgroundColor, isSelected, selectedSortId, sortScoreOrder } = this.props;

    return (
      <StyledContainer index={index}>
        <StyledCourseName isSelected={isSelected}>{name.length <= 30 ? name : `${name.substring(0, 30)}...`}</StyledCourseName>
        <Checkbox
          disabled={!averageScore}
          checked={isSelected}
          style={{ color: !!averageScore ? '#007FFF' : '#BDBDBD', margin: '0px', padding: '0px', zIndex: 2 }}
          size="small"
          onClick={() => this.props.onClick(id)}
        />
        <StyledAverageScore backgroundColor={backgroundColor} color={color}>
          {!isNaN(averageScore) ? averageScore : ''}
        </StyledAverageScore>
        <div
          style={{
            width: '20px',
            height: '20px',
            color: color ?? 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px 0px -5px 0px',
            cursor: isNaN(averageScore) ? 'auto' : 'pointer',
            zIndex: 2,
          }}
          onClick={() => {
            if (isNaN(averageScore)) return;
            this.props.onSortScore(id, sortScoreOrder === SortOrder.ASC || !sortScoreOrder ? SortOrder.DESC : SortOrder.ASC);
          }}
        >
          {selectedSortId !== null && sortScoreOrder === SortOrder.ASC ? (
            <AscendingVerticalIcon />
          ) : selectedSortId !== null && sortScoreOrder === SortOrder.DESC ? (
            <DescendingVerticalIcon />
          ) : !isNaN(averageScore) ? (
            <svg width="20px" height="20px" fill="#CCCCCC">
              <circle r={3} cx={10} cy={10} />
            </svg>
          ) : (
            ''
          )}
        </div>
      </StyledContainer>
    );
  }
}

CourseHeaderItem.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  name: PropTypes.string,
  averageScore: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  isSelected: PropTypes.bool,
  selectedSortId: PropTypes.string,
  sortScoreOrder: PropTypes.string,
  onSortScore: PropTypes.func,
  onClick: PropTypes.func,
};

export default CourseHeaderItem;
